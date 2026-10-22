# Estimasi Function Point

Estimasi ini menghitung fungsi sistem katalog, pengelolaan produk, transaksi, dan laporan. Klasifikasi transaksi dan kompleksitas ditetapkan dari kebutuhan proyek yang tersedia dan perlu diselaraskan dengan keputusan pemilik serta metode penilaian mata kuliah.

| Jenis fungsi | Low (jumlah × bobot) | Average (jumlah × bobot) | High (jumlah × bobot) | UFP |
|---|---:|---:|---:|---:|
| External Input (EI) | 4 × 3 = 12 | 2 × 4 = 8 | 0 × 6 = 0 | 20 |
| External Output (EO) | 0 × 4 = 0 | 3 × 5 = 15 | 0 × 7 = 0 | 15 |
| External Inquiry (EQ) | 3 × 3 = 9 | 1 × 4 = 4 | 0 × 6 = 0 | 13 |
| Internal Logical File (ILF) | 2 × 7 = 14 | 2 × 10 = 20 | 0 × 15 = 0 | 34 |
| External Interface File (EIF) | 0 × 5 = 0 | 0 × 7 = 0 | 0 × 10 = 0 | 0 |
| **Unadjusted Function Points** |  |  |  | **82** |

## Perhitungan nilai disesuaikan

Perhitungan awal menggunakan `ΣFi = 25`. Dengan rumus `VAF = 0,65 + (0,01 × ΣFi)`, diperoleh `VAF = 0,90`. Maka `Adjusted FP = 82 × 0,90 = 73,8`, dibulatkan menjadi **74 FP**.

## Pemeriksaan dan asumsi klasifikasi

- EI mencakup login, pengelolaan produk, dan input transaksi.
- EO mencakup ringkasan penjualan dan keluaran laporan.
- EQ mencakup pencarian katalog dan penelusuran riwayat.
- ILF mencakup data produk serta transaksi/item transaksi.
- EIF bernilai nol karena rancangan saat ini tidak memerlukan berkas dari sistem eksternal.
- Hasil aritmetika tabel adalah 82 UFP. `ΣFi = 25` perlu ditinjau dengan dosen karena metode yang memakai 14 karakteristik umum berskala 0–5 memiliki rentang maksimum 70.

Nilai 74 FP dipakai sebagai estimasi awal proyek. Nilai ini akan diperbarui jika pemetaan fungsi atau metode dosen berubah; perubahan dicatat bersama dasar perhitungannya.
