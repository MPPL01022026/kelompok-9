import { notFound } from "next/navigation";
import { OrderReceipt } from "./OrderReceipt";
import { createClient } from "@/lib/supabase/server";
import { getLocalOrder } from "@/lib/local-store";

export default async function OrderReceivedPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();
  const supabase = await createClient();
  const order = supabase ? null : await getLocalOrder(id);
  if (!supabase && !order) notFound();
  return <OrderReceipt id={id} order={order ? { customerName: order.customerName, totalAmount: order.totalAmount, items: order.items.map((item) => ({ name: item.productName, quantity: item.quantity })) } : null}/>;
}
