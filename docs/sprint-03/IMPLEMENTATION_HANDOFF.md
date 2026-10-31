# Serah Terima Implementasi MVP

Dokumen ini merangkum implementasi lokal MVP dan jalur menuju database Supabase. Baseline Sprint 3 dijadwalkan pada 9–20 November 2026. Status berikut merupakan kondisi repository per 31 Oktober 2026, bukan catatan bahwa Sprint 3 telah berlangsung.

## Peta alur dan implementasi

| Cerita | Area aplikasi | Kriteria operasional |
|---|---|---|
| PB-01/PB-02 | Katalog, kategori, pencarian, detail, keranjang | Produk aktif dapat dilihat dan dimasukkan ke keranjang |
| PB-03 | Login/logout dan proteksi admin | Mode lokal memakai kredensial environment; mode hosted memakai Supabase Auth dan `admin_users` |
| PB-04/PB-05 | Form produk dan ketersediaan | Nama, kategori, ikon, dan harga divalidasi; nonaktif mempertahankan snapshot item lama |
| PB-06 | Checkout dan antrean pesanan | Pelanggan mengirim nama, item, dan kuantitas untuk pengambilan di kedai; status awal menunggu |

## Mode lokal

- Tanpa URL dan anon key Supabase, katalog membaca `app/.local-data/store.json`.
- Berkas dibuat otomatis dari katalog contoh dan dikecualikan dari Git.
- `LOCAL_ADMIN_EMAIL` dan `LOCAL_ADMIN_PASSWORD` di `.env.local` mengatur login admin lokal.
- Penggunaan data lokal dibatasi pada satu komputer. Sediakan pencadangan manual dan jangan menjalankan layanan publik dari mode ini.

## Integrasi Supabase

1. Buat project development Supabase dan siapkan credential lokal.
2. Tinjau `app/supabase/IMPORT_TO_SUPABASE.sql`, lalu impor melalui SQL Editor. File menggabungkan migrasi `0001_initial_schema.sql` dan `0002_mvp_operations.sql` dalam urutan yang benar.
3. Buat akun admin melalui Supabase Auth dan masukkan UUID-nya ke `public.admin_users`.
4. Uji kebijakan RLS, fungsi `place_order`, dan `set_order_status` pada project pengembangan menggunakan produk data uji.
5. Terapkan rate limit atau CAPTCHA dan tinjau kebijakan retensi sebelum endpoint pesanan dibuka untuk umum.

## Data MVP

| Entitas | Field yang disimpan |
|---|---|
| Produk | ID, nama, deskripsi, kategori, harga, ikon, status aktif |
| Pesanan | ID, nama pemesan, waktu UTC, status, total |
| Item pesanan | ID produk bila masih tersedia, snapshot nama produk, kuantitas, snapshot harga satuan, subtotal |
| Admin | ID pengguna Auth dan waktu pendaftaran pada daftar admin |

Waktu ditampilkan dalam zona Asia/Jakarta. MVP tidak mengumpulkan telepon/alamat dan tidak menangani pembayaran daring maupun pengantaran. Validasi harga produk, cara pengambilan, dan retensi nama pemesan masih perlu dicatat setelah pemilik usaha meninjau.

## Pencatatan verifikasi

| Pemeriksaan | Kondisi pada tanggal laporan | Tindak lanjut |
|---|---|---|
| ESLint dan TypeScript | Executable langsung tersedia; pemeriksaan terakhir perlu diulang setelah perubahan lokal final | Jalankan dari folder `app/` dan catat hasil |
| Production build dan route smoke | Perlu dijalankan ulang pada versi mode JSON | Catat tanggal, browser, rute, dan hasil |
| Local order end-to-end | Belum dicatat pada saat berkas ini dibuat | Buat pesanan uji, cocokkan receipt dan antrean admin, lalu ubah status |
| Supabase migration/RLS | Belum diterapkan | Review pada project development dan catat temuan |
| UAT/persetujuan pemilik | Belum dicatat | Jadwalkan review dan rekam keputusan yang sebenarnya |

Tautan kontribusi MVP ditambahkan setelah setiap perubahan dikirim melalui PR dan riwayat GitHub tersedia.
