import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import { formatRupiah, getPublicProducts } from "@/lib/products";

export default async function HomePage() {
  const { products, source } = await getPublicProducts();

  return (
    <main className="site-shell">
      <header className="container topbar">
        <Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Street bites</small></span></Link>
        <nav className="nav" aria-label="Navigasi utama"><a href="#menu">Menu</a><a href="#cerita">Cerita kami</a><Link href="/admin/login" className="nav-cta">Masuk admin <ArrowUpRight size={14} /></Link></nav>
      </header>

      <section className="container hero">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" />Camilan hangat, dibuat sepenuh hati</div>
          <h1>Renyahnya bikin <em>balik lagi.</em></h1>
          <p className="hero-copy">Teman ngemil yang selalu pas. Dari ayam gunting favorit sampai camilan hangat untuk berbagi—dibuat segar, disajikan dengan senyum.</p>
          <div className="hero-actions"><a className="button-primary" href="#menu">Lihat menu <ArrowRight size={15} /></a><a className="text-link" href="#cerita">Kenali kami <ArrowDown size={14} /></a></div>
          <div className="hero-meta"><span><Sparkles size={14} color="#ef9e35" /><b>Fresh</b> setiap hari</span><span><Clock3 size={14} /><b>Siap</b> untuk teman santai</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi ayam goreng dan camilan">
          <div className="food-orbit" /><div className="food-card"><span className="spark one">✦</span><span className="spark two">✳</span><div className="plate"><div className="food-cluster">🍗🍟</div></div></div>
          <div className="floating-note note-top"><strong>Gurih, renyah, hangat</strong>Dibuat untuk dinikmati</div>
          <div className="floating-note note-bottom"><strong>Menu pilihan</strong>Temukan camilan favoritmu ✨</div>
        </div>
      </section>

      <section className="container section" id="menu">
        <div className="section-head"><div><div className="section-kicker">Dari dapur kami</div><h2>Temukan favoritmu</h2><p className="section-sub">Pilihan hangat untuk menemani hari.</p></div><span className="catalog-note"><span className="eyebrow-dot" />{source === "sample" ? "Menu contoh" : "Menu tersedia"}</span></div>
        <div className="menu-grid">{products.map((product) => <article className="product-card" key={product.id}>
          <Link href={`/products/${product.id}`} aria-label={`Lihat ${product.name}`}>
            <div className="product-image"><span className="product-tag">{product.category}</span><span className="product-emoji">{product.emoji}</span></div>
            <div className="product-info"><div className="product-row"><h3>{product.name}</h3><span className="price">{formatRupiah(product.price)}</span></div><p>{product.description}</p><div className="product-link"><span>Lihat detail</span><span><ArrowRight size={13} /></span></div></div>
          </Link>
        </article>)}{products.length === 0 && <p className="empty-state">Belum ada produk yang tersedia. Silakan kembali lagi nanti.</p>}</div>
      </section>

      <section className="container story-band" id="cerita"><div><h2>Sederhana, hangat, selalu bikin rindu.</h2><p>Ayam Gunting Malaysia — camilan favorit untuk dinikmati bersama.</p></div><a href="#menu" className="button-primary">Jelajahi menu <ArrowRight size={14} /></a></section>
      <footer className="container footer"><span>© 2026 Ayam Gunting Malaysia</span><span>Dibuat hangat, dinikmati bersama.</span></footer>
    </main>
  );
}
