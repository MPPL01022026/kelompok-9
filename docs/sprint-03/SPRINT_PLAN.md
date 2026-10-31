# Sprint 3 — Project Execution

**Baseline:** 9–20 November 2026 (10 hari kerja, Senin–Jumat)
**Tujuan sprint:** menghasilkan aplikasi development yang menjalankan alur katalog, akses admin, pengelolaan produk, dan pencatatan transaksi sesuai desain Sprint 2 yang disetujui.

## Kondisi awal

Sprint 3 dimulai dengan inisialisasi aplikasi Next.js, TypeScript, Tailwind CSS, Supabase client, katalog publik, detail produk, admin sign-in, serta skema awal PostgreSQL/RLS. Pengembangan berikutnya melanjutkan kerangka tersebut. Dokumen requirement, wireframe, model data, arsitektur, serta keputusan bisnis Sprint 2 tetap menjadi rujukan dan prasyarat untuk mengunci perilaku bisnis.

Keputusan produk/harga, alur pesanan, aturan transaksi, akses admin, skema data, dan stack masih dicatat sebagai perlu validasi pada [Open Questions](../OPEN_QUESTIONS.md). Gunakan asumsi kerja yang sudah tertulis sampai keputusan pemilik, tim, dan dosen dicatat; jangan menganggap asumsi sebagai persetujuan.

## Sasaran dan batas sprint

| ID backlog/WBS | Hasil Sprint 3 | Kriteria selesai |
|---|---|---|
| 3.1 | Setup aplikasi Next.js/TypeScript/Tailwind dan konfigurasi lokal | Anggota dapat menjalankan aplikasi lokal dari petunjuk setup; konfigurasi sensitif memakai environment variable |
| 3.2 | Skema awal PostgreSQL dan autentikasi admin | Skema sesuai model data yang direview; akses admin tidak terbuka untuk pengguna anonim |
| PB-01, PB-02 / 3.3 | Katalog dan detail produk | Produk aktif dan informasi yang disetujui tampil dari sumber data aplikasi; produk nonaktif tidak ditawarkan |
| PB-03, PB-04, PB-05 / 3.4 | Login admin dan manajemen produk | Admin dapat masuk/keluar, menambah/mengubah produk, serta mengubah status sesuai aturan yang disetujui |
| PB-06 / 3.5 | Pencatatan transaksi dan item | Transaksi menyimpan waktu, item, kuantitas, harga saat transaksi, total, dan status/metode yang telah disepakati |

Riwayat terfilter, rekap/statistik, pengujian penerimaan penuh, deployment, demo, dan dokumentasi akhir tetap pada Sprint 4 sesuai backlog/WBS. Implementasi Sprint 3 tetap menyertakan pemeriksaan fungsional dasar dan catatan isu untuk memungkinkan review.

## Urutan kerja dan kendali

| Periode | Aktivitas | PIC usulan | Bukti kerja |
|---|---|---|---|
| 9 Nov | Kickoff, cek persetujuan desain, kapasitas, akses repo dan lingkungan | Nayla; seluruh tim | Catatan kickoff, keputusan, dan blocker |
| 9–10 Nov | Bootstrap proyek, dependency, struktur awal, env example dan petunjuk lokal | Faiza | Aplikasi berjalan lokal; konfigurasi contoh tanpa secret |
| 10–12 Nov | Implementasi skema dan integrasi akses admin | Faiza; Zahra review model | Migrasi/skema dan catatan akses development |
| 11–13 Nov | Katalog dan detail berdasarkan requirement; penyempurnaan UI responsif dan aksesibel | Niluh; Zahra | Halaman katalog/detail terhubung ke data; UI ditinjau terhadap wireframe yang disepakati |
| 13–17 Nov | Dashboard dan operasi tambah/ubah/nonaktif produk | Faiza; Niluh review | Alur manajemen produk berfungsi untuk admin |
| 17–19 Nov | Pencatatan transaksi dan item dengan snapshot harga | Faiza; Niluh review alur | Transaksi tersimpan mengikuti aturan yang disepakati |
| 20 Nov | Integrasi, review kriteria, demo internal dan rencana Sprint 4 | Nayla; seluruh tim | Review tracker, daftar isu, backlog Sprint 4 |

Tanggal dan pembagian kerja adalah rencana awal, bukan catatan pekerjaan yang telah terjadi. Nayla memperbarui tracker hanya berdasarkan bukti aktual. Jika Sprint 2 belum menghasilkan persetujuan desain, tandai dependensi sebagai blocker dan catat siapa serta kapan keputusan diperlukan.

## Tanggung jawab

| Anggota | Fokus Sprint 3 |
|---|---|
| Nayla Salsabila Awika | Koordinasi, kapasitas, risiko, status, keputusan, review dan tindak lanjut |
| Niluh Naswa Salfa Adlian Lubis | Requirement-to-UI, katalog/detail, review alur produk/transaksi |
| Faiza Rahmatika | Setup teknis, integrasi database/auth, produk admin, transaksi dan catatan isu |
| Zahra (NIM 230504047) | Wireframe/model data, penyempurnaan UI responsif dan aksesibel, serta review kesesuaian |

PIC dapat disesuaikan pada kickoff berdasarkan persetujuan anggota dan kapasitas aktual.

## Definition of Ready

- Requirement/use case dan wireframe untuk halaman yang dikerjakan tersedia dan direview.
- Model produk, transaksi, item transaksi, aturan status, serta akses admin telah diputuskan atau asumsi eksplisit disetujui untuk prototipe.
- Stack dan pemilik environment development disepakati.
- Cerita memiliki acceptance criteria, dependensi, PIC, dan estimasi yang diterima.

## Definition of Done

- Perubahan berada di branch kerja dan dapat ditinjau melalui PR.
- Acceptance criteria cerita diperiksa dan bukti/catatan hasil ditautkan.
- Perubahan skema terdokumentasi dan data lama tidak rusak oleh perubahan status produk.
- Tidak ada secret di repository; panduan lokal dan tracker diperbarui.
- Isu yang belum selesai memiliki pemilik serta tindak lanjut Sprint 4.

## Risiko dan respons

| Risiko | Respons sprint |
|---|---|
| Persetujuan kebutuhan/desain Sprint 2 belum tersedia | Tahan implementasi yang bergantung pada keputusan; Nayla meminta keputusan dan mencatat dampak tanggal/scope |
| Lingkungan Supabase/Vercel memerlukan biaya atau akses tambahan | Ikuti baseline biaya; jangan mengaktifkan layanan berbayar tanpa persetujuan anggaran yang berlaku; gunakan lingkungan lokal/dev yang disetujui |
| Perubahan menu/harga atau alur pesanan | Simpan data yang dapat dikonfigurasi; catat dampak pada data/model dan backlog sebelum perubahan |
| Kapasitas kuliah lebih kecil dari rencana | Fokuskan setup, katalog, admin dan penyimpanan transaksi inti; geser pekerjaan dengan keputusan Nayla |
| Secret atau bukti pribadi masuk repository | Hentikan publikasi, keluarkan dari perubahan, dan ikuti panduan privasi evidence serta praktik secret proyek |

Lihat [Sprint Tracker](../SPRINT_TRACKER.md), [Backlog](../PROJECT_BACKLOG.md), [Open Questions](../OPEN_QUESTIONS.md), [WBS](../sprint-01/WORK_BREAKDOWN_STRUCTURE.md), dan [Risk Register](../sprint-02/RISK_REGISTER.md).
