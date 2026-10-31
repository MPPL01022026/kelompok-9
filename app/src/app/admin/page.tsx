import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Box, ClipboardList, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { formatJakartaDateTime, formatRupiah } from "@/lib/format";
import { signOut } from "./signout";
import { saveProduct, setProductAvailability } from "./actions";
import { OrderActions } from "./OrderActions";
import { isLocalAdmin, readLocalStore } from "@/lib/local-store";

type AdminPageProps = { searchParams: Promise<{ edit?: string; form?: string; notice?: string }> };

const notices: Record<string, string> = {
  "product-saved": "Perubahan produk telah disimpan.",
  "product-status": "Status ketersediaan produk telah diperbarui.",
  "product-error": "Status produk tidak dapat diperbarui. Coba lagi.",
  "invalid-product": "Produk tidak ditemukan.",
  "order-updated": "Status pesanan telah diperbarui.",
  "order-error": "Status pesanan tidak berubah. Muat ulang halaman dan coba lagi.",
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const supabase = await createClient();
  let userEmail = process.env.LOCAL_ADMIN_EMAIL ?? "admin@localhost";
  let products: { id: string; name: string; description: string; price: number; category: string; emoji: string; is_active: boolean }[] | null;
  let orders: { id: string; customer_name: string; happened_at: string; status: string; total_amount: number }[] | null;
  let productError = false, orderError = false, itemsError = false;
  const groupedItems = new Map<string, { id: string; transaction_id: string; product_name: string; quantity: number; unit_price: number; subtotal: number }[]>();
  if (!supabase) {
    if (!(await isLocalAdmin())) redirect("/admin/login");
    const store = await readLocalStore();
    products = store.products.map((p) => ({ ...p, is_active: p.isActive }));
    orders = store.orders.slice(0, 50).map((o) => ({ id: o.id, customer_name: o.customerName, happened_at: o.happenedAt, status: o.status, total_amount: o.totalAmount }));
    for (const order of store.orders.slice(0, 50)) groupedItems.set(order.id, order.items.map((item) => ({ ...item, transaction_id: order.id, product_name: item.productName, unit_price: item.unitPrice })));
  } else {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) redirect("/admin/login");
    userEmail = userData.user.email ?? "admin";
    const { data: admin, error: adminError } = await supabase.from("admin_users").select("user_id").eq("user_id", userData.user.id).maybeSingle();
    if (adminError || !admin) return <main className="admin-wrap"><section className="admin-card"><div className="brand-mark">✦</div><h1>Akses belum diaktifkan.</h1><p>Akun ini belum terdaftar sebagai admin toko. Minta pemilik project mengaktifkannya pada tabel `admin_users`.</p><form action={signOut}><button className="button-primary" type="submit"><LogOut size={14}/> Keluar</button></form><Link href="/" className="back-link"><ArrowLeft size={13}/> Kembali ke katalog</Link></section></main>;
    const [productResult, orderResult] = await Promise.all([
      supabase.from("products").select("id,name,description,price,category,emoji,is_active,created_at").order("created_at", { ascending: false }),
      supabase.from("transactions").select("id,customer_name,happened_at,status,total_amount").order("happened_at", { ascending: false }).limit(50),
    ]);
    products = productResult.data; productError = Boolean(productResult.error);
    orders = orderResult.data; orderError = Boolean(orderResult.error);
    const orderIds = (orders ?? []).map((order) => order.id);
    const itemResult = orderIds.length ? await supabase.from("transaction_items").select("id,transaction_id,product_name,quantity,unit_price,subtotal").in("transaction_id", orderIds) : { data: [], error: null };
    itemsError = Boolean(itemResult.error);
    for (const item of itemResult.data ?? []) groupedItems.set(item.transaction_id, [...(groupedItems.get(item.transaction_id) ?? []), item]);
  }
  const editProduct = products?.find((product) => product.id === params.edit);
  const activeProducts = (products ?? []).filter((product) => product.is_active);
  const pendingCount = (orders ?? []).filter((order) => order.status === "pending").length;

  return <main className="admin-shell">
    <header className="admin-topbar"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>Ayam Gunting<small>Malaysia • Ruang admin</small></span></Link><div className="admin-user"><span>{userEmail}</span><form action={signOut}><button className="text-button" type="submit"><LogOut size={15}/> Keluar</button></form></div></header>
    <div className="admin-layout">
      <aside className="admin-sidebar" aria-label="Navigasi admin"><p className="admin-sidebar-title">PENGELOLAAN TOKO</p><a href="#produk"><Box size={16}/> Produk</a><a href="#pesanan"><ClipboardList size={16}/> Pesanan</a><Link href="/"><ArrowLeft size={16}/> Lihat katalog</Link></aside>
      <div className="admin-content">
        <div className="admin-page-heading"><div><p className="section-kicker">RINGKASAN OPERASIONAL</p><h1>Dashboard</h1><p>Kelola menu dan proses pesanan katalog.</p></div><span className="admin-date">{formatJakartaDateTime(new Date().toISOString())} WIB</span></div>
        {params.notice && <div className={`admin-alert${params.notice.endsWith("error") ? " is-error" : ""}`} role="status">{notices[params.notice] ?? "Permintaan tidak dapat diproses."}</div>}
        <div className="admin-stats"><article><span>Produk aktif</span><strong>{activeProducts.length}</strong></article><article><span>Pesanan menunggu</span><strong>{pendingCount}</strong><small>Dari 50 pesanan terbaru</small></article><article><span>Jumlah menu</span><strong>{products?.length ?? "-"}</strong></article></div>

        <section className="admin-panel" id="produk"><div className="admin-panel-heading"><div><p className="section-kicker">KATALOG</p><h2>Produk</h2><p>Produk nonaktif tidak muncul pada katalog dan pesanan baru.</p></div><a className="button-primary" href="#form-produk">Tambah produk</a></div>
          {productError ? <div className="admin-alert is-error" role="alert">Daftar produk gagal dimuat. Periksa konfigurasi dan migrasi Supabase.</div> : products?.length ? <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th scope="col">Produk</th><th scope="col">Kategori</th><th scope="col">Harga</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Tindakan</span></th></tr></thead><tbody>{products.map((product) => <tr key={product.id}><td><strong>{product.emoji} {product.name}</strong><small>{product.description || "Tanpa deskripsi"}</small></td><td>{product.category}</td><td>{formatRupiah(product.price)}</td><td><span className={`status-chip${product.is_active ? " is-active" : ""}`}>{product.is_active ? "Aktif" : "Nonaktif"}</span></td><td className="table-actions"><Link className="text-button" href={`/admin?edit=${product.id}#form-produk`}>Ubah</Link><form action={setProductAvailability}><input type="hidden" name="id" value={product.id}/><input type="hidden" name="active" value={String(!product.is_active)}/><button className="text-button" type="submit">{product.is_active ? "Nonaktifkan" : "Aktifkan"}</button></form></td></tr>)}</tbody></table></div> : <div className="catalog-empty"><h3>Belum ada produk</h3><p>Tambahkan produk dengan nama dan harga yang telah dikonfirmasi pemilik.</p></div>}
          <details className="product-editor" id="form-produk" open={Boolean(editProduct || params.form)}><summary>{editProduct ? "Ubah informasi produk" : "Formulir produk baru"}</summary>
            {params.form && <div className="admin-alert is-error" role="alert">{params.form === "invalid" ? "Periksa nama, kategori, ikon, dan harga. Harga harus berupa angka positif." : "Produk gagal disimpan. Periksa kembali isian dan koneksi basis data."}</div>}
            <form className="admin-form product-form" action={saveProduct}>
              {editProduct && <input type="hidden" name="id" value={editProduct.id}/>}
              <label className="field-label" htmlFor="product-name">Nama produk</label><input className="field" id="product-name" name="name" maxLength={100} required defaultValue={editProduct?.name ?? ""}/>
              <label className="field-label" htmlFor="product-category">Kategori</label><input className="field" id="product-category" name="category" maxLength={40} required defaultValue={editProduct?.category ?? "Menu"}/>
              <label className="field-label" htmlFor="product-description">Deskripsi</label><textarea className="field" id="product-description" name="description" maxLength={500} rows={3} defaultValue={editProduct?.description ?? ""}/>
              <div className="form-columns"><div><label className="field-label" htmlFor="product-price">Harga (rupiah)</label><input className="field" id="product-price" name="price" type="number" min="1" step="1" inputMode="numeric" required defaultValue={editProduct?.price ?? ""}/></div><div><label className="field-label" htmlFor="product-emoji">Ikon produk</label><input className="field" id="product-emoji" name="emoji" maxLength={12} required defaultValue={editProduct?.emoji ?? "🍗"}/></div></div>
              <label className="checkbox-field"><input name="is_active" type="checkbox" defaultChecked={editProduct?.is_active ?? true}/> Tampilkan sebagai produk aktif</label>
              <div className="form-actions"><button className="button-primary" type="submit">{editProduct ? "Simpan perubahan" : "Simpan produk"}</button>{editProduct && <Link className="text-button" href="/admin#produk">Batal</Link>}</div>
            </form>
          </details>
        </section>

        <section className="admin-panel" id="pesanan"><div className="admin-panel-heading"><div><p className="section-kicker">PESANAN TERBARU</p><h2>Antrean pesanan</h2><p>Harga dan subtotal berasal dari snapshot saat pesanan dibuat. Waktu menggunakan WIB.</p></div></div>
          {orderError || itemsError ? <div className="admin-alert is-error" role="alert">Antrean gagal dimuat. Pastikan migrasi 0002 telah diterapkan.</div> : orders?.length ? <div className="transaction-list">{orders.map((order) => <article className="transaction-card" key={order.id}><div className="transaction-heading"><div><div><strong>{order.customer_name || "Nama tidak tersedia"}</strong><small>{formatJakartaDateTime(order.happened_at)} WIB · {order.id.slice(0, 8).toUpperCase()}</small></div><span className={`status-chip${order.status === "pending" ? " is-pending" : order.status === "completed" ? " is-active" : " is-cancelled"}`}>{order.status === "pending" ? "Menunggu" : order.status === "completed" ? "Selesai" : "Dibatalkan"}</span></div><strong>{formatRupiah(order.total_amount)}</strong></div><ul>{(groupedItems.get(order.id) ?? []).map((item) => <li key={item.id}><span>{item.quantity} x {item.product_name} ({formatRupiah(item.unit_price)})</span><strong>{formatRupiah(item.subtotal)}</strong></li>)}</ul>{order.status === "pending" && <OrderActions id={order.id} customerName={order.customer_name}/>}</article>)}</div> : <div className="catalog-empty"><h3>Belum ada pesanan</h3><p>Pesanan baru dari katalog akan muncul di bagian ini.</p></div>}
        </section>
        <footer className="admin-footer">Kelompok 9 · Sistem Informasi Penjualan dan Manajemen Produk</footer>
      </div>
    </div>
  </main>;
}
