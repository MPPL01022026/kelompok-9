import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { signIn } from "./actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <main className="admin-wrap"><section className="admin-card">
    <Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Admin</small></span></Link>
    <h1>Selamat datang.</h1><p>Masuk untuk mengelola menu dan melihat aktivitas toko.</p>
    {error === "setup" && <div className="notice">Supabase belum dikonfigurasi. Salin `.env.example` menjadi `.env.local`, lalu isi URL dan anon key project Supabase.</div>}
    {error === "credentials" && <div className="notice">Email atau kata sandi belum cocok. Periksa kembali lalu coba lagi.</div>}
    <form action={signIn}><label className="field-label" htmlFor="email">Email admin</label><input className="field" id="email" name="email" type="email" autoComplete="username" required placeholder="nama@contoh.id"/><label className="field-label" htmlFor="password">Kata sandi</label><input className="field" id="password" name="password" type="password" autoComplete="current-password" required placeholder="Masukkan kata sandi"/><button className="button-primary form-button" type="submit"><LockKeyhole size={15}/> Masuk ke dashboard</button></form>
    <Link href="/" className="back-link"><ArrowLeft size={13}/> &nbsp; Kembali ke katalog</Link>
  </section></main>;
}
