"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function AddToCartButton({ productId, productName }: { productId: string; productName: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  return <div className="add-to-cart-wrap"><button className="button-primary" type="button" onClick={() => { add(productId); setAdded(true); }}><ShoppingBag size={15} aria-hidden="true"/> Tambah ke keranjang</button><span className="sr-only" aria-live="polite">{added ? `${productName} ditambahkan ke keranjang.` : ""}</span></div>;
}
