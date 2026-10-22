# README — Ayam Gunting Malaysia

### Sistem Informasi Penjualan dan Manajemen Produk UMKM

**Tujuan:** merencanakan sistem untuk menampilkan katalog, mengelola produk, mencatat transaksi, dan menyajikan ringkasan penjualan UMKM Ayam Gunting Malaysia.

## Ringkasan proyek

Brief tugas menyebut produk ayam gunting, kentang goreng, chicken ball, dan fire chicken wings. Sistem direncanakan untuk membantu pemilik mengelola informasi produk dan transaksi secara terstruktur. Nama pemilik, harga menu, proses transaksi saat ini, dan aturan operasional belum tersedia dalam materi yang sudah dimasukkan; kebutuhan tersebut diperlakukan sebagai asumsi sampai dikonfirmasi.

| Masalah yang dituju | Fitur rencana | Pengguna utama |
|---|---|---|
| Informasi produk sulit dilihat dan diperbarui | Katalog dengan nama, harga, deskripsi, dan ketersediaan | Pelanggan dan admin |
| Data menu perlu dirawat | Tambah, ubah, dan nonaktifkan produk | Admin |
| Penjualan perlu dicatat | Transaksi dan item pesanan | Admin |
| Pemilik perlu melihat hasil penjualan | Riwayat, rekap, dan grafik per periode | Pemilik/admin |

## Batas ruang lingkup

Termasuk katalog, detail produk, pencatatan/pemesanan sederhana, login admin, manajemen produk, transaksi, riwayat, rekap, pengujian, dan dokumentasi. Payment gateway, GPS kurir, integrasi marketplace, akuntansi penuh, dan penggajian berada di luar ruang lingkup awal.

## Tim dan pembagian fokus

| Anggota | Peran/fokus |
|---|---|
| Nayla Salsabila Awika (230504093) | Project Manager; rencana, koordinasi, jadwal, risiko, review, dan pelaporan |
| Niluh Naswa Salfa Adlian Lubis (230504092) | Developer / Analyst & Designer; kebutuhan, use case, alur proses, dan katalog/statistik |
| Faiza Rahmatika (230504050) | Developer / Tester; arsitektur teknis, database integration, admin/transaksi, testing, deployment plan |
| Zahra (`zahraanissa377-wq`) | Analyst & Designer; wireframe dan rancangan basis data bersama Niluh |

## Dokumen proyek

### Sprint 1 — inisiasi dan perencanaan awal

| Dokumen | Isi |
|---|---|
| [Project Charter](docs/sprint-01/PROJECT_CHARTER.md) | Sasaran, ruang lingkup, asumsi, kriteria hasil, dan jadwal empat pekan |
| [Stakeholder Register](docs/sprint-01/STAKEHOLDER_REGISTER.md) | Pengguna, tim, pemilik, evaluator, kebutuhan, dan komunikasi |
| [WBS](docs/sprint-01/WORK_BREAKDOWN_STRUCTURE.md) | Paket kerja, deliverable, PIC, dependensi, dan sprint |
| [Function Point](docs/sprint-01/FUNCTION_POINT.md) | Perhitungan ulang rincian EI/EO/EQ/ILF/EIF dan perbandingan dengan angka brief |

### Sprint 2 — analisis, desain, dan baseline perencanaan

| Dokumen | Isi |
|---|---|
| [Project Schedule](docs/sprint-02/PROJECT_SCHEDULE.md) | Jadwal kerja, Gantt teks, dependensi, dan milestone |
| [Resource & Responsibility Plan](docs/sprint-02/RESOURCE_RESPONSIBILITY_PLAN.md) | Pemilik deliverable, kapasitas rencana, serta alat/sumber daya |
| [Effort Estimation](docs/sprint-02/EFFORT_ESTIMATION_MANDAY.md) | Manday per aktivitas dan per anggota |
| [Project Cost Estimation](docs/sprint-02/PROJECT_COST_ESTIMATION.md) | Anggaran kas dasar, asumsi biaya, dan opsi biaya tenaga kerja |
| [Risk Register](docs/sprint-02/RISK_REGISTER.md) | Risiko berperingkat, mitigasi, kontingensi, dan pemilik |

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
| Database dan autentikasi | Supabase PostgreSQL dan Supabase Auth |
| Deployment | Vercel |
| Kolaborasi | Git dan GitHub; branch per perubahan, commit dengan identitas akun sendiri, Pull Request ke `main` |

Stack adalah keputusan perencanaan, belum dibangun atau diuji. Tidak ada scaffolding aplikasi, proyek Supabase, atau deployment dalam deliverable perencanaan ini. Jangan menyimpan secret di repository.

## Baseline asumsi

Jadwal kerja contoh memakai Sprint 1 tanggal 19–23 Oktober 2026 dan Sprint 2 tanggal 26 Oktober–6 November 2026. Angka ini merupakan baseline usulan untuk latihan perencanaan, bukan tenggat resmi dosen. Perkiraan manday, biaya kas, durasi, dan risiko juga merupakan estimasi awal. Perbarui setelah tim dan pihak terkait memberi konfirmasi.
