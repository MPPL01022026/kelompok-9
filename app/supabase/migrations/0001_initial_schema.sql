-- Initial schema for the Ayam Gunting Malaysia application.
-- Apply with the Supabase SQL editor after reviewing the Sprint 2 data model.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) > 0),
  description text not null default '',
  price integer not null check (price >= 0),
  category text not null default 'Menu',
  emoji text not null default '🍗',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete set null,
  happened_at timestamptz not null default now(),
  status text not null default 'completed' check (status in ('completed', 'cancelled')),
  payment_method text,
  note text not null default '',
  total_amount integer not null default 0 check (total_amount >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.transaction_items (
  id uuid primary key default gen_random_uuid(),
  transaction_id uuid not null references public.transactions(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null check (quantity > 0),
  unit_price integer not null check (unit_price >= 0),
  subtotal integer generated always as (quantity * unit_price) stored
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
  );
$$;

alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.transactions enable row level security;
alter table public.transaction_items enable row level security;

create policy "Admins can view admin list" on public.admin_users
  for select to authenticated using (public.is_admin());
create policy "Anyone can view active products" on public.products
  for select to anon, authenticated using (is_active or public.is_admin());
create policy "Admins can insert products" on public.products
  for insert to authenticated with check (public.is_admin());
create policy "Admins can update products" on public.products
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins can delete products" on public.products
  for delete to authenticated using (public.is_admin());
create policy "Admins can view transactions" on public.transactions
  for select to authenticated using (public.is_admin());
create policy "Admins can create transactions" on public.transactions
  for insert to authenticated with check (public.is_admin());
create policy "Admins can update transactions" on public.transactions
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admins can view transaction items" on public.transaction_items
  for select to authenticated using (public.is_admin());
create policy "Admins can create transaction items" on public.transaction_items
  for insert to authenticated with check (public.is_admin());

grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant select, insert, update on public.transactions to authenticated;
grant select, insert on public.transaction_items to authenticated;
grant select on public.admin_users to authenticated;
