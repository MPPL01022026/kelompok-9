"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../CartProvider";
import type { Product } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { placeOrder } from "./actions";
import { PlaceOrderButton } from "./PlaceOrderButton";

const orderErrors: Record<string, string> = {
  name: "Masukkan nama pemesan, antara 2 sampai 80 karakter.",
  items: "Keranjang tidak valid. Periksa jumlah setiap menu.",
  setup: "Pemesanan memerlukan koneksi basis data. Silakan hubungi toko.",
  submit: "Pesanan belum tersimpan. Periksa ketersediaan menu dan coba lagi.",
};

export function CartView({ products, unavailable, canOrder, error }: { products: Product[]; unavailable: boolean; canOrder: boolean; error?: string }) {
  const { items, hydrated, update, remove } = useCart();
  if (!hydrated) return <div className="cart-skeleton" aria-busy="true" aria-label="Memuat keranjang"><span/><span/><span/></div>;
  if (!items.length) return <div className="catalog-empty cart-empty"><h2>Keranjang masih kosong</h2><p>Pilih produk dari katalog untuk memulai pesanan.</p><Link className="button-primary" href="/#menu">Jelajahi menu <ArrowRight size={15}/></Link></div>;

  const lines = items.map((item) => ({ item, product: products.find((product) => product.id === item.productId) })).filter((line): line is { item: (typeof items)[number]; product: Product } => Boolean(line.product));
  const unavailableItems = items.filter((item) => !products.some((product) => product.id === item.productId));
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.item.quantity, 0);

  return <div className="cart-layout"><section className="cart-lines" aria-label="Produk dalam keranjang">
    {lines.map(({ item, product }) => <article className="cart-item" key={item.productId}><div className="cart-item-info"><h2>{product.name}</h2><p>{formatRupiah(product.price)} per produk</p></div><div className="quantity-stepper" aria-label={`Jumlah ${product.name}`}><button type="button" aria-label={`Kurangi ${product.name}`} disabled={item.quantity <= 1} onClick={() => update(item.productId, item.quantity - 1)}><Minus size={15}/></button><output aria-live="polite">{item.quantity}</output><button type="button" aria-label={`Tambah ${product.name}`} disabled={item.quantity >= 999} onClick={() => update(item.productId, item.quantity + 1)}><Plus size={15}/></button></div><strong className="cart-line-total">{formatRupiah(product.price * item.quantity)}</strong><button className="remove-item" type="button" aria-label={`Hapus ${product.name} dari keranjang`} onClick={() => remove(item.productId)}><Trash2 size={16}/></button></article>)}
    {unavailableItems.map((item) => <article className="cart-unavailable" key={item.productId}><p>Salah satu menu di keranjang sudah tidak tersedia. Hapus item ini untuk melanjutkan.</p><button className="text-button" type="button" onClick={() => remove(item.productId)}>Hapus item</button></article>)}
    <Link className="text-button back-to-menu" href="/#menu"><ArrowRight size={14}/> Tambah menu lain</Link>
  </section><aside className="cart-summary"><h2>Ringkasan</h2><p><span>Subtotal</span><strong>{formatRupiah(subtotal)}</strong></p><small>Total dihitung kembali dari daftar menu saat pesanan dikirim.</small><div className="pickup-note"><strong>Pengambilan di kedai</strong><span>Tunjukkan kode pesanan saat mengambil pesanan.</span></div><form id="checkout" action={placeOrder} className="checkout-form"><input type="hidden" name="items" value={JSON.stringify(items.map(({ productId, quantity }) => ({ productId, quantity })))}/><label className="field-label" htmlFor="customer-name">Nama pemesan</label><input className="field" id="customer-name" name="customer_name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Nama lengkap" aria-describedby={error ? "checkout-error" : undefined}/>{error && <p className="checkout-error" id="checkout-error" role="alert">{orderErrors[error] ?? "Pesanan tidak dapat diproses."}</p>}<PlaceOrderButton disabled={!canOrder || unavailable || unavailableItems.length > 0 || !lines.length}/><small>Nama hanya digunakan untuk mengenali pesanan saat pengambilan.</small></form></aside></div>;
}
