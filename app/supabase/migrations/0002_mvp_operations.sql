-- Support guest pickup orders without exposing customer or transaction data to the public API.

alter table public.transactions
  add column if not exists customer_name text not null default '';

alter table public.transactions
  drop constraint if exists transactions_status_check;
alter table public.transactions
  add constraint transactions_status_check
  check (status in ('pending', 'completed', 'cancelled'));

drop policy if exists "Admins can create transactions" on public.transactions;
drop policy if exists "Admins can update transactions" on public.transactions;
drop policy if exists "Admins can create transaction items" on public.transaction_items;

revoke insert, update on public.transactions from anon, authenticated;
revoke insert, update, delete on public.transaction_items from anon, authenticated;

create index if not exists transactions_happened_at_idx
  on public.transactions (happened_at desc);
create index if not exists transactions_status_happened_at_idx
  on public.transactions (status, happened_at desc);
create index if not exists transaction_items_transaction_id_idx
  on public.transaction_items (transaction_id);

drop function if exists public.record_transaction(jsonb, text);

create or replace function public.place_order(p_items jsonb, p_customer_name text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_order_id uuid;
  v_product_id uuid;
  v_quantity integer;
  v_product record;
  v_total bigint := 0;
  v_subtotal bigint;
  v_name text := trim(coalesce(p_customer_name, ''));
begin
  if p_items is null
     or jsonb_typeof(p_items) <> 'array'
     or jsonb_array_length(p_items) < 1
     or jsonb_array_length(p_items) > 30 then
    raise exception 'Order must contain between 1 and 30 items' using errcode = '22023';
  end if;

  if length(v_name) < 2 or length(v_name) > 80 or v_name ~ '[[:cntrl:]]' then
    raise exception 'Customer name must contain 2 to 80 printable characters' using errcode = '22023';
  end if;

  insert into public.transactions (created_by, customer_name, note, status, total_amount)
  values ((select auth.uid()), v_name, '', 'pending', 0)
  returning id into v_order_id;

  for v_product_id, v_quantity in
    select (entry->>'product_id')::uuid, (entry->>'quantity')::integer
    from jsonb_array_elements(p_items) as entries(entry)
  loop
    if v_quantity < 1 or v_quantity > 99 then
      raise exception 'Item quantity must be between 1 and 99' using errcode = '22023';
    end if;

    select p.id, p.name, p.price
      into v_product
      from public.products p
      where p.id = v_product_id and p.is_active
      for share;

    if not found then
      raise exception 'Product is unavailable' using errcode = '22023';
    end if;

    v_subtotal := v_product.price::bigint * v_quantity;
    v_total := v_total + v_subtotal;
    if v_total > 2147483647 then
      raise exception 'Order total exceeds supported range' using errcode = '22003';
    end if;

    insert into public.transaction_items
      (transaction_id, product_id, product_name, quantity, unit_price)
    values
      (v_order_id, v_product.id, v_product.name, v_quantity, v_product.price);
  end loop;

  update public.transactions
    set total_amount = v_total::integer
    where id = v_order_id;

  return v_order_id;
end;
$$;

revoke all on function public.place_order(jsonb, text) from public;
grant execute on function public.place_order(jsonb, text) to anon, authenticated;

create or replace function public.set_order_status(p_order_id uuid, p_status text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  if p_status not in ('completed', 'cancelled') then
    raise exception 'Unsupported order status' using errcode = '22023';
  end if;

  update public.transactions
    set status = p_status
    where id = p_order_id and status = 'pending';

  return found;
end;
$$;

revoke all on function public.set_order_status(uuid, text) from public, anon;
grant execute on function public.set_order_status(uuid, text) to authenticated;
