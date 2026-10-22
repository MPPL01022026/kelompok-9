# Work Breakdown Structure (WBS)

Pembagian PIC di bawah adalah usulan awal berdasarkan fokus anggota di brief. Tim perlu menyepakati PIC dan status sebelum dipakai sebagai komitmen kerja.

| ID | Paket kerja | Deliverable | PIC usulan | Dependensi |
|---|---|---|---|---|
| 1.1 | Observasi dan wawancara pemilik | Catatan kebutuhan yang diizinkan | Nayla (koordinasi), semua anggota | Ketersediaan pemilik |
| 1.2 | Identifikasi masalah dan kebutuhan | Daftar kebutuhan tervalidasi | Niluh (analisis), tim | 1.1 |
| 1.3 | Charter, register, WBS, pembagian tugas | Dokumen perencanaan | Nayla (koordinasi), tim | Brief dan 1.1 |
| 2.1 | Analisis fungsional/nonfungsional | Spesifikasi kebutuhan | Niluh, tim | 1.2 |
| 2.2 | Use case dan alur proses | Diagram/alur sistem | Niluh | 2.1 |
| 2.3 | Wireframe halaman | Mockup katalog, pemesanan, login, dashboard, laporan | Niluh | 2.1 |
| 2.4 | Rancangan basis data | Model data produk, transaksi, detail, admin | Niluh dan Faiza | 2.1 |
| 3.1 | Database dan koneksi aplikasi | Struktur penyimpanan dan koneksi | Faiza (usulan) | 2.4 |
| 3.2 | Beranda dan katalog | Halaman katalog | Niluh (usulan) | 2.3 |
| 3.3 | Detail produk | Informasi harga/ketersediaan | Niluh (usulan) | 3.2 |
| 3.4 | Login/dashboard admin | Area administrasi | Faiza (usulan) | 2.4 |
| 3.5 | Manajemen produk | Tambah, edit, hapus produk | Faiza (usulan) | 3.1, 3.4 |
| 3.6 | Pencatatan transaksi | Input transaksi dan item pesanan | Faiza (usulan) | 3.1, 3.5 |
| 3.7 | Riwayat transaksi | Daftar transaksi | Faiza (usulan) | 3.6 |
| 3.8 | Rekap dan statistik | Rekap, grafik omzet dan jumlah produk | Niluh & Faiza (usulan) | 3.6 |
| 4.1 | Uji login dan hak akses | Hasil pengujian | Faiza (koordinasi) | 3.4 |
| 4.2 | Uji katalog/detail | Hasil pengujian | Faiza | 3.2–3.3 |
| 4.3 | Uji transaksi dan statistik | Hasil pengujian | Faiza, Niluh | 3.6–3.8 |
| 4.4 | Perbaikan bug | Versi perbaikan | Tim | Hasil pengujian |
| 5.1 | Dokumentasi dan laporan akhir | Dokumen akhir | Nayla (koordinasi), tim | Semua paket |
| 5.2 | Presentasi dan demo | Materi presentasi | Tim | Sistem tersedia |
| 5.3 | Evaluasi akhir | Catatan evaluasi | Nayla (koordinasi), tim | Demo |

Status pekerjaan dicatat di [Sprint Tracker](../SPRINT_TRACKER.md) setelah ada bukti nyata.

