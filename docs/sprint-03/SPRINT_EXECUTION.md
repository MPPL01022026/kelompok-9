# Catatan Eksekusi Proyek Sprint 3

## Periode pencatatan

Baseline Sprint 3 dijadwalkan pada 9-20 November 2026. Catatan ini diperbarui 31 Oktober 2026 untuk merangkum kondisi MVP dan bukti repository yang tersedia sebelum periode sprint. Catatan ini bukan notulen kickoff, review sprint, atau persetujuan stakeholder.

## Kontribusi MVP yang sudah digabung

| Anggota | Hasil kontribusi | Bukti |
|---|---|---|
| Faiza Rahmatika | Penyimpanan lokal, validasi server, operasi admin, dan skema Supabase | [PR #14](https://github.com/MPPL01022026/kelompok-9/pull/14) |
| Niluh Naswa Salfa Adlian Lubis | Katalog pelanggan, detail, keranjang, dan pemesanan untuk pengambilan | [PR #15](https://github.com/MPPL01022026/kelompok-9/pull/15) |
| Zahra, NIM 230504047 | Antarmuka responsif, aksesibilitas, dan wireframe | [PR #16](https://github.com/MPPL01022026/kelompok-9/pull/16) |
| Nayla Salsabila Awika | Koordinasi dan dokumentasi MVP | [PR #17](https://github.com/MPPL01022026/kelompok-9/pull/17) |

Perubahan tampilan dan dokumentasi yang terlihat pada lingkungan kerja saat ini perlu diperiksa terhadap status Git sebelum dinyatakan telah dikirim ke GitHub. Tangkapan layar laporan merepresentasikan aplikasi lokal pada 31 Oktober 2026.

## Kondisi MVP lokal

| Area | Kondisi yang terdokumentasi | Batas |
|---|---|---|
| Katalog | Beranda, pencarian, kategori, detail produk, gambar ilustratif, dan state kosong | Data produk dan harga contoh |
| Keranjang | Kuantitas, hapus item, subtotal, nama pemesan, dan pengambilan di kedai | Tidak ada pembayaran daring atau pengantaran |
| Pesanan | Snapshot item/harga, waktu, status, total, dan tanda terima berkode | Mode lokal hanya menyimpan di satu komputer |
| Admin | Login/logout, CRUD produk, ketersediaan, dan antrean status pesanan | Kredensial lokal berasal dari environment |
| Tampilan | Tangkapan layar desktop dan ponsel tersedia untuk halaman publik dan admin | Gambar ilustratif, bukan foto resmi usaha |
| Wireframe | Tujuh layar grayscale dengan sumber SVG dan pratinjau PNG | Digunakan sebagai dokumentasi struktur, bukan persetujuan requirement |
| Supabase | Berkas impor gabungan tersedia | Belum diterapkan pada project Supabase |

## Pemeriksaan dokumentasi

- Peninjauan visual dilakukan pada beranda, katalog, detail, keranjang kosong dan berisi, tanda terima, login admin, dashboard, antrean, serta katalog ponsel.
- Navigasi halaman dan login lokal digunakan untuk menyiapkan screenshot. Ini tidak menggantikan pengujian end-to-end ataupun UAT.
- Pemeriksaan lint, TypeScript, dan build tidak diulang saat pembaruan dokumentasi ini.
- Rincian, tangkapan layar, wireframe, dan batas verifikasi ada pada [laporan Sprint 3](LAPORAN_PELAKSANAAN_SPRINT_3.md).

## Tindak lanjut

1. Tinjau kebutuhan dan isi katalog dengan pemilik usaha sebelum memakai data selain contoh.
2. Periksa alur pemesanan dan perubahan status dari awal sampai akhir menggunakan data lokal uji.
3. Tinjau kebijakan RLS, fungsi transaksi, akses admin, serta mitigasi spam sebelum menyalakan mode hosted.
4. Catat tanggal, peserta, keputusan, bukti review, dan isu hanya setelah kegiatan terkait benar-benar berlangsung.

Rencana, PIC, baseline, dan Definition of Done tetap dicatat dalam [Sprint Plan](SPRINT_PLAN.md). Data bisnis yang belum diputuskan berada di [Open Questions](../OPEN_QUESTIONS.md).
