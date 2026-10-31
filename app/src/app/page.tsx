import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getPublicProducts } from "@/lib/products";
import { Catalog } from "./Catalog";
import { CartLink } from "./CartLink";

export default async function HomePage() {
  const { products, source } = await getPublicProducts();

  return (
    <main className="site-shell shop-home">
      <header className="topbar">
        <Link href="/" className="brand"><span className="brand-mark">AG</span><span>AYAM GUNTING<small>MALAYSIA · KEDAI</small></span></Link>
        <nav className="nav" aria-label="Navigasi utama"><a href="#menu">Menu</a><a href="#cara-pesan">Cara pesan</a><CartLink/></nav>
      </header>

      <section className="shop-hero">
        <div className="shop-hero-copy">
          <h1>Ayam gunting.</h1>
          <p className="shop-lead">Ayam goreng khas Malaysia.</p>
          <p className="shop-intro">Pilih ayam gunting atau camilan lain, pesan lewat katalog, lalu ambil langsung di kedai.</p>
          <div className="shop-hero-actions"><a className="button-primary" href="#menu">Pilih menu <ArrowRight size={17}/></a><Link className="shop-secondary-link" href="/cart">Lihat keranjang <ArrowUpRight size={16}/></Link></div>
          <p className="shop-pickup-note">Pesanan untuk diambil di kedai</p>
        </div>
        <figure className="shop-hero-photo">
          <Image src="/images/ayam-gunting-hero.jpg" alt="Potongan ayam goreng renyah dengan saus" fill priority sizes="(max-width: 760px) 100vw, 54vw" />
        </figure>
      </section>

      <section className="section shop-menu" id="menu">
        <div className="shop-section-head"><div><h2>Menu favorit</h2></div><p className="section-sub">Pilih camilan dan jumlahnya. Kami siapkan untuk pengambilan di kedai.</p></div>
        {source === "error" && <div className="notice" role="alert">Menu gagal dimuat. Periksa koneksi, konfigurasi, atau kebijakan basis data, lalu coba lagi.</div>}
        <Catalog products={products} />
        <p className="menu-image-note">Foto menu merupakan ilustrasi sajian.</p>
      </section>

      <section className="shop-order-band" id="cara-pesan">
        <div className="shop-order-heading"><h2>Cara pesan</h2></div>
        <ol className="shop-order-steps"><li><div><strong>Pilih camilan</strong><p>Jelajahi menu dan tambahkan pilihanmu ke keranjang.</p></div></li><li><div><strong>Kirim pesanan</strong><p>Isi nama pemesan, lalu simpan pesananmu.</p></div></li><li><div><strong>Ambil di kedai</strong><p>Tunjukkan kode pesanan saat mengambil camilan.</p></div></li></ol>
      </section>

      <footer className="footer"><span>© 2026 Ayam Gunting Malaysia</span><Link href="/admin/login">Ruang admin <ArrowUpRight size={14}/></Link></footer>
    </main>
  );
}
