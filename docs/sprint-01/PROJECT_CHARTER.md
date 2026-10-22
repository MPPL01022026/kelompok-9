# Project Charter

## Informasi umum

| Elemen | Baseline proyek |
|---|---|
| Nama | Sistem Informasi Penjualan dan Manajemen Produk UMKM Ayam Gunting Malaysia |
| Sponsor/pemilik | Pemilik UMKM Ayam Gunting Malaysia; nama tidak tercantum dalam brief |
| Project Manager | Nayla Salsabila Awika (230504093) |
| Tim inti | Niluh Naswa Salfa Adlian Lubis (230504092), Faiza Rahmatika (230504050), Zahra (`zahraanissa377-wq`) |
| Mata kuliah | Manajemen Proyek Perangkat Lunak (MPPL), tahun akademik 2026/2027 |
| Durasi baseline | 7 pekan kalender; empat sprint, 19 Oktober–4 Desember 2026 |
| Fase saat ini | Inisiasi dan perencanaan; implementasi mengikuti persetujuan kebutuhan dan desain |
| Stack rencana | Next.js App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL/Auth, Vercel |

Dasar proyek adalah `Tugas MPPL 1.docx`; detail bisnis yang tidak tercantum tidak dianggap sebagai fakta.

## Latar belakang dan masalah

Brief menggambarkan UMKM makanan ringan/olahan ayam dengan menu ayam gunting, kentang goreng, chicken ball, dan fire chicken wings. Katalog, pengelolaan produk, pencatatan penjualan, dan ringkasan periode adalah kebutuhan yang dituju. Proses manual yang sekarang dipakai, harga, volume transaksi, serta kendala spesifik belum terukur; Sprint 2 memvalidasi dan merancangnya.

## Tujuan dan hasil yang diukur

1. Menghasilkan spesifikasi katalog, pengelolaan produk, transaksi, dan laporan yang dapat ditinjau terhadap brief.
2. Menghasilkan diagram use case/alur, wireframe halaman, dan rancangan model data awal.
3. Menetapkan rancangan implementasi yang memetakan Next.js/TypeScript/Tailwind ke Supabase dan Vercel sebagai dasar pekerjaan pengembangan Sprint 3.
4. Menyelesaikan paket dokumen perencanaan Sprint 2 sebelum 6 November 2026 menurut baseline usulan.
5. Sebelum implementasi, memperoleh keputusan tim atas kebutuhan admin, model transaksi, status produk, serta definisi metrik laporan.

Kriteria review: setiap fitur lingkup memiliki aktor, alur utama, data yang dipakai, dan kriteria penerimaan; setiap tabel/entitas data mempunyai tujuan dan relasi yang dijelaskan; asumsi dan pertanyaan terbuka memiliki PIC.

## Ruang lingkup

**Termasuk:** katalog publik; detail produk; pencatatan pesanan/transaksi sederhana; autentikasi dan dashboard admin; CRUD/nonaktif produk; riwayat transaksi; rekap dan statistik per periode; rancangan UI/data; rencana test, deployment, dan dokumentasi.

**Tidak termasuk:** pembayaran online otomatis, GPS kurir, marketplace/kurir pihak ketiga, akuntansi lengkap, penggajian, aplikasi native, serta sinkronisasi eksternal yang tidak disebut brief.

## Deliverable dan jadwal baseline

| Sprint | Periode baseline | Deliverable utama | PIC koordinasi |
|---|---|---|---|
| 1 | 19–23 Okt 2026 | Charter, stakeholder, WBS, backlog, pertanyaan terbuka, estimasi FP | Nayla |
| 2 | 26 Okt–6 Nov 2026 | Validasi kebutuhan, spesifikasi, use case/alur, wireframe, model data, arsitektur | Niluh, Zahra, Faiza |
| 3 | 9–20 Nov 2026 | Setup dan implementasi katalog, admin, produk, transaksi | Faiza, Niluh |
| 4 | 23 Nov–4 Des 2026 | Laporan, pengujian, deployment, dokumentasi, demo dan evaluasi | Seluruh tim; Nayla koordinasi |

Periode di atas adalah baseline kerja tim. Nayla memasukkannya ke pemantauan proyek dan mengajukan perubahan bila kalender kuliah atau keputusan stakeholder memerlukan penyesuaian.

## Peran dan kewenangan

Nayla mengoordinasikan baseline, rapat, perubahan, risiko, dan review. Niluh memimpin kebutuhan, use case, alur proses, serta telaah katalog/laporan. Zahra memimpin wireframe dan model data bersama Niluh. Faiza memimpin review arsitektur teknis, integrasi, dan test plan. Perubahan scope, biaya, atau jadwal dibahas tim dan dicatat oleh Nayla.

## Asumsi, batasan, dan risiko utama

- Pemilik diminta mengonfirmasi menu, harga, alur transaksi, dan kebutuhan laporan pada Sprint 2; Nayla mengoordinasikan wawancara.
- Aplikasi ditujukan untuk penggunaan web sederhana dengan satu peran admin awal; aturan multi-user harus dikonfirmasi.
- Baseline biaya kas proyek Rp1.914.000, terpisah dari nilai ekonomi tenaga kerja Rp7.150.000; mencakup dua bulan Supabase Pro dan Vercel Pro untuk penggunaan UMKM.
- Tiap anggota menyediakan hingga 4 jam fokus per hari kerja; baseline effort dan alokasi dijelaskan di Sprint 2 dan disesuaikan saat review kapasitas.
- Ketidakjelasan kebutuhan dan terlambatnya validasi adalah risiko tinggi; lihat [Risk Register](../sprint-02/RISK_REGISTER.md).

## Persetujuan baseline

Nayla mengelola baseline ini bersama tim. Asumsi kerja dipakai untuk penjadwalan sampai pemilik/dosen memberi keputusan; perubahan scope, biaya, atau tanggal dicatat pada Pull Request dan Sprint Tracker.

Lihat [Tech Stack](../../README.md#tech-stack-rencana) dan [WBS](WORK_BREAKDOWN_STRUCTURE.md).
