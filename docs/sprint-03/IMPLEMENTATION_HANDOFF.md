# Sprint 3 — Implementation Handoff

Dokumen ini menerjemahkan baseline proyek menjadi urutan implementasi lanjutan. Bootstrap Next.js, katalog/detail awal, sign-in admin dan skema Supabase telah dibuat; operasi CRUD produk dan transaksi masih menunggu desain serta keputusan yang diperlukan. Dokumen ini bukan pengganti requirement, wireframe, model data, atau persetujuan stakeholder.

## Peta backlog ke area implementasi

| Cerita | Area aplikasi | Ketergantungan |
|---|---|---|
| PB-01, PB-02 | Katalog publik dan detail produk | Data/field produk, status aktif, wireframe, aturan harga dan deskripsi |
| PB-03 | Autentikasi dan route admin | Penyedia auth yang disetujui, proses provisioning admin, aturan proteksi route |
| PB-04, PB-05 | Form dan daftar produk admin | Skema produk, validasi nama/harga, aturan arsip/nonaktif dan gambar |
| PB-06 | Form transaksi dan penyimpanan item | Cara pesanan masuk, status/metode, timezone, snapshot harga, aturan total |

## Urutan implementasi yang disarankan

1. Bootstrap aplikasi dan dokumentasikan versi runtime, perintah setup, dan konfigurasi environment.
2. Buat skema/migrasi berdasarkan model data Sprint 2; review constraint dan foreign key sebelum menghubungkan UI.
3. Sambungkan data produk ke katalog publik, detail, empty state, dan status nonaktif.
4. Lindungi area admin dengan autentikasi; pastikan tidak ada pendaftaran publik jika keputusan akses tetap memakai undangan admin.
5. Implementasikan operasi tambah/ubah/nonaktif dengan validasi server dan pesan kesalahan yang jelas.
6. Implementasikan transaksi dengan snapshot harga per item agar perubahan harga menu tidak mengubah penjualan terdahulu.
7. Lakukan pemeriksaan alur dasar, integrasi, akses, dan data; catat bukti, isu, serta pekerjaan yang dibawa ke Sprint 4.

## Data minimum untuk ditinjau terhadap model Sprint 2

Nama kolom berikut adalah checklist konsep, bukan skema final. Gunakan nama, tipe, constraint, dan aturan aktual dari model yang disetujui.

| Entitas | Informasi yang perlu dipetakan |
|---|---|
| Product | ID, nama, deskripsi, harga, status aktif, waktu dibuat/diubah; foto hanya bila disetujui dan ada kebutuhan |
| Transaction | ID, waktu transaksi, total, status, metode jika dikonfirmasi, catatan minimum yang disetujui |
| TransactionItem | ID, transaksi, produk, kuantitas, harga satuan saat transaksi, subtotal |
| Admin/User | ID identitas auth dan relasi/peran hanya sesuai rancangan akses |

Pastikan penghapusan/nonaktif produk mempertahankan referensi transaksi lama. Hitung total pada sisi tepercaya dari item dan snapshot harga; validasi kuantitas positif serta konsistensi transaksi sesuai aturan bisnis.

## Environment dan keamanan

- Sediakan `.env.example` hanya dengan nama variabel dan nilai dummy, tanpa kunci nyata.
- Simpan nilai rahasia di environment lokal/hosting yang sesuai; jangan commit file env berisi secret.
- Hanya variabel publik yang memang aman untuk browser yang boleh diberi prefiks publik framework.
- Akses database harus memakai kebijakan dan otorisasi sesuai desain; jangan mengandalkan penyembunyian tombol sebagai kontrol akses.
- Batasi data transaksi/pelanggan pada informasi yang disetujui dan diperlukan.

## Catatan review Sprint 3

| Cerita | PR/commit | Pemeriksaan dan hasil | Isu / tindak lanjut | PIC | Status |
|---|---|---|---|---|---|
| PB-01/PB-02 | Belum tersedia | Belum dikerjakan | Menunggu Sprint 3 | Niluh | Belum mulai |
| PB-03 | Belum tersedia | Belum dikerjakan | Menunggu keputusan akses dan setup | Faiza | Belum mulai |
| PB-04/PB-05 | Belum tersedia | Belum dikerjakan | Menunggu skema dan aturan produk | Faiza | Belum mulai |
| PB-06 | Belum tersedia | Belum dikerjakan | Menunggu keputusan alur transaksi | Faiza | Belum mulai |

Perbarui tabel setelah implementasi nyata dimulai; jangan mengisi hasil pemeriksaan sebelum dijalankan.
