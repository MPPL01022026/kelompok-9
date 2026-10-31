# Catatan Eksekusi Sprint 3

## Batas pencatatan

Baseline Sprint 3 adalah 9–20 November 2026. Catatan ini diperbarui pada 31 Oktober 2026 dan merangkum prototipe MVP lokal yang dikerjakan sebelum periode tersebut. Isinya tidak menyatakan bahwa kickoff, rapat review, persetujuan stakeholder, atau Sprint 3 telah berlangsung.

## Kontribusi yang sudah digabung ke `main`

| Anggota | Hasil persiapan | Bukti GitHub |
|---|---|---|
| Faiza Rahmatika | Fondasi aplikasi Next.js, konfigurasi, Supabase client, login awal, dan migrasi dasar | [PR #10](https://github.com/MPPL01022026/kelompok-9/pull/10), commit `8e1f53a` |
| Niluh Naswa Salfa Adlian Lubis | Katalog dan halaman detail produk | [PR #11](https://github.com/MPPL01022026/kelompok-9/pull/11), commit `a48933a` |
| Zahra, NIM 230504047 | Navigasi mobile, fokus papan ketik, dan reduced motion | [PR #12](https://github.com/MPPL01022026/kelompok-9/pull/12), commit `f766632` |

## Status prototipe lokal pada 31 Oktober

| Area | Kondisi kode | Pemeriksaan/batas |
|---|---|---|
| PB-01/PB-02 | Katalog, pencarian, kategori, detail, serta keranjang | Menggunakan penyimpanan JSON lokal saat Supabase tidak tersedia |
| PB-03 | Login dan logout admin lokal; mode hosted tetap mendukung Supabase Auth | Kredensial lokal berasal dari environment |
| PB-04/PB-05 | Admin dapat menambah, mengubah, dan mengaktifkan/nonaktifkan produk | Perlu uji manual pada browser setelah setup lokal |
| PB-06 | Pesanan untuk diambil di kedai, snapshot harga/item, tanda terima, dan antrean admin | Tidak meminta nomor telepon, alamat, atau pembayaran daring |
| Migrasi hosted | File impor gabungan dan dua migrasi terpisah | Belum diterapkan ke project Supabase |
| Dokumentasi | Laporan Markdown/PDF dan lima wireframe | Review stakeholder serta keputusan bisnis belum dicatat |

## Bukti dan tindak lanjut

- [Laporan Sprint 3](LAPORAN_PELAKSANAAN_SPRINT_3.md) mencatat ruang lingkup dan batas verifikasi.
- [Impor Supabase](../../app/supabase/IMPORT_TO_SUPABASE.sql) memuat migrasi awal dan MVP dalam satu berkas.
- Data toko dan aturan retensi tetap menunggu validasi pemilik usaha. Lihat [Pertanyaan Terbuka](../OPEN_QUESTIONS.md).
- Sebelum penggunaan hosted, uji alur Supabase, tinjau RLS dan RPC, serta tambahkan mitigasi spam endpoint pemesanan.
- Catat hasil lint, typecheck, build, dan uji lokal setelah perubahan final. Hasil tidak boleh disamakan dengan uji penerimaan stakeholder.
- PR perubahan MVP belum dibuat atau digabung pada tanggal pencatatan ini.
