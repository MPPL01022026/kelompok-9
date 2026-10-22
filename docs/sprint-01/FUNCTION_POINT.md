# Function Point — estimasi awal

Bagian ini memisahkan hasil hitung dari rincian yang tersedia di `Tugas MPPL 1.docx` dan hitung ulang dengan bobot kompleksitas standar IFPUG. Estimasi tetap provisional karena batas sistem dan transaksi belum dikonfirmasi.

## Data fungsi menurut brief

| Jenis fungsi | Low count × bobot | Average count × bobot | High count × bobot | UFP hitung dari rincian |
|---|---:|---:|---:|---:|
| External Input (EI) | 4 × 3 = 12 | 2 × 4 = 8 | 0 × 6 = 0 | 20 |
| External Output (EO) | 0 × 4 = 0 | 3 × 5 = 15 | 0 × 7 = 0 | 15 |
| External Inquiry (EQ) | 3 × 3 = 9 | 1 × 4 = 4 | 0 × 6 = 0 | 13 |
| Internal Logical File (ILF) | 2 × 7 = 14 | 2 × 10 = 20 | 0 × 15 = 0 | 34 |
| External Interface File (EIF) | 0 × 5 = 0 | 0 × 7 = 0 | 0 × 10 = 0 | 0 |
| **Unadjusted FP (UFP)** |  |  |  | **82** |

## Perhitungan penyesuaian yang tercantum di brief

Brief memberi `ΣFi = 25`. Dengan rumus `VAF = 0,65 + 0,01 × ΣFi`, diperoleh `VAF = 0,90`; `Adjusted FP = UFP × VAF = 82 × 0,90 = 73,8`, atau sekitar **74 FP**.

## Pemeriksaan konsistensi

Perkalian rincian di atas memang menghasilkan 82 UFP. Dalam standar yang umum, total 14 karakteristik sistem pada skala 0–5 menghasilkan jumlah maksimum 70; karena itu ΣFi = 25 perlu diperiksa: bisa jadi nilai pada brief memakai skala berbeda atau transkripsi/rumus perlu klarifikasi. Untuk baseline proyek, angka sumber 74 FP dipertahankan sebagai angka brief, sementara estimasi yang dapat dipertanggungjawabkan ditandai **menunggu validasi metode dosen**.

## Asumsi dan penggunaan

- EI diasumsikan mencakup login, pengelolaan produk, dan input transaksi.
- EO diasumsikan mencakup ringkasan/grafik dan keluaran laporan.
- EQ diasumsikan mencakup pencarian/katalog dan penelusuran riwayat.
- ILF diasumsikan mencakup produk dan transaksi/item transaksi; hitungan persis bergantung batas dan struktur data.
- EIF bernilai nol karena belum ada integrasi data eksternal pada scope awal.

Angka ini hanya estimasi akademik dari brief, bukan ukuran hasil implementasi. Revisi hitungan dicatat setelah klasifikasi fungsi dan metode disepakati.
