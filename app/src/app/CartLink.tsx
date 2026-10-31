"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function CartLink() {
  const { itemCount, hydrated } = useCart();
  return <Link href="/cart" className="cart-link" aria-label={`Keranjang, ${hydrated ? itemCount : 0} item`}><ShoppingBag size={16} aria-hidden="true"/><span>Keranjang</span><span className="cart-count" aria-live="polite">{hydrated ? itemCount : 0}</span></Link>;
}
