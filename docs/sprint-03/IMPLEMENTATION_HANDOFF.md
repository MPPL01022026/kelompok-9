# Serah Terima Implementasi MVP

Status berikut merangkum prototipe dan dokumentasi pada 31 Oktober 2026. Baseline Sprint 3 berlangsung 9-20 November 2026. Perubahan tampilan pada lingkungan kerja lokal harus diperiksa melalui Git sebelum dianggap telah masuk ke cabang bersama.

## Peta alur aplikasi

| Langkah | Halaman | Hasil yang diharapkan |
|---|---|---|
| 1 | Beranda dan katalog (`/`, `/#menu`) | Pelanggan menemukan produk melalui foto, kategori, pencarian, dan kartu menu |
| 2 | Detail produk (`/products/[id]`) | Pelanggan meninjau informasi dan menambahkan produk ke keranjang |
| 3 | Keranjang (`/cart`) | Pelanggan meninjau jumlah, subtotal, dan mengisi nama untuk pengambilan |
| 4 | Tanda terima (`/orders/received/[id]`) | Aplikasi menampilkan ringkasan dan kode pesanan |
| 5 | Login admin (`/admin/login`) | Pengelola terautentikasi masuk ke dashboard |
| 6 | Dashboard admin (`/admin`) | Pengelola memperbarui produk dan memproses antrean pesanan |

## Penyimpanan lokal

- Tanpa kredensial Supabase, katalog dan pesanan menggunakan `app/.local-data/store.json`.
- Berkas data dibuat otomatis dari katalog contoh dan dikecualikan dari Git.
- Atur `LOCAL_ADMIN_EMAIL` dan `LOCAL_ADMIN_PASSWORD` di `app/.env.local` untuk masuk sebagai admin lokal.
- Keranjang disimpan pada browser pelanggan. Pesanan menyimpan nama pemesan, waktu, status, snapshot produk/harga, kuantitas, dan total.
- Mode ini hanya sesuai untuk demonstrasi pada satu komputer. Tidak tersedia sinkronisasi perangkat atau pencadangan cloud.

## Alur pelanggan

1. Pilih produk pada katalog dan tinjau halaman detail.
2. Atur kuantitas pada keranjang, isi nama pemesan, kemudian kirim pesanan.
3. Server mengambil ulang produk aktif dan harga, lalu menghitung total dan menyimpan snapshot item.
4. Pelanggan menunjukkan kode pada tanda terima ketika mengambil pesanan di kedai.

MVP tidak meminta nomor telepon atau alamat dan tidak menangani pembayaran daring maupun pengantaran. Gambar produk saat ini merupakan ilustrasi.

## Operasi admin

- Mode lokal memakai akun yang disetel melalui environment.
- Admin dapat menambah dan mengubah informasi produk, mengubah ketersediaan, serta menandai pesanan menunggu sebagai selesai atau dibatalkan.
- Waktu transaksi ditampilkan dalam zona Asia/Jakarta.
- Jangan mengisi data usaha atau transaksi pelanggan sungguhan untuk screenshot dokumentasi.

## Integrasi Supabase

1. Siapkan project development dan credential lokal.
2. Tinjau `app/supabase/IMPORT_TO_SUPABASE.sql` sebelum menjalankan migrasi.
3. Terapkan migrasi, konfigurasi Supabase Auth, lalu daftarkan akun admin yang disetujui pada `public.admin_users`.
4. Uji RLS serta fungsi `place_order` dan `set_order_status` menggunakan produk dan pelanggan uji.
5. Tinjau perlindungan spam dan retensi nama pemesan sebelum membuka pemesanan kepada publik.

Migrasi belum diterapkan pada project Supabase. Keputusan produk, harga, aturan pemesanan, dan retensi data menunggu validasi yang tercatat dalam [Open Questions](../OPEN_QUESTIONS.md).

## Screenshot dan wireframe

Screenshot aplikasi mencakup semua rute MVP, state keranjang kosong dan berisi, antrean admin, serta viewport katalog ponsel. Wireframe grayscale memiliki sumber SVG dan pratinjau PNG untuk tujuh layar utama. Daftar lengkap tersedia pada [laporan Sprint 3](LAPORAN_PELAKSANAAN_SPRINT_3.md).

## Pemeriksaan dan penerimaan

Peninjauan visual dilakukan pada 31 Oktober 2026. Pemeriksaan lint, TypeScript, build, end-to-end, migrasi hosted, uji perangkat, dan penerimaan stakeholder tidak dijalankan sebagai bagian dari pembaruan dokumentasi ini. Catat hasil tersebut setelah pemeriksaan yang sesuai dilakukan dan bukti tersedia.
