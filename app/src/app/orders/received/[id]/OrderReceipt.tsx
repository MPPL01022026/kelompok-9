"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useCart } from "@/app/CartProvider";

export function OrderReceipt({ id, order }: { id: string; order: { customerName: string; totalAmount: number; items: { name: string; quantity: number }[] } | null }) {
  const { clear } = useCart();
  useEffect(() => clear(), [clear]);
  return <main className="order-receipt"><section><span className="receipt-check"><Check size={25}/></span><p className="section-kicker">PESANAN DITERIMA</p><h1>Terima kasih sudah memesan.</h1><p>Pesanan Anda sedang menunggu diproses. Tunjukkan kode pesanan ini saat mengambil pesanan di kedai.</p>{order && <div className="receipt-order"><p>Atas nama <strong>{order.customerName}</strong></p><ul>{order.items.map((item, index) => <li key={`${item.name}-${index}`}><span>{item.quantity} x {item.name}</span></li>)}</ul><strong>Total Rp {new Intl.NumberFormat("id-ID").format(order.totalAmount)}</strong></div>}<div className="receipt-code"><span>Kode pesanan</span><strong>{id.toUpperCase()}</strong></div><Link className="button-primary" href="/">Kembali ke katalog</Link></section></main>;
}
