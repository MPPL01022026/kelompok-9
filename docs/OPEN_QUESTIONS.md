# Pertanyaan Terbuka dan Keputusan Proyek

Daftar ini berisi keputusan yang belum bersumber dari brief. Baseline di bawah dipakai sementara agar desain dapat bergerak; Nayla meminta konfirmasi pihak yang disebutkan dan memperbarui status setelah menerima jawaban.

| ID | Pertanyaan | Asumsi kerja untuk desain | Pihak konfirmasi | Target keputusan | Status |
|---|---|---|---|---|---|
| Q1 | Siapa pemilik dan siapa pengguna sehari-hari? | Pemilik mengelola katalog/laporan; satu admin operasional menginput transaksi. | Pemilik UMKM | 27 Okt 2026 | Asumsi, menunggu validasi |
| Q2 | Apa produk dan harga final? | Empat contoh menu dari brief dipakai sebagai data contoh; bukan harga final. | Pemilik UMKM | 27 Okt 2026 | Asumsi, menunggu validasi |
| Q3 | Pesanan dibuat pelanggan atau dicatat admin? | Sprint 2 merancang pencatatan oleh admin; katalog publik hanya menampilkan produk. | Pemilik dan dosen | 27 Okt 2026 | Asumsi kerja |
| Q4 | Field transaksi apa yang diperlukan? | Waktu, item, kuantitas, harga snapshot, total, catatan, status; nama/telepon pelanggan opsional setelah persetujuan. | Pemilik, Niluh, Faiza | 30 Okt 2026 | Asumsi kerja |
| Q5 | Bagaimana laporan menghitung omzet? | Omzet = jumlah harga item × kuantitas pada transaksi berstatus selesai; periode memakai tanggal transaksi lokal. | Pemilik dan dosen | 30 Okt 2026 | Usulan rumus |
| Q6 | Produk dihapus atau dinonaktifkan? | Gunakan status aktif/nonaktif agar detail transaksi lama tetap tersimpan. | Pemilik dan tim | 30 Okt 2026 | Usulan keputusan |
| Q7 | Siapa boleh memakai dashboard? | Satu/lebih akun admin undangan; pendaftaran publik admin ditutup. | Pemilik dan Faiza | 30 Okt 2026 | Usulan keamanan |
| Q8 | Stack Next.js, TypeScript, Tailwind, Supabase, Vercel disetujui? | Gunakan stack tersebut untuk rencana; implementasi menunggu review tim/dosen. | Tim dan dosen | 5 Nov 2026 | Rencana, belum persetujuan final |
| Q9 | Boleh menyimpan foto/nama pelanggan atau pemilik? | Tidak menyimpan data pribadi/foto tanpa izin eksplisit; gunakan catatan anonim. | Pemilik dan tim | Sebelum bukti diunggah | Aturan konservatif berlaku |
| Q10 | Apa tenggat dan format dosen? | Gunakan baseline proyek 19 Okt–4 Des 2026 untuk latihan; tenggat resmi harus menggantikan baseline. | Dosen pengampu | 26 Okt 2026 | Asumsi kalender |
| Q11 | Apakah Function Point 74 sesuai metode kelas? | Tampilkan hitung brief dan tandai ΣFi=25 untuk klarifikasi; jangan jadikan ukuran final. | Dosen dan tim | 30 Okt 2026 | Menunggu review metode |
| Q12 | Apa identitas akademik Zahra untuk laporan? | Gunakan nama depan dan akun `zahraanissa377-wq` dalam dokumen Git sampai nama/NIM dikonfirmasi. | Zahra dan Nayla | Sebelum laporan akhir | Data belum tersedia |

## Aturan perubahan

Jawaban yang diterima dicatat sebagai keputusan dengan tanggal dan sumber pada PR yang memperbarui dokumen terkait. Jika target keputusan lewat, Nayla memilih apakah asumsi dipakai sementara atau fitur terkait ditunda; keputusan dan dampak jadwal ditulis di Sprint Tracker.
