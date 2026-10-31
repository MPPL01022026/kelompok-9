"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createLocalOrder } from "@/lib/local-store";

export async function placeOrder(formData: FormData) {
  const customerName = String(formData.get("customer_name") ?? "").trim();
  if (customerName.length < 2 || customerName.length > 80 || /[\u0000-\u001f\u007f]/.test(customerName)) redirect("/cart?error=name#checkout");

  let rawItems: unknown;
  try {
    rawItems = JSON.parse(String(formData.get("items") ?? ""));
  } catch {
    redirect("/cart?error=items#checkout");
  }
  if (!Array.isArray(rawItems) || rawItems.length < 1 || rawItems.length > 30) redirect("/cart?error=items#checkout");

  const quantities = new Map<string, number>();
  for (const row of rawItems) {
    if (!row || typeof row !== "object" || !("productId" in row) || !("quantity" in row)) redirect("/cart?error=items#checkout");
    const productId = String(row.productId);
    const quantity = Number(row.quantity);
    if (!/^[0-9a-f-]{36}$/i.test(productId) && !/^[a-z0-9-]{2,80}$/i.test(productId)) redirect("/cart?error=items#checkout");
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 99) redirect("/cart?error=items#checkout");
    quantities.set(productId, (quantities.get(productId) ?? 0) + quantity);
    if (quantities.get(productId)! > 99) redirect("/cart?error=items#checkout");
  }

  const supabase = await createClient();
  if (!supabase) {
    let id: string;
    try {
      id = await createLocalOrder(customerName, [...quantities].map(([productId, quantity]) => ({ productId, quantity })));
    } catch { redirect("/cart?error=submit#checkout"); }
    revalidatePath("/admin");
    redirect(`/orders/received/${id}`);
  }
  const items = [...quantities].map(([product_id, quantity]) => ({ product_id, quantity }));
  const { data, error } = await supabase.rpc("place_order", { p_items: items, p_customer_name: customerName });
  if (error || !data) redirect("/cart?error=submit#checkout");
  revalidatePath("/admin");
  redirect(`/orders/received/${data}`);
}
