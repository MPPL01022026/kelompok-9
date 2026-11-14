# Project Cost Estimation - baseline proyek

Anggaran mencakup empat sprint dari inisiasi sampai demo akhir (19 Oktober–4 Desember 2026). Perhitungan memisahkan biaya kas dari nilai ekonomi tenaga kerja. Nilai menjadi baseline pengendalian; Nayla membandingkan pengeluaran aktual setiap akhir sprint.

## Rincian baseline biaya

| Komponen | Basis hitung | Nilai baseline | Kategori |
|---|---|---:|---|
| Tenaga kerja tim | 71.5 manday × Rp100.000/manday | Rp7.150.000 | Nilai ekonomi; bukan pembayaran kepada anggota |
| Supabase Pro | US$25/bulan × 2 bulan × Rp16.000/US$ | Rp800.000 | Biaya kas layanan database/auth |
| Vercel Pro | US$20/bulan × 2 bulan × Rp16.000/US$ | Rp640.000 | Biaya kas deployment komersial; satu pemilik akun |
| Kuota internet koordinasi | 4 anggota × Rp25.000/bulan × 2 bulan | Rp200.000 | Biaya kas |
| Cetak laporan dan materi review | 1 paket × Rp100.000 | Rp100.000 | Biaya kas |
| GitHub | Repository kolaborasi yang sudah tersedia | Rp0 | Biaya tambahan |
| Domain khusus | Tidak dibeli; gunakan subdomain Vercel | Rp0 | Di luar baseline belanja |
| Overhead kantor/perjalanan | Koordinasi daring dan alat tersedia | Rp0 | Tidak ada belanja terpisah |
| **Subtotal biaya kas** | Layanan + kuota + cetak | **Rp1.740.000** |  |
| Cadangan biaya | 10% × Rp1.740.000 | Rp174.000 | Penggunaan dengan persetujuan PM |
| **Total anggaran kas** | Subtotal + cadangan | **Rp1.914.000** |  |
| **Total nilai ekonomi proyek** | Tenaga kerja Rp7.150.000 + biaya kas Rp1.914.000 | **Rp9.064.000** | Nilai penuh |

## Distribusi biaya kas per sprint

| Periode | Supabase | Vercel | Kuota | Cetak | Cadangan | Total kas |
|---|---:|---:|---:|---:|---:|---:|
| Sprint 1 (19–23 Okt) | Rp0 | Rp0 | Rp0 | Rp0 | Rp0 | Rp0 |
| Sprint 2 (26 Okt–6 Nov) | Rp0 | Rp0 | Rp100.000 | Rp0 | Rp10.000 | Rp110.000 |
| Sprint 3 (9–20 Nov) | Rp400.000 | Rp320.000 | Rp50.000 | Rp0 | Rp77.000 | Rp847.000 |
| Sprint 4 (23 Nov–4 Des) | Rp400.000 | Rp320.000 | Rp50.000 | Rp100.000 | Rp87.000 | Rp957.000 |
| **Total** | **Rp800.000** | **Rp640.000** | **Rp200.000** | **Rp100.000** | **Rp174.000** | **Rp1.914.000** |

## Estimasi realisasi biaya per 14 November 2026

Biaya kas aktual sampai 14 November diasumsikan Rp0 karena mode MVP berjalan lokal. Biaya layanan, internet, cetak, dan cadangan diproyeksikan pada Sprint 4.

| Periode | Anggaran baseline | Aktual sampai 14 Nov | Sisa/proyeksi | EAC | Varians EAC |
|---|---:|---:|---:|---:|---:|
| Sprint 1 | Rp0 | Rp0 | Rp0 | Rp0 | Rp0 |
| Sprint 2 | Rp110.000 | Rp0 | Rp0 | Rp0 | −Rp110.000 |
| Sprint 3 | Rp847.000 | Rp0 | Rp0 | Rp0 | −Rp847.000 |
| Sprint 4 | Rp957.000 | Rp0 | Rp957.000 | Rp957.000 | Rp0 |
| **Biaya kas proyek** | **Rp1.914.000** | **Rp0** | **Rp957.000** | **Rp957.000** | **−Rp957.000 (−50%)** |
| Nilai ekonomi tenaga kerja | Rp7.150.000 | Rp4.850.000 | Rp2.400.000 | Rp7.250.000 | +Rp100.000 |
| **Nilai ekonomi penuh proyek** | **Rp9.064.000** | **Rp4.850.000** | **Rp3.357.000** | **Rp8.207.000** | **−Rp857.000** |

Realisasi tenaga kerja memakai estimasi 48,5 MD sampai akhir Sprint 3 dan 24 MD untuk sisa Sprint 4 serta dokumentasi akhir. Sisa biaya kas Rp957.000 mengikuti alokasi baseline Sprint 4.

## Dasar dan kontrol biaya

- Kurs internal anggaran ditetapkan Rp16.000 per US$ untuk perencanaan; Nayla memperbarui nilai Rupiah saat pembelian berdasarkan kurs/tagihan aktual.
- Supabase Pro diasumsikan US$25/bulan dan Vercel Pro US$20/bulan berdasarkan halaman harga resmi yang diperiksa 22 Oktober 2026. Anggaran mencakup dua bulan dan satu pemilik akun Vercel; seat tambahan, pajak, overage, dan domain khusus tidak termasuk.
- Vercel Hobby ditujukan untuk penggunaan personal/nonkomersial; karena target sistem digunakan UMKM, baseline memilih Pro untuk deployment customer-facing. Rujuk [ketentuan paket Hobby Vercel](https://vercel.com/legal/terms) sebelum aktivasi.
- Tarif tenaga kerja Rp100.000/manday adalah shadow rate untuk valuasi effort, bukan upah atau komitmen pembayaran.
- Cadangan 10% tidak dibelanjakan otomatis. Nayla menyetujui biaya tambahan dan menyimpan bukti transaksi.
- Untuk skenario monitoring ini, belanja layanan berbayar dimulai pada Sprint 4 dan dibatasi pada alokasi Rp957.000.

Referensi harga resmi: [Supabase Pricing](https://supabase.com/pricing) dan [Vercel Pricing](https://vercel.com/pricing).
