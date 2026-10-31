import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPublicProducts } from "@/lib/products";
import { CartView } from "./view";

export default async function CartPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const { products, source } = await getPublicProducts();
  return <main className="site-shell"><header className="container topbar"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Street bites</small></span></Link><Link href="/#menu" className="text-link"><ArrowLeft size={14}/> Kembali ke menu</Link></header><section className="container cart-page"><p className="section-kicker">PESANAN</p><h1>Keranjang</h1><p className="section-sub">Periksa pilihan menu dan jumlahnya.</p>{source === "error" && <div className="notice" role="alert">Daftar menu tidak dapat dimuat. Pesanan belum dapat dilanjutkan.</div>}{source === "local" && <div className="notice" role="status">Mode lokal aktif. Pesanan disimpan di komputer ini.</div>}<CartView products={products} unavailable={source === "error"} canOrder={source === "database" || source === "local"} error={error}/></section></main>;
}
