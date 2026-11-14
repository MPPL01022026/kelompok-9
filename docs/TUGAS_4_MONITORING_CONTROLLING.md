# Tugas 4 - Monitoring & Controlling

**Proyek:** Sistem Informasi Penjualan dan Manajemen Produk UMKM Ayam Gunting Malaysia  
**Kelompok:** 9  
**Tanggal tinjauan:** 14 November 2026  
**Sumber utama:** baseline dan dokumen proyek di repository MPPL01022026/kelompok-9; riwayat main yang tersedia sampai 31 Oktober 2026.

> **Basis perhitungan:** 1 MD = 4 jam fokus. Untuk laporan ini, estimasi realisasi manday adalah S1 7,5 MD, S2 14 MD, dan S3 27 MD. Biaya kas aktual sampai 14 November adalah Rp0; biaya Sprint 4 diproyeksikan sesuai baseline.

## 1. Ringkasan status

- Baseline proyek membagi pekerjaan menjadi empat sprint, 19 Oktober–4 Desember 2026. Sprint 3 selesai pada 14 November, enam hari kalender lebih awal dari target 20 November.
- PR MVP #14–#17 dan dokumentasi #18 masuk ke main pada 31 Oktober sebagai persiapan awal. Sprint 3 menyelesaikan prototipe MVP lokal; review fungsional dan integrasi hosted dijadwalkan di Sprint 4.
- Estimasi effort proyek 71,5 MD. Model realisasi sampai akhir Sprint 3 adalah 48,5 MD dibanding baseline 47,5 MD untuk Sprint 1–3, selisih +1 MD.
- Biaya kas aktual sampai 14 November diasumsikan Rp0. Proyeksi Sprint 4 memakai anggaran baseline Rp957.000, sehingga estimasi biaya kas saat selesai Rp957.000 dari anggaran Rp1.914.000.
- Mode JSON lokal digunakan untuk prototipe Sprint 3; integrasi Supabase/Vercel, laporan, pengujian penerimaan, dan demo menjadi fokus Sprint 4.

## 2. Perbandingan rencana dan realisasi waktu

Tanggal baseline berasal dari [WBS](sprint-01/WORK_BREAKDOWN_STRUCTURE.md), [Project Schedule](sprint-02/PROJECT_SCHEDULE.md), dan [Sprint Plan](sprint-03/SPRINT_PLAN.md). Tanggal PR berasal dari riwayat Git yang tersedia di main.

| Tahap | Rencana | Realisasi / proyeksi | Varians jadwal |
|---|---|---|---|
| Sprint 1: Inisiasi | 19–23 Okt 2026 | 19–23 Okt 2026 | 0 hari; sesuai baseline |
| Sprint 2: Analisis dan desain | 26 Okt–6 Nov 2026 | 26 Okt–6 Nov 2026 | 0 hari; sesuai baseline |
| Sprint 3: Eksekusi | 9–20 Nov 2026 | 9–14 Nov 2026 | 6 hari kalender lebih awal (5 hari kerja) |
| Sprint 4: Penutupan | 23 Nov–4 Des 2026 | Proyeksi 23 Nov–4 Des 2026 | 0 hari pada proyeksi |

Varians jadwal = tanggal selesai − tanggal selesai baseline. Nilai positif berarti terlambat; nilai negatif berarti lebih awal. Sprint 3 ditutup enam hari kalender lebih awal.

## 3. Perbandingan estimasi manday dan aktual

Estimasi baseline diambil dari [Effort Estimation](sprint-02/EFFORT_ESTIMATION_MANDAY.md). Saya mengelompokkan paket WBS 3.6–3.7 pada Sprint 3 dan WBS 5.1–5.3 pada pekerjaan akhir Sprint 4.

| Lingkup | Baseline MD | Realisasi MD s.d. 14 Nov | Sisa estimasi MD | EAC MD | Varians EAC |
|---|---:|---:|---:|---:|---:|
| Sprint 1: WBS 1.1–1.6 | 8 | 7,5 | 0 | 7,5 | −0,5 |
| Sprint 2: WBS 2.1–2.7 | 13,5 | 14 | 0 | 14 | +0,5 |
| Sprint 3: WBS 3.1–3.7 | 26 | 27 | 0 | 27 | +1 |
| Sprint 4: WBS 4.1–4.4 | 19 | 0 | 19 | 19 | 0 |
| Dokumentasi/demo akhir: WBS 5.1–5.3 | 5 | 0 | 5 | 5 | 0 |
| **Total proyek** | **71,5** | **48,5** | **24** | **72,5** | **+1 MD (+1,4%)** |

Realisasi MD merupakan estimasi kontrol untuk membandingkan effort, bukan konversi jumlah PR. Untuk pemetaan sprint, saya memakai baseline effort: 18 MD pada WBS 3.1–3.5 ditambah 8 MD transaksi/riwayat pada WBS 3.6–3.7; pekerjaan akhir WBS 5.1–5.3 ditempatkan pada Sprint 4.

EAC (estimate at completion) = realisasi sampai tanggal tinjauan + sisa estimasi. Varians EAC = EAC − baseline; nilai positif berarti effort diperkirakan melebihi rencana.

## 4. Perbandingan anggaran dan biaya aktual

Angka baseline berasal dari [Project Cost Estimation](sprint-02/PROJECT_COST_ESTIMATION.md). Proyeksi menempatkan penggunaan biaya layanan pada Sprint 4.

| Komponen | Anggaran baseline | Aktual s.d. 14 Nov | Sisa/proyeksi | EAC | Varians EAC |
|---|---:|---:|---:|---:|---:|
| Sprint 1 | Rp0 | Rp0 | Rp0 | Rp0 | Rp0 |
| Sprint 2 | Rp110.000 | Rp0 | Rp0 | Rp0 | −Rp110.000 |
| Sprint 3 | Rp847.000 | Rp0 | Rp0 | Rp0 | −Rp847.000 |
| Sprint 4 | Rp957.000 | Rp0 | Rp957.000 | Rp957.000 | Rp0 |
| **Biaya kas proyek** | **Rp1.914.000** (termasuk cadangan Rp174.000) | **Rp0** | **Rp957.000** | **Rp957.000** | **−Rp957.000 (−50%)** |
| Nilai ekonomi tenaga kerja | Rp7.150.000 | Rp4.850.000 | Rp2.400.000 | Rp7.250.000 | +Rp100.000 |
| **Nilai ekonomi penuh proyek** | **Rp9.064.000** | **Rp4.850.000** | **Rp3.357.000** | **Rp8.207.000** | **−Rp857.000** |

Biaya kas aktual sampai 14 November ditetapkan Rp0. Proyeksi Sprint 4 memakai seluruh anggaran sprint Rp957.000, termasuk layanan, internet, cetak laporan, dan cadangan.

EAC biaya = biaya aktual sampai tanggal tinjauan + proyeksi biaya tersisa. Varians EAC = EAC − anggaran baseline.

## 5. Isu, risiko, dan perubahan ruang lingkup

| ID | Isu/status | Dampak | Tindakan korektif | Pemilik | Status |
|---|---|---|---|---|---|
| I-01 | MVP Sprint 3 menggunakan penyimpanan JSON lokal. | Data hanya tersedia pada komputer development. | Pertahankan mode lokal untuk demonstrasi; siapkan integrasi Supabase/Vercel pada Sprint 4. | Faiza | Dijadwalkan Sprint 4 |
| I-02 | Fitur riwayat, rekap omzet, dan produk terlaris menjadi scope Sprint 4. | Dashboard MVP tidak menampilkan ringkasan penjualan. | Implementasikan PB-07, PB-08, dan PB-09 pada Sprint 4 dengan asumsi omzet menghitung transaksi selesai dan tanggal lokal. | Niluh, Faiza | Dijadwalkan Sprint 4 |
| I-03 | Pengujian penerimaan lintas alur dan deployment publik berada pada paket Sprint 4. | Rilis publik dijadwalkan setelah UAT Sprint 4. | Jalankan skenario katalog, admin, CRUD produk, checkout, status pesanan, laporan; tutup temuan kritis sebelum deployment. | Faiza dan seluruh tim | Dijadwalkan Sprint 4 |
| I-04 | Estimasi manday memisahkan WBS 3.6–3.7 dan 5.1–5.3, sedangkan WBS ringkas menggabungkan pekerjaan tersebut. | Varians per aktivitas bisa tidak konsisten antar dokumen. | Gunakan pemetaan baseline pada tabel effort: WBS 3.6–3.7 masuk Sprint 3 dan WBS 5.1–5.3 masuk pekerjaan akhir Sprint 4. | Nayla | Selesai pada laporan ini |
| I-05 | Anggaran layanan cloud direncanakan mulai Sprint 3; MVP saat ini tetap berjalan lokal. | Perkiraan biaya bergeser ke periode deployment. | Tahan belanja cloud sampai deployment Sprint 4; batasi biaya Sprint 4 pada Rp957.000. | Nayla, Faiza | Dijadwalkan Sprint 4 |

### Perubahan ruang lingkup

1. Saya menempatkan Supabase/Vercel dan migrasi dari penyimpanan lokal pada Sprint 4. Sprint 3 ditutup dengan MVP lokal untuk demo.
2. PB-07 riwayat terfilter, PB-08 rekap omzet/jumlah transaksi, PB-09 produk terlaris, PB-10 pengujian penerimaan, dan PB-11 deployment tetap menjadi keluaran Sprint 4.
3. Pembayaran online, pengantaran, dan sinkronisasi antarperangkat tetap di luar cakupan proyek.
4. Untuk laporan Sprint 4, omzet dihitung dari pesanan selesai berdasarkan tanggal lokal; produk terlaris diurutkan dari jumlah item terjual.

## 6. Tindakan pengendalian prioritas

1. **Nayla, 14 Nov:** tracker Sprint 3 ditutup dengan status selesai dan varians jadwal/effort.
2. **Faiza, 25 Nov:** siapkan Supabase development, migrasi, RLS, autentikasi admin, dan koneksi aplikasi.
3. **Niluh dan Faiza, 30 Nov:** implementasikan riwayat transaksi, rekap, dan produk terlaris.
4. **Faiza dan tim, 2 Des:** jalankan uji penerimaan dan selesaikan temuan kritis.
5. **Faiza, 3 Des:** deploy aplikasi development ke Vercel dan hubungkan ke Supabase.
6. **Nayla dan tim, 4 Des:** demo, review akhir, dokumentasi, dan penutupan Sprint 4.

## 7. Referensi repository

- [Project Backlog](PROJECT_BACKLOG.md)
- [Sprint Tracker](SPRINT_TRACKER.md)
- [WBS](sprint-01/WORK_BREAKDOWN_STRUCTURE.md)
- [Project Schedule](sprint-02/PROJECT_SCHEDULE.md)
- [Effort Estimation](sprint-02/EFFORT_ESTIMATION_MANDAY.md)
- [Project Cost Estimation](sprint-02/PROJECT_COST_ESTIMATION.md)
- [Risk Register](sprint-02/RISK_REGISTER.md)
- [Open Questions](OPEN_QUESTIONS.md)
- [Sprint 3 Plan](sprint-03/SPRINT_PLAN.md)
- [Sprint 3 execution notes](sprint-03/SPRINT_EXECUTION.md)
- [Sprint 3 implementation report](sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md)
- Riwayat PR: [#14](https://github.com/MPPL01022026/kelompok-9/pull/14), [#15](https://github.com/MPPL01022026/kelompok-9/pull/15), [#16](https://github.com/MPPL01022026/kelompok-9/pull/16), [#17](https://github.com/MPPL01022026/kelompok-9/pull/17), [#18](https://github.com/MPPL01022026/kelompok-9/pull/18).
