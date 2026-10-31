<p align="center">
  <img src="docs/assets/readme-banner.svg" alt="Ayam Gunting Malaysia, camilan hangat untuk dipesan dan diambil di kedai" width="100%">
</p>

<h1 align="center">Ayam Gunting Malaysia</h1>

<p align="center">Sistem informasi penjualan dan manajemen produk UMKM</p>

> Prototipe MVP untuk katalog produk dan pesanan ambil di kedai. Mode saat ini memakai data contoh dan penyimpanan lokal pada satu komputer. Belum digunakan untuk operasional publik.

## Tampilan aplikasi

![Katalog produk Ayam Gunting Malaysia](docs/sprint-03/screenshots/01-katalog.png)

![Halaman detail produk](docs/sprint-03/screenshots/02-detail-produk.png)

![Halaman login admin](docs/sprint-03/screenshots/03-login-admin.png)

![Keranjang dalam keadaan kosong](docs/sprint-03/screenshots/04-keranjang-kosong.png)

## Wireframe

Wireframe low-fidelity mendokumentasikan struktur katalog, detail produk, login admin, keranjang, dan dashboard. Sumber SVG dapat disunting; PNG merupakan pratinjau.

<details>
  <summary>Lihat wireframe</summary>

### Katalog

![Wireframe katalog](docs/sprint-03/wireframes/01-katalog.png)

### Detail produk

![Wireframe detail produk](docs/sprint-03/wireframes/02-detail-produk.png)

### Login admin

![Wireframe login admin](docs/sprint-03/wireframes/03-login-admin.png)

### Keranjang dan pesanan

![Wireframe keranjang dan pesanan](docs/sprint-03/wireframes/04-keranjang-pesanan.png)

### Dashboard admin

![Wireframe dashboard admin](docs/sprint-03/wireframes/05-dashboard-admin.png)

</details>

## Fitur MVP

- Menampilkan produk aktif dengan pencarian, kategori, dan detail.
- Menyusun pesanan pada keranjang dan mengirimkan nama pemesan.
- Menyimpan pesanan untuk diambil di kedai, termasuk item, kuantitas, snapshot harga, total, waktu, dan status.
- Mengelola produk dari dashboard admin: tambah, ubah, aktifkan, dan nonaktifkan.
- Memproses antrean pesanan menjadi selesai atau dibatalkan.
- Menampilkan waktu operasional dalam zona Asia/Jakarta.

## Menjalankan aplikasi lokal

Perlu Node.js 20.9 atau lebih baru dan pnpm 9 atau lebih baru. Dari PowerShell:

```powershell
Set-Location app
pnpm install
if (!(Test-Path .env.local)) { Copy-Item .env.example .env.local }
```

Ubah `LOCAL_ADMIN_PASSWORD` pada `app/.env.local`, kemudian jalankan:

```powershell
pnpm dev
```

Buka `http://localhost:3000`. Tanpa credential Supabase, katalog dan pesanan memakai berkas `app/.local-data/store.json`. Berkas tersebut dibuat otomatis dan dikecualikan dari Git.

## Database Supabase

Supabase merupakan target integrasi berikutnya. Untuk menyiapkan project development, tinjau lalu impor [`app/supabase/IMPORT_TO_SUPABASE.sql`](app/supabase/IMPORT_TO_SUPABASE.sql) melalui SQL Editor. Setelah itu, isi `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`, buat akun admin di Supabase Auth, dan tambahkan UUID akun ke `public.admin_users`.

Jangan gunakan contoh katalog atau credential pengembangan sebagai data produksi. Sebelum layanan dibuka ke publik, tinjau kebijakan akses, retensi nama pemesan, dan perlindungan spam pada pemesanan.

## Tim dan kontribusi Sprint 3

| Anggota | Fokus kontribusi |
|---|---|
| Faiza Rahmatika (230504050) | Penyimpanan lokal, validasi server, operasi admin, dan skema Supabase |
| Niluh Naswa Salfa Adlian Lubis (230504092) | Katalog, detail produk, keranjang, dan alur pemesanan |
| Zahra (NIM 230504047) | Antarmuka responsif, aksesibilitas, dan wireframe |
| Nayla Salsabila Awika (230504093) | Koordinasi, tracker, dokumentasi, dan laporan sprint |

Perubahan MVP tersedia pada PR #14 sampai #17. Lihat [riwayat Pull Request](https://github.com/MPPL01022026/kelompok-9/pulls?q=is%3Apr+is%3Amerged) untuk kontribusi dan review.

## Dokumentasi

- [Laporan Sprint 3 (Markdown)](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md)
- [Laporan Sprint 3 (PDF)](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.pdf)
- [Rencana Sprint 3](docs/sprint-03/SPRINT_PLAN.md)
- [Catatan eksekusi Sprint 3](docs/sprint-03/SPRINT_EXECUTION.md)
- [Project backlog](docs/PROJECT_BACKLOG.md)
- [Sprint tracker](docs/SPRINT_TRACKER.md)
- [Pertanyaan terbuka](docs/OPEN_QUESTIONS.md)

Dokumen Sprint 1 dan Sprint 2 tersedia di folder [`docs/`](docs/).

## Batas prototipe

Mode lokal hanya menyimpan data pada komputer yang menjalankan aplikasi. Belum ada sinkronisasi perangkat, pencadangan cloud, pembayaran daring, pengantaran, atau laporan analitik. Data awal katalog dan aturan operasional perlu dikonfirmasi pemilik sebelum penggunaan nyata.
