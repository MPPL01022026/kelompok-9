# Work Breakdown Structure (WBS)

WBS ini membagi proyek menjadi deliverable yang dapat diperiksa. Tanggal adalah baseline tim: Sprint 1 (19–23 Okt), Sprint 2 (26 Okt–6 Nov), Sprint 3 (9–20 Nov), Sprint 4 (23 Nov–4 Des 2026). Pemilik paket kerja memperbarui status setelah hasil nyata tersedia.

| ID | Sprint | Paket kerja / aktivitas | Deliverable dan kriteria selesai | PIC utama | Dependensi |
|---|---|---|---|---|---|
| 1.1 | 1 | Analisis brief dan batas proyek | Ringkasan masalah, tujuan, in/out scope; setiap fitur ditautkan ke brief | Nayla | Tugas MPPL 1 |
| 1.2 | 1 | Project Charter | Sasaran, deliverable, asumsi, jadwal awal dan kriteria hasil tercatat | Nayla | 1.1 |
| 1.3 | 1 | Stakeholder Register | Pemilik, tim, pelanggan, evaluator; kebutuhan komunikasi tercatat | Nayla | 1.1 |
| 1.4 | 1 | WBS, backlog, dan pertanyaan terbuka | ID pekerjaan, PIC, dependensi, prioritas, kriteria dan pertanyaan tersusun | Nayla; tim review | 1.1 |
| 1.5 | 1 | Function Point awal | Angka brief ditranskripsikan, hitungan subtotal dan ketidaksesuaian ditandai | Niluh; tim review | 1.1 |
| 1.6 | 1 | Repository dan proses kontribusi | Branch kerja, commit autentik per anggota, PR dan tracker digunakan | Nayla; seluruh tim | Repository dibuat |
| 2.1 | 2 | Kickoff dan konfirmasi kebutuhan | Catatan keputusan untuk pengguna, produk, pesanan, stok, admin, dan laporan | Nayla (fasilitasi), Niluh (catat) | 1.2–1.4 |
| 2.2 | 2 | Spesifikasi fungsional/nonfungsional | Setiap kebutuhan punya ID, aktor, prioritas, dan kriteria penerimaan | Niluh | 2.1 |
| 2.3 | 2 | Use case dan alur proses | Alur katalog, kelola produk, catat transaksi, dan lihat laporan ditinjau | Niluh; Zahra review | 2.2 |
| 2.4 | 2 | Wireframe halaman | Wireframe beranda/katalog, detail, admin, produk, transaksi, dan laporan yang ditinjau | Zahra; Niluh review | 2.2–2.3 |
| 2.5 | 2 | Model data konseptual | Entitas Product, Transaction, TransactionItem, Admin/User beserta relasi dan aturan integritas | Zahra; Faiza review | 2.2–2.3 |
| 2.6 | 2 | Rencana arsitektur dan deployment | Peta Next.js/TypeScript/Tailwind, Supabase PostgreSQL/Auth, Vercel, env dan batas keamanan | Faiza; Nayla koordinasi | 2.2, 2.5 |
| 2.7 | 2 | Baseline jadwal, effort, cost, risiko | Lima dokumen Sprint 2 direview dan keputusan dicatat | Nayla; semua PIC | 2.1–2.6 |
| 3.1 | 3 | Setup aplikasi dan konfigurasi lingkungan | Aplikasi dapat dijalankan lokal; konfigurasi rahasia di env lokal | Faiza | 2.6 disetujui |
| 3.2 | 3 | Skema data dan autentikasi | Skema awal dan akses admin diuji di lingkungan development | Faiza | 2.5, 3.1 |
| 3.3 | 3 | Katalog dan detail produk | Produk aktif terlihat; harga dan status mengikuti data | Niluh | 2.4, 3.2 |
| 3.4 | 3 | Dashboard dan manajemen produk | Admin dapat mengelola produk sesuai aturan yang disetujui | Faiza | 3.2 |
| 3.5 | 3 | Pencatatan transaksi dan riwayat | Transaksi serta item tersimpan dan dapat ditinjau | Faiza | 3.2, 3.4 |
| 4.1 | 4 | Rekap dan statistik | Filter periode dan definisi metrik sesuai keputusan pemilik | Niluh, Faiza | 3.5 |
| 4.2 | 4 | Pengujian penerimaan dan perbaikan | Skenario katalog, akses, CRUD, transaksi, dan laporan lulus/temuan dicatat | Faiza; tim | 3.3–4.1 |
| 4.3 | 4 | Deployment dan dokumentasi akhir | Aplikasi target Vercel terhubung aman ke Supabase; panduan dan demo siap | Faiza; Nayla koordinasi | 4.2 |
| 4.4 | 4 | Review akhir dan daftar tindak lanjut | Feedback dosen/pemilik serta keputusan perbaikan tercatat dengan PIC | Nayla; tim | 4.3 |

## Baseline sprint

- Sprint 1: 19–23 Oktober 2026 (5 hari kerja), inisiasi dan perencanaan awal.
- Sprint 2: 26 Oktober–6 November 2026 (10 hari kerja), analisis, desain dan baseline rencana.
- Sprint 3: 9–20 November 2026 (10 hari kerja), implementasi awal sesuai desain.
- Sprint 4: 23 November–4 Desember 2026 (10 hari kerja), laporan, pengujian, deployment dan evaluasi.

Nayla memeriksa benturan tanggal dengan kalender kuliah pada kickoff. Bila ada hari nonaktif, milestone digeser dengan menjaga urutan dependensi dan mencatat perubahan pada tracker.
