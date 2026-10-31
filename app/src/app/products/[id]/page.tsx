import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatRupiah, getPublicProduct } from "@/lib/products";
import { CartLink } from "@/app/CartLink";
import { AddToCartButton } from "@/app/AddToCartButton";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getPublicProduct(id);
  if (!product) notFound();

  return <main className="site-shell"><header className="container topbar"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Street bites</small></span></Link><nav className="detail-nav" aria-label="Navigasi produk"><CartLink/><Link href="/#menu" className="text-link"><ArrowLeft size={14}/> Kembali ke menu</Link></nav></header>
    <section className="container hero detail-hero" style={{ minHeight: "68vh" }}><div><div className="eyebrow"><span className="eyebrow-dot"/>{product.category}</div><h1>{product.name}</h1><p className="hero-copy">{product.description}</p><p className="detail-price">{formatRupiah(product.price)}</p><div className="hero-actions"><AddToCartButton productId={product.id} productName={product.name}/><Link className="text-link" href="/#menu">Lihat menu lain <ArrowRight size={15}/></Link></div></div><div className="hero-art"><div className="food-orbit"/><div className="food-card"><div className="plate"><div className="food-cluster">{product.emoji}</div></div></div><div className="floating-note note-top"><strong>{product.category}</strong>{product.name}</div></div></section>
    <footer className="container footer"><span>© 2026 Ayam Gunting Malaysia</span><span>Ketersediaan menu mengikuti katalog saat ini.</span></footer></main>;
}
