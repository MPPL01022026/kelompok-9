# Project Charter

## Informasi umum

| Elemen | Baseline proyek |
|---|---|
| Nama | Sistem Informasi Penjualan dan Manajemen Produk UMKM Ayam Gunting Malaysia |
| Sponsor/pemilik | Pemilik UMKM Ayam Gunting Malaysia; nama tidak tercantum dalam brief |
| Project Manager | Nayla Salsabila Awika (230504093) |
| Tim inti | Niluh Naswa Salfa Adlian Lubis (230504092), Faiza Rahmatika (230504050), Zahra (`zahraanissa377-wq`) |
| Mata kuliah | Manajemen Proyek Perangkat Lunak (MPPL), tahun akademik 2026/2027 |
| Durasi rencana | 4 pekan, 19 Oktober–13 November 2026 (asumsi kalender untuk baseline latihan) |
| Fase saat ini | Perencanaan; aplikasi dan layanan belum dibuat |
| Stack rencana | Next.js App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL/Auth, Vercel |

Dasar proyek adalah `Tugas MPPL 1.docx`; detail bisnis yang tidak tercantum tidak dianggap sebagai fakta.

## Latar belakang dan masalah

Brief menggambarkan UMKM makanan ringan/olahan ayam dengan menu ayam gunting, kentang goreng, chicken ball, dan fire chicken wings. Katalog, pengelolaan produk, pencatatan penjualan, dan ringkasan periode adalah kebutuhan yang dituju. Proses manual yang sekarang dipakai, harga, volume transaksi, serta kendala spesifik belum terukur; Sprint 2 memvalidasi dan merancangnya.

## Tujuan dan hasil yang diukur

1. Menghasilkan spesifikasi katalog, pengelolaan produk, transaksi, dan laporan yang dapat ditinjau terhadap brief.
2. Menghasilkan diagram use case/alur, wireframe halaman, dan rancangan model data awal.
3. Menetapkan rencana implementasi yang memetakan Next.js/TypeScript/Tailwind ke Supabase dan Vercel tanpa membangun aplikasi pada Sprint 2.
4. Menyelesaikan paket dokumen perencanaan Sprint 2 sebelum 6 November 2026 menurut baseline usulan.
5. Sebelum implementasi, memperoleh keputusan tim atas kebutuhan admin, model transaksi, status produk, serta definisi metrik laporan.

Kriteria review: setiap fitur lingkup memiliki aktor, alur utama, data yang dipakai, dan kriteria penerimaan; setiap tabel/entitas data mempunyai tujuan dan relasi yang dijelaskan; asumsi dan pertanyaan terbuka memiliki PIC.

## Ruang lingkup

**Termasuk:** katalog publik; detail produk; pencatatan pesanan/transaksi sederhana; autentikasi dan dashboard admin; CRUD/nonaktif produk; riwayat transaksi; rekap dan statistik per periode; rancangan UI/data; rencana test, deployment, dan dokumentasi.

**Tidak termasuk:** pembayaran online otomatis, GPS kurir, marketplace/kurir pihak ketiga, akuntansi lengkap, penggajian, aplikasi native, serta sinkronisasi eksternal yang tidak disebut brief.

## Deliverable dan jadwal baseline

| Pekan | Tanggal asumsi | Deliverable utama | PIC koordinasi |
|---|---|---|---|
| 1 | 19–23 Okt 2026 | Charter, stakeholder, WBS, backlog, pertanyaan terbuka, estimasi FP | Nayla |
| 2 | 26–30 Okt 2026 | Validasi kebutuhan, spesifikasi, use case dan alur, wireframe/model data draft | Niluh dan Zahra |
| 3 | 2–6 Nov 2026 | Review desain, rancangan teknis, estimasi dan risiko diperbarui | Faiza dan Nayla |
| 4 | 9–13 Nov 2026 | Presentasi/review, perbaikan dokumen dan baseline akhir | Seluruh tim; Nayla koordinasi |

Tanggal adalah asumsi perencanaan, bukan jadwal resmi mata kuliah.

## Peran dan kewenangan

Nayla mengoordinasikan baseline, rapat, perubahan, risiko, dan review. Niluh memimpin kebutuhan, use case, alur proses, serta telaah katalog/laporan. Zahra memimpin wireframe dan model data bersama Niluh. Faiza memimpin review arsitektur teknis, integrasi, dan test plan. Perubahan scope, biaya, atau jadwal dibahas tim dan dicatat oleh Nayla.

## Asumsi, batasan, dan risiko utama

- Pemilik bersedia mengonfirmasi menu, harga, alur transaksi, dan kebutuhan laporan; waktu wawancara belum terjadwal.
- Aplikasi ditujukan untuk penggunaan web sederhana dengan satu peran admin awal; aturan multi-user harus dikonfirmasi.
- Anggaran kas Sprint 2 diasumsikan Rp0 karena hanya menghasilkan dokumen dan menggunakan alat yang tersedia; ini bukan konfirmasi harga layanan masa depan.
- Ketersediaan tiap anggota diasumsikan 3–4 jam per hari kerja pada pekan kerja; estimasi perlu diturunkan bila jadwal kuliah berbeda.
- Ketidakjelasan kebutuhan dan terlambatnya validasi adalah risiko tinggi; lihat [Risk Register](../sprint-02/RISK_REGISTER.md).

## Persetujuan baseline

Baseline ini dipersiapkan Nayla untuk review tim. Angka dan tanggal yang disebut sebagai asumsi menjadi dasar perencanaan kerja, bukan klaim persetujuan pemilik/dosen. Perubahan dicatat dalam Pull Request dan Sprint Tracker.

Lihat [Tech Stack](../../README.md#tech-stack-rencana) dan [WBS](WORK_BREAKDOWN_STRUCTURE.md).
