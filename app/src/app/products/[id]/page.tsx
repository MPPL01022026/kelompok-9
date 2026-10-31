import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatRupiah, getPublicProduct } from "@/lib/products";
import { CartLink } from "@/app/CartLink";
import { AddToCartButton } from "@/app/AddToCartButton";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getPublicProduct(id);
  if (!product) notFound();
  const normalizedName = product.name.toLocaleLowerCase("id-ID");
  const imageSrc = normalizedName.includes("wing") || normalizedName.includes("sayap")
    ? "/images/menu-fire-wings.jpg"
    : normalizedName.includes("kentang") || normalizedName.includes("fries")
    ? "/images/menu-fries.jpg"
    : normalizedName.includes("ball") || normalizedName.includes("nugget")
      ? "/images/menu-chicken-ball.jpg"
      : "/images/ayam-gunting-hero.jpg";

  return <main className="site-shell"><header className="topbar"><Link href="/" className="brand"><span className="brand-mark">AG</span><span>AYAM GUNTING<small>MALAYSIA · KEDAI</small></span></Link><nav className="detail-nav" aria-label="Navigasi produk"><CartLink/></nav></header>
    <section className="product-detail-screen"><figure className="product-detail-photo"><Image src={imageSrc} alt={`Foto ilustrasi ${product.name}`} fill priority sizes="(max-width: 700px) 100vw, 55vw"/></figure><div className="product-detail-content"><Link href="/#menu" className="detail-back"><ArrowLeft size={15}/> Kembali ke menu</Link><p className="detail-category">{product.category}</p><h1>{product.name}</h1><p className="product-detail-description">{product.description}</p><p className="detail-price">{formatRupiah(product.price)}</p><div className="product-detail-actions"><AddToCartButton productId={product.id} productName={product.name}/><Link className="text-link" href="/#menu">Lihat menu lain <ArrowRight size={15}/></Link></div><p className="product-image-note">Foto menu merupakan ilustrasi sajian.</p></div></section>
    <footer className="container footer"><span>© 2026 Ayam Gunting Malaysia</span><span>Ketersediaan menu mengikuti katalog saat ini.</span></footer></main>;
}
