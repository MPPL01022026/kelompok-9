# Project Backlog — baseline usulan

Prioritas memakai MoSCoW untuk menyepakati urutan, bukan komitmen fitur final. Kriteria adalah kondisi yang dapat diperiksa saat implementasi; data bisnis harus dikonfirmasi dengan pemilik.

| ID | User story | Prioritas | Kriteria penerimaan | PIC usulan | Sprint target |
|---|---|---|---|---|---|
| PB-01 | Sebagai pengunjung, saya ingin melihat produk aktif agar tahu apa yang tersedia. | Must | Katalog menampilkan nama, harga, deskripsi singkat, dan ketersediaan yang dikelola admin. | Niluh | 3 |
| PB-02 | Sebagai pengunjung, saya ingin membuka detail produk agar dapat memutuskan apa yang dipesan. | Should | Detail menampilkan seluruh informasi yang telah disetujui; produk nonaktif tidak dapat dipesan. | Niluh | 3 |
| PB-03 | Sebagai admin, saya ingin login/logout agar fungsi pengelolaan dibatasi. | Must | Admin terautentikasi dapat masuk/keluar; pengunjung anonim tidak dapat membuka rute admin. | Faiza | 3 |
| PB-04 | Sebagai admin, saya ingin menambah dan mengubah produk agar katalog tetap akurat. | Must | Form memvalidasi nama dan harga; perubahan tersimpan dan terlihat di katalog. | Faiza | 3 |
| PB-05 | Sebagai admin, saya ingin menonaktifkan produk yang tidak dijual agar riwayat tidak rusak. | Must | Produk berstatus nonaktif tidak muncul sebagai tersedia; transaksi lama tetap mereferensikan itemnya. | Faiza | 3 |
| PB-06 | Sebagai admin, saya ingin mencatat transaksi dan item agar penjualan tersimpan. | Must | Transaksi memiliki waktu, item, kuantitas, harga saat transaksi, total, dan metode/status yang disetujui. | Faiza | 3 |
| PB-07 | Sebagai admin, saya ingin mencari riwayat transaksi agar dapat meninjau penjualan sebelumnya. | Should | Daftar transaksi dapat difilter rentang tanggal dan menampilkan total/item. | Faiza | 4 |
| PB-08 | Sebagai pemilik, saya ingin melihat rekap periode agar memahami hasil penjualan. | Should | Total omzet dan jumlah transaksi dihitung dari transaksi valid dalam periode pilihan. | Niluh, Faiza | 4 |
| PB-09 | Sebagai pemilik, saya ingin melihat produk terlaris agar mengetahui komposisi penjualan. | Could | Urutan kuantitas per produk konsisten dengan item transaksi pada rentang tanggal terpilih. | Niluh, Faiza | 4 |
| PB-10 | Sebagai tim, kami ingin menguji alur inti agar temuan diketahui sebelum demo. | Must | Skenario login, katalog, CRUD, transaksi, dan laporan memiliki hasil lulus/gagal serta isu tercatat. | Faiza, seluruh tim | 4 |
| PB-11 | Sebagai tim, kami ingin merilis aplikasi pada target hosting agar stakeholder dapat meninjau demo. | Should | Aplikasi dapat dibuka pada URL Vercel dan mengakses Supabase tanpa secret di repository. | Faiza | 4 |

## Definition of Ready

Cerita siap masuk sprint jika aktor dan manfaat jelas, acceptance criteria bisa diuji, data yang dibutuhkan diketahui, dependensi teridentifikasi, dan PIC menerima estimasinya.

## Definition of Done

Cerita selesai bila perubahan di branch, kriteria penerimaan diperiksa, PR direview/merged, tidak ada secret committed, dan dokumentasi/tracker diperbarui. Sprint target adalah rencana awal; Nayla dapat memindahkannya setelah estimasi dan validasi kebutuhan.
