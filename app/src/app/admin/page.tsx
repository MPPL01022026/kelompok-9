import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, LogOut, Package } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { formatRupiah, sampleProducts } from "@/lib/products";
import { signOut } from "./signout";

export default async function AdminPage() {
  const supabase = await createClient();
  if (!supabase) redirect("/admin/login?error=setup");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: isAdmin } = await supabase.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
  if (!isAdmin) return <main className="admin-wrap"><section className="admin-card"><div className="brand-mark">✦</div><h1>Akses belum diaktifkan.</h1><p>Akunmu berhasil masuk, tetapi belum terdaftar sebagai admin toko. Minta pemilik project untuk menambahkan akun ini ke tabel `admin_users`.</p><form action={signOut}><button className="button-primary" type="submit"><LogOut size={14}/> Keluar</button></form><Link href="/" className="back-link"><ArrowLeft size={13}/> &nbsp; Kembali ke katalog</Link></section></main>;
  const { data: products } = await supabase.from("products").select("id,name,description,price,category,emoji,is_active").order("created_at", { ascending: false });
  const rows = products?.map((p) => ({ ...p, isActive: p.is_active })) ?? [];
  const displayProducts = products ? rows : sampleProducts;

  return <main className="site-shell"><header className="container topbar"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Dashboard</small></span></Link><form action={signOut}><button className="text-link" style={{ border: 0, background: "transparent", cursor: "pointer" }}><LogOut size={14}/> Keluar</button></form></header>
    <section className="container section"><div className="section-head"><div><div className="section-kicker">Ruang admin</div><h2>Kelola menu</h2><p className="section-sub">Masuk sebagai {user.email}</p></div></div>
      {!products && <div className="notice">Belum dapat memuat produk dari database. Periksa koneksi dan kebijakan Supabase. Produk contoh hanya ditampilkan sebagai referensi.</div>}
      <div className="menu-grid">{displayProducts.map((product) => <article className="product-card" key={product.id}><div className="product-image"><span className="product-tag">{product.category}</span><span className="product-emoji">{product.emoji}</span></div><div className="product-info"><div className="product-row"><h3>{product.name}</h3><span className="price">{formatRupiah(product.price)}</span></div><p>{product.description || "Belum ada deskripsi."}</p><div className="product-link"><span>{product.isActive ? "Aktif" : "Nonaktif"}</span><span><Package size={13}/></span></div></div></article>)}</div>
      <Link href="/" className="back-link"><ArrowLeft size={13}/> &nbsp; Lihat katalog publik</Link>
    </section><footer className="container footer"><span>Dashboard Ayam Gunting Malaysia</span><span>Manajemen produk akan dilanjutkan pada iterasi berikut.</span></footer></main>;
}
