# Sprint Tracker

Tracker berikut mencatat deliverable, penanggung jawab, dan titik kendali proyek. Nayla memperbarui status setelah hasil dikerjakan atau keputusan diperoleh.

## Sprint 1 - Inisiasi (19–23 Oktober 2026)

| Aktivitas | Hasil yang dikendalikan | PIC | Status | Bukti/ukuran selesai |
|---|---|---|---|---|
| Penetapan tujuan dan ruang lingkup | Sasaran dan batas sistem | Nayla | Disusun; menunggu review tim | Charter mencatat sasaran, fitur, pengecualian dan kriteria hasil |
| Project Charter | Baseline proyek dan jadwal | Nayla | Disusun | [Project Charter](sprint-01/PROJECT_CHARTER.md) |
| Stakeholder Register | Pihak terkait dan rencana komunikasi | Nayla | Disusun | [Stakeholder Register](sprint-01/STAKEHOLDER_REGISTER.md) |
| WBS dan backlog | Paket kerja, PIC, dependensi, acceptance criteria | Nayla; tim meninjau | Disusun | [WBS](sprint-01/WORK_BREAKDOWN_STRUCTURE.md), [Backlog](PROJECT_BACKLOG.md) |
| Function Point | Estimasi fungsi sistem | Niluh; Nayla meninjau | Dihitung; klarifikasi metode dijadwalkan | [Function Point](sprint-01/FUNCTION_POINT.md) |
| Repository GitHub | Branch, commit dan PR tim | Seluruh tim | Repository aktif; kontribusi berjalan | Riwayat commit dan Pull Request repository |

## Sprint 2 - Analisis dan desain (26 Oktober–6 November 2026)

| Aktivitas | Deliverable | PIC | Target | Status rencana |
|---|---|---|---|---|
| Validasi kebutuhan bisnis | Keputusan produk, pesanan, admin dan laporan | Nayla, Niluh | 27 Okt | Terjadwal |
| Spesifikasi, use case dan alur | Requirement dengan aktor/kriteria dan alur inti | Niluh | 30 Okt | Terjadwal |
| Wireframe | Rancangan katalog, detail, admin, transaksi dan laporan | Zahra | 4 Nov | Terjadwal |
| Model data | Entitas, relasi, atribut dan aturan integritas | Zahra; Faiza review | 3 Nov | Terjadwal |
| Arsitektur dan deployment | Pemetaan stack, konfigurasi dan batas keamanan | Faiza | 5 Nov | Terjadwal |
| Review Sprint 2 dan baseline Sprint 3 | Keputusan review serta urutan backlog | Nayla; seluruh tim | 6 Nov | Terjadwal |
| Schedule, effort, cost dan risk | Baseline pengendalian proyek | Nayla; PIC memberi estimasi | 26 Okt–6 Nov | Disusun untuk review tim |

## Catatan keputusan dan review

| Tanggal | Kegiatan | Peserta | Keputusan/hasil | Tindak lanjut | Status |
|---|---|---|---|---|---|
| 22 Okt 2026 | Penyusunan baseline proyek | Nayla dan tim | Empat sprint dijadwalkan 19 Okt–4 Des 2026; tanggal diselaraskan saat kickoff dengan kalender akademik | Nayla memeriksa kalender dan mengonfirmasi jadwal | Terbuka |
| 26 Okt 2026 | Kickoff Sprint 2 | Tim inti | Konfirmasi kapasitas dan jadwal pertemuan pemilik | Nayla | Terjadwal |
| 30 Okt 2026 | Review requirement dan alur | Niluh, Zahra, Faiza, Nayla | Menetapkan kebutuhan untuk desain wireframe/model data | Niluh | Terjadwal |
| 6 Nov 2026 | Review Sprint 2 | Tim inti | Menerima hasil desain dan menyetujui prioritas Sprint 3 | Nayla | Terjadwal |

## Persiapan awal Sprint 3 (31 Oktober 2026)

Perubahan berikut telah digabung sebelum tanggal mulai Sprint 3. Catat sebagai fondasi persiapan, bukan penyelesaian acceptance criteria Sprint 3; tim tetap perlu meninjau kesiapan dan hasilnya pada kickoff.

| Kontribusi | PIC | Bukti merge | Hasil dan tindak lanjut |
|---|---|---|---|
| Fondasi aplikasi Next.js dipindahkan ke folder `app/` bersama konfigurasi dan migrasi awal | Faiza | [PR #10](https://github.com/MPPL01022026/kelompok-9/pull/10) | Kerangka siap dikembangkan; PB-03–PB-06 tetap membutuhkan implementasi dan keputusan lanjutan |
| Katalog publik dan detail produk membaca produk aktif dari Supabase, dengan data contoh untuk setup lokal | Niluh | [PR #11](https://github.com/MPPL01022026/kelompok-9/pull/11) | Tinjau terhadap data, requirement, dan wireframe yang disetujui; lanjutkan penyempurnaan saat Sprint 3 |
| Penyempurnaan navigasi mobile, fokus keyboard, dan preferensi reduced motion | Zahra | [PR #12](https://github.com/MPPL01022026/kelompok-9/pull/12) | Tinjau bersama wireframe pada kickoff dan catat revisi yang diperlukan |

## Prototipe MVP lokal (31 Oktober 2026)

Prototipe lokal dikembangkan sebelum tanggal mulai Sprint 3. Perubahan ini belum memiliki PR dan belum digabung ke `main`; statusnya tidak menutup review Sprint 3 atau persetujuan operasional.

| Bagian kontribusi yang disiapkan | PIC | Cakupan |
|---|---|---|
| Penyimpanan lokal dan skema hosted | Faiza | File JSON lokal, validasi/operasi server, mode autentikasi lokal, dan berkas impor SQL Supabase |
| Alur pelanggan | Niluh | Katalog, detail, keranjang, checkout nama saja, dan tanda terima pesanan ambil di kedai |
| Antarmuka dan wireframe | Zahra | Polesan responsif/aksesibel serta wireframe katalog, detail, login, keranjang, dan dashboard |
| Laporan dan kendali proyek | Nayla | README, backlog, pertanyaan terbuka, tracker, bukti, dan laporan Markdown/PDF |

Setiap anggota meninjau dan mendorong perubahan dari akun GitHub masing-masing. Urutan branch/PR dicatat saat kontribusi siap dikirim.

## Sprint 3 - Eksekusi proyek (9–20 November 2026)

| Aktivitas | Deliverable | PIC usulan | Target | Status saat rencana dibuat |
|---|---|---|---|---|
| Review kesiapan Sprint 2 dan kickoff | Persetujuan requirement, wireframe, model data, arsitektur; kapasitas dan blocker | Nayla, seluruh tim | 9 Nov | Direncanakan; keputusan belum tercatat |
| Setup aplikasi dan lingkungan lokal | Aplikasi dapat dijalankan; env example dan petunjuk setup | Faiza | 9–10 Nov | Belum mulai |
| Skema data dan autentikasi admin | Skema sesuai model data dan akses admin awal | Faiza; Zahra review | 10–12 Nov | Belum mulai |
| Katalog dan detail produk (PB-01, PB-02) | Produk aktif tampil dari data | Niluh | 11–13 Nov | Belum mulai |
| Dashboard dan manajemen produk (PB-03–PB-05) | Akses admin serta tambah/ubah/nonaktif produk | Faiza | 13–17 Nov | Belum mulai |
| Pencatatan transaksi (PB-06) | Transaksi dan item tersimpan dengan snapshot harga | Faiza | 17–19 Nov | Belum mulai |
| Integrasi dan review sprint | Demo internal, temuan, daftar pekerjaan Sprint 4 | Nayla, seluruh tim | 20 Nov | Direncanakan |

Rencana rinci dan dependensi tercatat pada [Sprint 3 Plan](sprint-03/SPRINT_PLAN.md) dan [Implementation Handoff](sprint-03/IMPLEMENTATION_HANDOFF.md). Bukti kontribusi awal dan status pelaksanaan tercatat dalam [Catatan Eksekusi Sprint 3](sprint-03/SPRINT_EXECUTION.md); ringkasan capaian prototipe tersedia dalam [Laporan Pelaksanaan Sprint 3](sprint-03/LAPORAN_PELAKSANAAN_SPRINT_3.md). Fitur MVP tersedia pada branch lokal dan belum dikirim melalui PR.

| Tanggal | Kegiatan | Peserta | Keputusan/hasil | Tindak lanjut | Status |
|---|---|---|---|---|---|
| 9 Nov 2026 | Kickoff Sprint 3 | Tim inti | Periksa kesiapan desain, lingkungan, kapasitas, serta blocker | Nayla | Direncanakan |
| 20 Nov 2026 | Review Sprint 3 | Tim inti | Tinjau hasil implementasi, kriteria yang diperiksa, isu dan scope Sprint 4 | Nayla | Direncanakan |

## Dokumen kendali

- [Open Questions](OPEN_QUESTIONS.md) mencatat keputusan bisnis dan desain yang perlu persetujuan.
- [Risk Register](sprint-02/RISK_REGISTER.md) mencatat pemicu, respons, dan pemilik risiko.
- [Project Schedule](sprint-02/PROJECT_SCHEDULE.md) memuat jadwal, dependensi, dan milestone.
