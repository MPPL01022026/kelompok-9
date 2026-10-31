# README - Ayam Gunting Malaysia

### Sistem Informasi Penjualan dan Manajemen Produk UMKM

**Tujuan:** membangun sistem untuk menampilkan katalog, mengelola produk, mencatat transaksi, dan menyajikan ringkasan penjualan UMKM Ayam Gunting Malaysia.

## Ringkasan proyek

Proyek ini mengembangkan aplikasi untuk menampilkan katalog dan membantu admin mengelola produk serta pesanan UMKM Ayam Gunting Malaysia. Data awal produk dan harga dalam aplikasi masih berupa contoh dan perlu dikonfirmasi pemilik.

| Masalah yang dituju | Fitur rencana | Pengguna utama |
|---|---|---|
| Informasi produk sulit dilihat dan diperbarui | Katalog dengan nama, harga, deskripsi, dan ketersediaan | Pelanggan dan admin |
| Data menu perlu dirawat | Tambah, ubah, dan nonaktifkan produk | Admin |
| Pesanan pelanggan perlu dicatat | Keranjang dan pesanan ambil di kedai | Pelanggan dan admin |
| Pemilik perlu melihat hasil penjualan | Riwayat, rekap, dan grafik per periode | Pemilik/admin |

## Batas ruang lingkup

Termasuk katalog, detail produk, pencatatan/pemesanan sederhana, login admin, manajemen produk, transaksi, riwayat, rekap, pengujian, dan dokumentasi. Payment gateway, GPS kurir, integrasi marketplace, akuntansi penuh, dan penggajian berada di luar ruang lingkup awal.

## Tim dan pembagian fokus

| Anggota | Peran/fokus |
|---|---|
| Nayla Salsabila Awika (230504093) | Project Manager; rencana, koordinasi, jadwal, risiko, review, dan pelaporan |
| Niluh Naswa Salfa Adlian Lubis (230504092) | Developer / Analyst & Designer; kebutuhan, use case, alur proses, dan katalog/statistik |
| Faiza Rahmatika (230504050) | Developer / Tester; arsitektur teknis, database integration, admin/transaksi, testing, deployment plan |
| Zahra (NIM 230504047) | Analyst & Designer; wireframe dan rancangan basis data bersama Niluh |

## Dokumen proyek

### Sprint 1 - inisiasi dan perencanaan awal

| Dokumen | Isi |
|---|---|
| [Project Charter](docs/sprint-01/PROJECT_CHARTER.md) | Sasaran, ruang lingkup, keputusan, kriteria hasil, dan jadwal proyek |
| [Stakeholder Register](docs/sprint-01/STAKEHOLDER_REGISTER.md) | Pengguna, tim, pemilik, evaluator, kebutuhan, dan komunikasi |
| [WBS](docs/sprint-01/WORK_BREAKDOWN_STRUCTURE.md) | Paket kerja, deliverable, PIC, dependensi, dan sprint |
| [Function Point](docs/sprint-01/FUNCTION_POINT.md) | Estimasi fungsi sistem menggunakan EI/EO/EQ/ILF/EIF |

### Sprint 2 - analisis, desain, dan baseline perencanaan

| Dokumen | Isi |
|---|---|
| [Project Schedule](docs/sprint-02/PROJECT_SCHEDULE.md) | Jadwal kerja, Gantt teks, dependensi, dan milestone |
| [Resource & Responsibility Plan](docs/sprint-02/RESOURCE_RESPONSIBILITY_PLAN.md) | Pemilik deliverable, kapasitas rencana, serta alat/sumber daya |
| [Effort Estimation](docs/sprint-02/EFFORT_ESTIMATION_MANDAY.md) | Manday per aktivitas dan per anggota |
| [Project Cost Estimation](docs/sprint-02/PROJECT_COST_ESTIMATION.md) | Anggaran kas dasar, asumsi biaya, dan opsi biaya tenaga kerja |
| [Risk Register](docs/sprint-02/RISK_REGISTER.md) | Risiko berperingkat, mitigasi, kontingensi, dan pemilik |

### Sprint 3 - eksekusi proyek

| Dokumen | Isi |
|---|---|
| [Sprint 3 Plan](docs/sprint-03/SPRINT_PLAN.md) | Sasaran, urutan kerja, PIC, kesiapan, kriteria selesai, dan risiko eksekusi |
| [Implementation Handoff](docs/sprint-03/IMPLEMENTATION_HANDOFF.md) | Pemetaan backlog ke area implementasi, dependensi, data, dan catatan review |
| [Catatan Eksekusi Sprint 3](docs/sprint-03/SPRINT_EXECUTION.md) | Kontribusi persiapan, prototipe lokal, dan batas bukti |
| [Laporan pelaksanaan Sprint 3 - Markdown](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md) | Capaian yang tercatat dan bukti repository hingga 31 Oktober 2026 |
| [Laporan pelaksanaan Sprint 3 - PDF](docs/sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.pdf) | Versi PDF laporan dengan tabel dan wireframe hitam putih |

### Dokumen kendali proyek

| Dokumen | Isi |
|---|---|
| [Project Backlog](docs/PROJECT_BACKLOG.md) | Cerita pengguna dan kriteria penerimaan yang dapat diperiksa |
| [Open Questions](docs/OPEN_QUESTIONS.md) | Keputusan yang masih harus divalidasi dan pemilik konfirmasi |
| [Sprint Tracker](docs/SPRINT_TRACKER.md) | Status deliverable dan catatan review |
| [Evidence guidance](docs/evidence/README.md) | Cara menangani bukti observasi dan privasi |

## Tech stack rencana

| Bagian | Rencana |
|---|---|
| Framework dan routing | Next.js App Router |
| Bahasa | TypeScript |
| UI | Tailwind CSS |
| Penyimpanan lokal sementara | Berkas JSON lokal di `app/.local-data/store.json` |
| Database hosted target | Supabase PostgreSQL dan Supabase Auth |
| Deployment | Vercel |
| Kolaborasi | Git dan GitHub; branch per perubahan, commit dengan identitas akun sendiri, Pull Request ke `main` |

MVP menyediakan katalog dengan pencarian dan kategori, detail produk, keranjang, pesanan ambil di kedai, login admin, manajemen produk, dan antrean pesanan. Mode lokal menyimpan pesanan dalam berkas JSON. Integrasi Supabase menyimpan pesanan dengan snapshot harga pada waktu pengiriman. Laporan rekap, pembayaran daring, dan pengiriman tidak termasuk MVP.

Arsitektur implementasi menggunakan Next.js dan TypeScript dengan Supabase untuk PostgreSQL dan autentikasi. Vercel menjadi target deployment. Simpan credential di environment variable dan jangan masukkan secret ke repository.

## Menjalankan aplikasi lokal

Prasyarat: Node.js 20.9+ dan pnpm 9+.

```powershell
Set-Location app
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Buka `http://localhost:3000`. Tanpa konfigurasi Supabase, aplikasi memakai katalog contoh dan penyimpanan lokal di `app/.local-data/store.json`. Berkas dibuat otomatis dan tidak disertakan ke Git. Salin `.env.example` ke `.env.local` dan ubah `LOCAL_ADMIN_PASSWORD` untuk mengaktifkan login admin lokal. Kredensial mode lokal hanya untuk pengembangan pada satu komputer.

Untuk menyiapkan Supabase:

1. Salin URL project dan anon key ke `app/.env.local`.
2. Tinjau lalu impor [`app/supabase/IMPORT_TO_SUPABASE.sql`](app/supabase/IMPORT_TO_SUPABASE.sql) melalui SQL Editor. Berkas tersebut menggabungkan migrasi 0001 dan 0002 secara berurutan.
3. Buat akun admin melalui Supabase Auth Dashboard.
4. Daftarkan UUID akun itu pada `public.admin_users` melalui Table Editor. Jangan membuka pendaftaran admin untuk umum.
5. Masuk ke `/admin`, lalu masukkan produk dan harga yang sudah dikonfirmasi pemilik.

Migrasi MVP membatasi pesanan publik pada fungsi database yang memeriksa produk aktif dan menghitung ulang subtotal, snapshot harga, serta total. Tabel pesanan dan nama pemesan hanya dapat dibaca admin.

## Tampilan aplikasi dan wireframe

Tangkapan layar berikut diambil dari aplikasi lokal pada 31 Oktober 2026. Katalog memakai data contoh pada penyimpanan lokal. Gambar menunjukkan tampilan saat ini; gambar bukan bukti QA atau uji penerimaan.

### Katalog produk

![Tampilan lokal katalog Ayam Gunting Malaysia](docs/sprint-03/screenshots/01-katalog.png)

### Detail produk

![Tampilan lokal detail produk Ayam Gunting](docs/sprint-03/screenshots/02-detail-produk.png)

### Login admin

![Tampilan lokal login admin](docs/sprint-03/screenshots/03-login-admin.png)

### Wireframe low-fidelity untuk handoff

Wireframe sumber SVG memakai frame desktop 1440 x 900, grid 12 kolom, anotasi komponen, state antarmuka, dan catatan responsif. PNG menjadi pratinjau untuk review. Aturan operasional serta retensi nama pemesan tercatat pada [Open Questions](docs/OPEN_QUESTIONS.md).

![Wireframe 16:9 katalog publik](docs/sprint-03/wireframes/01-katalog.png)

![Wireframe 16:9 detail produk](docs/sprint-03/wireframes/02-detail-produk.png)

![Wireframe login admin](docs/sprint-03/wireframes/03-login-admin.png)

![Wireframe keranjang dan pesanan](docs/sprint-03/wireframes/04-keranjang-pesanan.png)

![Wireframe dashboard admin](docs/sprint-03/wireframes/05-dashboard-admin.png)

## Baseline kerja proyek

Jadwal proyek berjalan dalam empat sprint: Sprint 1 (19–23 Oktober 2026), Sprint 2 (26 Oktober–6 November), Sprint 3 (9–20 November), dan Sprint 4 (23 November–4 Desember). Nayla mengelola perubahan jadwal, effort, anggaran, dan risiko berdasarkan keputusan tim, pemilik, serta dosen.

Implementasi aplikasi berada di folder `app/`. Jalankan perintah aplikasi dari folder tersebut. Data menu contoh perlu diganti dengan data yang disetujui pemilik; keputusan alur transaksi dan metrik laporan tetap mengikuti [Open Questions](docs/OPEN_QUESTIONS.md).
