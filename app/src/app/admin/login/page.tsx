import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { signIn } from "./actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <main className="admin-login">
    <section className="login-intro">
      <Link href="/" className="brand"><span className="brand-mark">AG</span><span>AYAM GUNTING<small>MALAYSIA · ADMIN</small></span></Link>
      <p className="login-display">Kelola<br/>pesanan.</p>
      <p className="login-description">Atur menu dan pantau pesanan pelanggan untuk diambil di kedai.</p>
    </section>
    <section className="admin-card">
    <h1>Masuk ke dashboard</h1><p>Gunakan akun admin toko.</p>
    {error === "setup" && <div className="notice">Tetapkan LOCAL_ADMIN_PASSWORD di app/.env.local untuk mode lokal, atau isi kredensial Supabase untuk mode hosted.</div>}
    {error === "credentials" && <div className="notice">Email atau kata sandi belum cocok. Periksa kembali lalu coba lagi.</div>}
    {error === "unauthorized" && <div className="notice">Akun ini belum memiliki akses admin. Hubungi pemilik project untuk mengaktifkannya.</div>}
    <form action={signIn}><label className="field-label" htmlFor="email">Email admin</label><input className="field" id="email" name="email" type="email" autoComplete="username" required placeholder="nama@contoh.id"/><label className="field-label" htmlFor="password">Kata sandi</label><input className="field" id="password" name="password" type="password" autoComplete="current-password" required placeholder="Masukkan kata sandi"/><button className="button-primary form-button" type="submit"><LockKeyhole size={15}/> Masuk ke dashboard</button></form>
    <Link href="/" className="back-link"><ArrowLeft size={13}/> &nbsp; Kembali ke katalog</Link>
    </section>
  </main>;
}
