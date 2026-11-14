# Asumsi dan Keputusan Proyek

Keputusan berikut menjadi asumsi kerja untuk MVP, monitoring Sprint 3, dan perencanaan Sprint 4.

| ID | Area | Asumsi/keputusan kerja | Pemilik | Status |
|---|---|---|---|---|
| Q1 | Pengguna dan proses | Pemilik UMKM meninjau rekap penjualan; admin toko mencatat transaksi dan memproses antrean pesanan. | Nayla | Ditetapkan |
| Q2 | Produk, harga, ketersediaan | Katalog demo memakai nilai pada data contoh: Ayam Gunting Rp15.000, Kentang Goreng Rp10.000, Chicken Ball Rp12.000, dan Fire Chicken Wings Rp18.000. Semua produk contoh aktif. | Niluh | Ditetapkan untuk demo |
| Q3 | Pemenuhan pesanan | Pelanggan memesan dari katalog dan mengambil pesanan di kedai. Pembayaran dilakukan langsung saat pengambilan, di luar aplikasi. | Niluh | Ditetapkan |
| Q4 | Data pesanan | Aplikasi menyimpan nama pemesan, waktu, item, kuantitas, snapshot harga, total, dan status. Nomor telepon, alamat, dan data pembayaran tidak dikumpulkan. Data pesanan operasional disimpan 30 hari setelah selesai atau dibatalkan. | Faiza | Ditetapkan |
| Q5 | Definisi omzet dan periode | Omzet menjumlahkan item pada pesanan selesai; periode memakai tanggal Asia/Jakarta. Produk terlaris diurutkan berdasarkan kuantitas item terjual. | Niluh, Faiza | Ditetapkan untuk Sprint 4 |
| Q6 | Produk tidak dijual | Produk nonaktif disembunyikan dari katalog; snapshot transaksi lama tetap tersimpan. | Faiza | Ditetapkan |
| Q7 | Akses admin | Admin dibuat atau diundang oleh pemilik. Pendaftaran admin publik ditutup. Mode lokal memakai kredensial environment. | Faiza | Ditetapkan |
| Q8 | Arsitektur | Next.js, TypeScript, Tailwind, Supabase PostgreSQL/Auth, dan Vercel menjadi target hosted. Sprint 3 memakai JSON lokal untuk demo; migrasi hosted masuk Sprint 4. | Faiza | Ditetapkan |
| Q9 | Privasi dan foto | Demo memakai nama pelanggan fiktif dan foto ilustratif dari sumber yang dicatat di repository. Aturan retensi pesanan mengikuti Q4. | Nayla | Ditetapkan |
| Q10 | Kalender dan tenggat | Baseline proyek 19 Oktober–4 Desember 2026. Sprint 3 ditutup 14 November; Sprint 4 berjalan 23 November–4 Desember. | Nayla | Ditetapkan |
| Q11 | Function Point | Baseline fungsi adalah 82 UFP. Saya memakai ΣFi = 25, VAF = 0,90, dan hasil 73,8 yang dibulatkan menjadi 74 FP. | Niluh | Ditetapkan sebagai estimasi |
| Q12 | Nama anggota | Dokumen menggunakan nama Zahra dan NIM 230504047. | Nayla | Ditetapkan |

Asumsi ini menjadi dasar katalog demo, acceptance criteria Sprint 4, estimasi, dan laporan monitoring. Nayla mencatat dampak perubahan pada tracker jika tim mengubah asumsi setelah implementasi Sprint 4.

