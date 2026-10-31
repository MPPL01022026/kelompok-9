"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isLocalAdmin, saveLocalProduct, setLocalOrderStatus, setLocalProductAvailability } from "@/lib/local-store";

type AdminClient = NonNullable<Awaited<ReturnType<typeof createClient>>>;

async function requireAdmin(): Promise<AdminClient | null> {
  const supabase = await createClient();
  if (!supabase) {
    if (await isLocalAdmin()) return null;
    redirect("/admin/login?error=unauthorized");
  }
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: admin, error } = await supabase.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
  if (error || !admin) redirect("/admin/login?error=unauthorized");
  return supabase;
}

export async function saveProduct(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const emoji = String(formData.get("emoji") ?? "").trim();
  const price = Number(formData.get("price"));
  if (!name || name.length > 100 || description.length > 500 || !category || category.length > 40 || !emoji || emoji.length > 12 || !Number.isSafeInteger(price) || price <= 0) {
    redirect(`/admin?form=invalid${id ? `&edit=${encodeURIComponent(id)}` : ""}`);
  }

  const supabase = await requireAdmin();
  const values = { name, description, category, emoji, price, is_active: formData.get("is_active") === "on" };
  if (!supabase) {
    try { await saveLocalProduct({ name, description, category, emoji, price, isActive: values.is_active }, id || undefined); }
    catch { redirect(`/admin?form=save-error${id ? `&edit=${encodeURIComponent(id)}` : ""}`); }
    revalidatePath("/"); revalidatePath("/admin");
    redirect("/admin?notice=product-saved#produk");
  }
  const result = id
    ? await supabase.from("products").update({ ...values, updated_at: new Date().toISOString() }).eq("id", id).select("id").maybeSingle()
    : await supabase.from("products").insert(values).select("id").single();

  if (result.error || !result.data) redirect(`/admin?form=save-error${id ? `&edit=${encodeURIComponent(id)}` : ""}`);
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?notice=product-saved#produk");
}

export async function setProductAvailability(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  const active = formData.get("active") === "true";
  if (!id) redirect("/admin?notice=invalid-product");
  const supabase = await requireAdmin();
  if (!supabase) {
    const changed = await setLocalProductAvailability(id, active);
    if (!changed) redirect("/admin?notice=invalid-product");
    revalidatePath("/"); revalidatePath("/admin");
    redirect("/admin?notice=product-status#produk");
  }
  const { error } = await supabase.from("products").update({ is_active: active, updated_at: new Date().toISOString() }).eq("id", id);
  if (error) redirect("/admin?notice=product-error#produk");
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?notice=product-status#produk");
}

export async function updateOrderStatus(formData: FormData) {
  const orderId = String(formData.get("id") ?? "").trim();
  const status = String(formData.get("status") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(orderId) || !["completed", "cancelled"].includes(status)) redirect("/admin?notice=order-error#pesanan");
  const supabase = await requireAdmin();
  if (!supabase) {
    const changed = await setLocalOrderStatus(orderId, status as "completed" | "cancelled");
    if (!changed) redirect("/admin?notice=order-error#pesanan");
    revalidatePath("/admin");
    redirect("/admin?notice=order-updated#pesanan");
  }
  const { data, error } = await supabase.rpc("set_order_status", { p_order_id: orderId, p_status: status });
  if (error || !data) redirect("/admin?notice=order-error#pesanan");
  revalidatePath("/admin");
  redirect("/admin?notice=order-updated#pesanan");
}
