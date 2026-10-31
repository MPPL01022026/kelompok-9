# Pertanyaan Terbuka dan Keputusan Proyek

Daftar berikut mengarahkan validasi bisnis dan keputusan desain. Sementara menunggu jawaban, tim memakai asumsi kerja yang tercatat dan menghindari penguncian desain pada keputusan yang masih terbuka.

| ID | Keputusan yang diperlukan | Asumsi kerja saat ini | Pemilik keputusan | Tenggat | Status |
|---|---|---|---|---|---|
| Q1 | Pengguna harian dan pemilik proses | Pemilik meninjau laporan; admin operasional mencatat transaksi | Pemilik UMKM | 27 Okt 2026 | Menunggu konfirmasi |
| Q2 | Daftar produk, harga, dan ketersediaan | Katalog awal memuat ayam gunting, kentang goreng, chicken ball, dan fire chicken wings; harga dikonfirmasi pemilik | Pemilik UMKM | 27 Okt 2026 | Menunggu konfirmasi harga |
| Q3 | Cara pesanan masuk dan pemenuhan | MVP menerima pesanan pelanggan dari katalog untuk diambil di kedai | Pemilik UMKM | Review operasional | Pilihan MVP ditetapkan tim; konfirmasi pemilik masih diperlukan |
| Q4 | Data yang dicatat pada pesanan | Nama pemesan, waktu, item, kuantitas, snapshot harga, total, dan status; nomor telepon serta metode pembayaran tidak dikumpulkan pada MVP | Pemilik, Niluh, Faiza | Review operasional | Batas data MVP ditetapkan tim; validasi retensi nama masih diperlukan |
| Q5 | Definisi omzet dan periode laporan | Omzet menjumlahkan item pada transaksi selesai; periode memakai tanggal transaksi lokal | Pemilik dan dosen | 30 Okt 2026 | Usulan untuk disetujui |
| Q6 | Penanganan produk yang tidak dijual | Ubah status menjadi nonaktif agar transaksi lama tetap utuh | Pemilik dan tim | 30 Okt 2026 | Usulan untuk disetujui |
| Q7 | Hak akses dashboard | Akun admin dibuat/diundang; pendaftaran admin publik ditutup | Pemilik dan Faiza | 30 Okt 2026 | Usulan keamanan |
| Q8 | Persetujuan arsitektur | Next.js, TypeScript, Tailwind, Supabase PostgreSQL/Auth, dan Vercel menjadi stack target | Tim dan dosen | 5 Nov 2026 | Menunggu persetujuan desain |
| Q9 | Retensi data pemesan dan foto produk | Nama pemesan hanya dipakai untuk mengenali pesanan saat pengambilan; foto produk memerlukan izin | Pemilik dan tim | Sebelum penggunaan operasional | Retensi dan izin perlu dikonfirmasi |
| Q10 | Kalender akademik, format, dan tenggat | Baseline proyek 19 Okt–4 Des 2026; Nayla menyesuaikannya dengan kalender dan arahan dosen | Dosen dan Nayla | 26 Okt 2026 | Konfirmasi jadwal diperlukan |
| Q11 | Metode Function Point | Estimasi 74 FP; klarifikasi diperlukan atas nilai `ΣFi = 25` dan kompleksitas fungsi | Dosen dan Niluh | 30 Okt 2026 | Review metode diperlukan |
| Q12 | Nama resmi Zahra untuk daftar anggota akademik | NIM 230504047 sudah dicatat; gunakan nama lengkap sesuai daftar akademik | Zahra dan Nayla | Sebelum laporan akhir | NIM terverifikasi oleh tim; nama lengkap dicocokkan saat finalisasi |

## Alur penyelesaian keputusan

Nayla mencatat jawaban dan tanggalnya pada review sprint. Niluh memperbarui requirement/use case, Zahra memperbarui wireframe/model data, dan Faiza memperbarui arsitektur atau risiko bila terdampak. Keputusan yang mengubah biaya atau jadwal disetujui tim dan dicatat di Sprint Tracker.
