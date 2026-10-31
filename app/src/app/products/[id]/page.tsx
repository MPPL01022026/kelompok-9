import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatRupiah, sampleProducts } from "@/lib/products";

export function generateStaticParams() {
  return sampleProducts.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = sampleProducts.find((item) => item.id === id && item.isActive);
  if (!product) notFound();

  return <main className="site-shell"><header className="container topbar"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Street bites</small></span></Link><Link href="/#menu" className="text-link"><ArrowLeft size={14}/> Kembali ke menu</Link></header>
    <section className="container hero" style={{ minHeight: "68vh" }}><div><div className="eyebrow"><span className="eyebrow-dot"/>{product.category}</div><h1>{product.name}, <em>siap bikin happy.</em></h1><p className="hero-copy">{product.description} Disiapkan hangat untuk menemani waktu santai atau dibagikan bersama orang tersayang.</p><p style={{ color: "var(--red)", fontWeight: 800, fontSize: 22 }}>{formatRupiah(product.price)} <span style={{ color: "var(--muted)", fontSize: 12, fontWeight: 400 }}>· harga contoh</span></p><div className="hero-actions"><Link className="button-primary" href="/#menu">Lihat menu lain <ArrowRight size={15}/></Link></div></div><div className="hero-art"><div className="food-orbit"/><div className="food-card"><div className="plate"><div className="food-cluster">{product.emoji}</div></div></div><div className="floating-note note-top"><strong>Dibuat hangat</strong>Untuk waktu ngemilmu</div></div></section>
    <footer className="container footer"><span>© 2026 Ayam Gunting Malaysia</span><span>Menu dan harga contoh, menunggu konfirmasi pemilik.</span></footer></main>;
}
