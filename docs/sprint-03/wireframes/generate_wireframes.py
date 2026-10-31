"""Generate editable, grayscale handoff wireframes and PNG previews."""

from pathlib import Path
from html import escape


OUT = Path(__file__).parent
W, H = 1800, 1200
INK = "#111111"
MID = "#555555"
LIGHT = "#d8d8d8"
PALE = "#f3f3f3"
WHITE = "#ffffff"


def rect(x, y, w, h, label="", fill=WHITE, stroke=INK, radius=0, sw=2, dash=""):
    if label.startswith("#"):
        label, fill, stroke, radius, sw = "", label, fill, stroke, radius
    d = f' stroke-dasharray="{dash}"' if dash else ""
    s = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>'
    if label:
        s += text(x + w / 2, y + h / 2 + 5, label, 13, MID, "middle", 700)
    return s


def text(x, y, value, size=16, color=INK, anchor="start", weight=400):
    return f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="{anchor}">{escape(value)}</text>'


def line(x1, y1, x2, y2, color=LIGHT, sw=1, dash=""):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"{d}/>'


def circle(cx, cy, r, label, fill=WHITE):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{INK}" stroke-width="2"/>' + text(cx, cy + 5, label, 13, INK, "middle", 700)


def label(x, y, value):
    return text(x, y, value.upper(), 12, MID, "start", 700)


def start(title, screen, subtitle):
    a = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
         f'<rect width="{W}" height="{H}" fill="{WHITE}"/>',
         text(60, 52, "AYAM GUNTING MALAYSIA  /  SPRINT 3  /  WIREFRAME", 15, MID, weight=700),
         text(60, 100, title, 30, INK, weight=700),
         text(60, 130, subtitle, 15, MID),
         line(60, 150, 1740, 150, INK, 2),
         text(60, 178, screen.upper(), 13, INK, weight=700),
         text(1340, 178, "SPESIFIKASI DAN CATATAN", 13, INK, weight=700),
         rect(60, 195, 1240, 775, fill=WHITE, stroke=INK, radius=2, sw=2),
         text(75, 190, "FRAME DESKTOP 1440 x 900, SKALA 0,86", 11, MID)]
    # A 12-column layout grid, intentionally faint so content remains readable.
    gx, gy, gw, gh, gap = 84, 220, 1192, 725, 16
    cw = (gw - 11 * gap) / 12
    for i in range(12):
        x = gx + i * (cw + gap)
        a.append(f'<rect x="{x:.1f}" y="{gy}" width="{cw:.1f}" height="{gh}" fill="none" stroke="#e5e5e5" stroke-width="1" stroke-dasharray="5 6"/>')
    a += [line(1320, 195, 1320, 970, INK, 1),
          text(60, 1008, "GRID 12 KOLOM  |  MARGIN 28  |  GUTTER 16  |  SPACING 8 PX", 13, MID, weight=700),
          text(60, 1034, "Abu-abu menunjukkan area konten. Garis putus-putus menunjukkan grid, bukan elemen antarmuka.", 13, MID),
          line(60, 1050, 1740, 1050, LIGHT, 1),
          text(60, 1080, "STATUS: RANCANGAN LOW-FIDELITY UNTUK REVIEW, BELUM MENJADI SPESIFIKASI BISNIS FINAL", 12, MID, weight=700),
          text(1740, 1080, "KELOMPOK 9  |  31 OKT 2026", 12, MID, "end", 700)]
    return a


def note(a, n, y, heading, body, extra=None):
    a.append(circle(1360, y - 4, 16, str(n), PALE))
    a.append(text(1390, y, heading, 15, INK, weight=700))
    for j, row in enumerate(body):
        a.append(text(1390, y + 24 + j * 19, row, 13, MID))
    if extra:
        for j, row in enumerate(extra):
            a.append(text(1390, y + 24 + (len(body) + j) * 19, row, 12, INK, weight=700))


def header(a, active="Menu"):
    a.extend([rect(85, 225, 1190, 55, WHITE, LIGHT, 4, 1),
              circle(112, 252, 13, "AG", PALE), text(136, 249, "Ayam Gunting", 15, INK, weight=700),
              text(136, 266, "MALAYSIA  /  STREET BITES", 9, MID),
              text(880, 257, "Menu", 13, INK if active == "Menu" else MID, weight=700 if active == "Menu" else 400),
              text(965, 257, "Cerita kami", 13, MID),
              rect(1081, 238, 169, 30, "Masuk admin", PALE, INK, 15, 1)])


def catalog():
    a = start("01  Katalog produk", "K-01  /  Katalog publik", "Tujuan: membantu pelanggan menemukan produk dan membuka informasi produk.")
    header(a)
    a += [rect(85, 298, 1190, 250, WHITE, LIGHT, 4, 1),
          label(115, 337, "Intro katalog"), text(115, 385, "Temukan camilan favorit", 29, INK, weight=700),
          text(115, 414, "Deskripsi singkat usaha atau katalog.", 14, MID),
          rect(115, 452, 150, 38, "Lihat menu", PALE, INK, 4, 1),
          rect(920, 330, 285, 190, "Placeholder media utama", PALE, MID, 4, 1),
          label(85, 590, "Daftar produk"), text(85, 624, "Pilihan menu", 23, INK, weight=700),
          rect(935, 600, 315, 34, "Cari produk", WHITE, MID, 4, 1),
          rect(85, 653, 1190, 38, WHITE, LIGHT, 4, 1),
          rect(98, 659, 85, 26, "Semua", PALE, INK, 13, 1),
          text(208, 677, "Kategori A", 12, MID), text(319, 677, "Kategori B", 12, MID),
          text(430, 677, "Kategori lain", 12, MID)]
    for idx, x in enumerate((85, 389, 693, 997), start=1):
        a += [rect(x, 710, 278, 205, WHITE, MID, 4, 1),
              rect(x + 1, 711, 276, 103, PALE, LIGHT, 4, 1),
              text(x + 14, 837, "Nama produk", 15, INK, weight=700),
              text(x + 14, 858, "Rp 00.000", 13, INK, weight=700),
              text(x + 14, 880, "Deskripsi singkat", 12, MID),
              line(x + 14, 890, x + 264, 890, LIGHT, 1),
              text(x + 14, 908, "Lihat detail  >", 12, INK, weight=700)]
    note(a, 1, 235, "Navigasi", ["Logo kembali ke katalog.", "Menu mengikuti anchor halaman.", "Admin menjadi aksi sekunder."])
    note(a, 2, 340, "Hero", ["Judul dan penjelasan singkat.", "Aksi utama menuju daftar menu.", "Media bersifat dekoratif."])
    note(a, 3, 470, "Temukan produk", ["Judul, pencarian, kategori.", "Pencarian dan kategori mengubah daftar.", "Kontrol tetap terlihat di ponsel."])
    note(a, 4, 600, "Kartu produk", ["Gambar, nama, harga, ringkasan.", "Kartu membuka halaman detail.", "Target interaksi minimal 44 px."])
    note(a, 5, 748, "State yang dirancang", ["Memuat: skeleton kartu.", "Kosong: penjelasan dan aksi ulang.", "Error: pesan dan coba lagi.", "Banyak hasil: tambah halaman."])
    note(a, 6, 890, "Responsif dan akses", ["390 px: grid satu kolom.", "Pencarian dan filter dapat digulir.", "Urutan fokus mengikuti urutan baca.", "Fokus papan ketik terlihat."])
    return "01-katalog", a


def detail():
    a = start("02  Detail produk", "P-01  /  Detail produk", "Tujuan: menyampaikan informasi produk dan menyediakan jalan kembali ke katalog.")
    header(a, "Detail")
    a += [rect(85, 300, 65, 30, "< Kembali", WHITE, LIGHT, 4, 1),
          rect(85, 348, 545, 495, PALE, MID, 4, 1),
          text(357, 585, "Placeholder gambar produk", 16, MID, "middle", 700),
          label(675, 368, "Kategori produk"), text(675, 414, "Nama produk", 32, INK, weight=700),
          text(675, 458, "Rp 00.000", 21, INK, weight=700),
          line(675, 480, 1235, 480, LIGHT, 1),
          label(675, 518, "Deskripsi"), text(675, 550, "Penjelasan produk dalam beberapa baris.", 15, MID),
          text(675, 578, "Sertakan komposisi atau informasi lain bila disetujui.", 13, MID),
          label(675, 635, "Ketersediaan"), rect(675, 652, 160, 31, "Status produk", PALE, MID, 15, 1),
          rect(675, 716, 335, 48, "Tambah ke keranjang", PALE, INK, 4, 1),
          text(675, 797, "Pelanggan meninjau pesanan di keranjang.", 12, MID),
          rect(85, 873, 1190, 42, "Informasi pendukung / rekomendasi", WHITE, LIGHT, 4, 1)]
    note(a, 1, 236, "Breadcrumb", ["Kembali ke katalog.", "Mendukung orientasi dan recovery."])
    note(a, 2, 335, "Identitas produk", ["Nama, kategori, harga.", "Label harga memakai format Rupiah."])
    note(a, 3, 445, "Media dan isi", ["Rasio area media 1:1.", "Deskripsi dapat bertambah baris.", "Teks tetap terbaca tanpa gambar."])
    note(a, 4, 565, "Ketersediaan", ["Tampilkan status bila relevan.", "Produk nonaktif tidak ditawarkan.", "Teks menyertai indikator visual."])
    note(a, 5, 710, "Pemesanan", ["Tambah item ke keranjang.", "Tinjau jumlah dan subtotal.", "Server memeriksa harga terkini."])
    note(a, 6, 870, "State dan responsif", ["Memuat, tidak ditemukan, error.", "390 px: media di atas informasi.", "Aksi selebar kontainer.", "Kembali tetap mudah dijangkau."])
    return "02-detail-produk", a


def login():
    a = start("03  Masuk admin", "A-01  /  Autentikasi admin", "Tujuan: memberi admin akses terautentikasi ke area pengelolaan.")
    a += [rect(85, 225, 1190, 55, WHITE, LIGHT, 4, 1),
          circle(112, 252, 13, "AG", PALE), text(136, 249, "Ayam Gunting", 15, INK, weight=700),
          text(136, 266, "MALAYSIA  /  ADMIN", 9, MID),
          rect(352, 302, 656, 610, WHITE, LIGHT, 8, 2),
          circle(430, 373, 23, "AG", PALE), text(472, 369, "Masuk ke dashboard", 24, INK, weight=700),
          text(472, 396, "Gunakan akun admin yang telah diaktifkan.", 13, MID),
          label(407, 455, "Email admin"), rect(407, 470, 546, 48, "nama@contoh.id", WHITE, MID, 4, 1),
          label(407, 551, "Kata sandi"), rect(407, 566, 546, 48, "Masukkan kata sandi", WHITE, MID, 4, 1),
          text(407, 635, "State error tampil di sini dan diumumkan teknologi bantu.", 11, MID),
          rect(407, 670, 546, 50, "Masuk ke dashboard", PALE, INK, 4, 1),
          rect(407, 752, 546, 45, "Kembali ke katalog", WHITE, LIGHT, 4, 1),
          text(407, 846, "Akun admin dibuat atau diundang, bukan melalui pendaftaran publik.", 12, MID)]
    note(a, 1, 236, "Konteks", ["Logo menjadi tautan katalog.", "Judul menjelaskan tujuan form."])
    note(a, 2, 340, "Form", ["Email bertipe email.", "Kata sandi bertipe password.", "Label terlihat, bukan placeholder saja."])
    note(a, 3, 490, "Validasi dan feedback", ["Field wajib diperiksa.", "Kredensial keliru: alert + koreksi.", "Setup gagal: instruksi admin.", "Jangan hilangkan nilai email."])
    note(a, 4, 654, "Aksi", ["Tombol utama punya status memuat.", "Cegah submit ganda.", "Tautan katalog adalah aksi sekunder."])
    note(a, 5, 790, "Aksesibilitas", ["Fokus: email, sandi, masuk, kembali.", "Error tertaut pada form.", "Target sentuh minimal 44 px."])
    note(a, 6, 922, "Responsif", ["390 px: kartu selebar layar.", "Padding kartu 24 px minimum.", "Tidak ada scroll horizontal."])
    return "03-login-admin", a


def cart():
    a = start("04  Keranjang dan pesanan", "K-02  /  Keranjang pelanggan", "Tujuan: meninjau jumlah dan subtotal, lalu mengirim pesanan ambil di kedai.")
    header(a, "Keranjang")
    a += [rect(85, 305, 735, 60, WHITE, LIGHT, 4, 1), text(110, 342, "< Kembali ke menu", 13, MID),
          text(85, 416, "Keranjang Anda", 28, INK, weight=700),
          rect(85, 450, 735, 126, WHITE, LIGHT, 4, 1), rect(103, 467, 92, 92, PALE, LIGHT, 4, 1),
          text(218, 489, "Nama produk", 16, INK, weight=700), text(218, 516, "Rp 00.000 per produk", 13, MID),
          rect(560, 485, 104, 34, "−     1     +", WHITE, MID, 4, 1), text(690, 506, "Rp 00.000", 14, INK, weight=700),
          text(778, 506, "×", 18, MID, "middle", 700),
          rect(85, 590, 735, 126, WHITE, LIGHT, 4, 1), rect(103, 607, 92, 92, PALE, LIGHT, 4, 1),
          text(218, 629, "Nama produk", 16, INK, weight=700), text(218, 656, "Rp 00.000 per produk", 13, MID),
          rect(560, 625, 104, 34, "−     2     +", WHITE, MID, 4, 1), text(690, 646, "Rp 00.000", 14, INK, weight=700),
          text(778, 646, "×", 18, MID, "middle", 700),
          rect(850, 400, 400, 416, WHITE, INK, 4, 1), text(880, 444, "Ringkasan pesanan", 20, INK, weight=700),
          line(880, 466, 1220, 466, LIGHT, 1), text(880, 503, "Subtotal", 14, MID), text(1220, 503, "Rp 00.000", 14, INK, "end", 700),
          text(880, 532, "Total dihitung ulang saat dikirim.", 11, MID),
          rect(880, 565, 340, 70, PALE, LIGHT, 4, 1), text(898, 592, "Pengambilan di kedai", 14, INK, weight=700),
          text(898, 616, "Tunjukkan kode pesanan saat mengambil.", 11, MID),
          label(880, 674, "Nama pemesan"), rect(880, 690, 340, 42, "Nama lengkap", WHITE, MID, 4, 1),
          rect(880, 750, 340, 46, "Kirim pesanan", PALE, INK, 4, 1),
          text(880, 812, "Data yang disimpan: nama, item, waktu, total, status.", 11, MID)]
    note(a, 1, 236, "Item pesanan", ["Nama, harga, kuantitas, subtotal.", "Perubahan jumlah memperbarui total.", "Item nonaktif harus dihapus."])
    note(a, 2, 375, "Ringkasan", ["Subtotal dihitung dari data terkini.", "Server menghitung ulang saat kirim.", "Harga snapshot disimpan di pesanan."])
    note(a, 3, 520, "Pemenuhan", ["Pesanan untuk diambil di kedai.", "Tidak meminta alamat atau telepon.", "Kode membantu pencocokan pesanan."])
    note(a, 4, 667, "Identitas dan kirim", ["Nama wajib, 2–80 karakter.", "Kesalahan terkait ke kolom/form.", "Tombol menampilkan status memuat."])
    note(a, 5, 829, "State dan akses", ["Kosong: tautan kembali ke menu.", "Gagal: data tetap dapat dikoreksi.", "Kontrol jumlah punya label aksesibel."])
    note(a, 6, 930, "Responsif", ["390 px: item di atas ringkasan.", "Ringkasan menjadi satu kolom.", "Tombol memenuhi lebar konten."])
    return "04-keranjang-pesanan", a


def admin():
    a = start("05  Dashboard admin", "A-02  /  Operasional toko", "Tujuan: mengelola ketersediaan menu dan memproses antrean pesanan.")
    a += [rect(85, 225, 1190, 55, WHITE, LIGHT, 4, 1), circle(112, 252, 13, "AG", PALE),
          text(136, 249, "Ayam Gunting", 15, INK, weight=700), text(136, 266, "MALAYSIA  /  RUANG ADMIN", 9, MID),
          text(995, 257, "admin@contoh.id", 12, MID), rect(1150, 238, 100, 30, "Keluar", WHITE, MID, 4, 1),
          rect(85, 296, 190, 650, PALE, LIGHT, 4, 1), text(105, 336, "PENGELOLAAN TOKO", 10, MID, weight=700),
          rect(100, 355, 160, 42, "Produk", WHITE, MID, 4, 1), rect(100, 408, 160, 42, "Pesanan", WHITE, MID, 4, 1),
          text(310, 338, "Dashboard", 25, INK, weight=700), text(310, 364, "Kelola menu dan proses pesanan katalog.", 13, MID),
          rect(1010, 315, 240, 38, "31 Okt 2026, 12.00 WIB", WHITE, MID, 4, 1),
          rect(310, 390, 290, 84, WHITE, LIGHT, 4, 1), text(332, 420, "Produk aktif", 12, MID), text(332, 455, "12", 25, INK, weight=700),
          rect(620, 390, 290, 84, WHITE, LIGHT, 4, 1), text(642, 420, "Pesanan menunggu", 12, MID), text(642, 455, "4", 25, INK, weight=700),
          rect(930, 390, 320, 84, WHITE, LIGHT, 4, 1), text(952, 420, "Jumlah menu", 12, MID), text(952, 455, "15", 25, INK, weight=700),
          text(310, 520, "Produk", 19, INK, weight=700), rect(1110, 492, 140, 34, "Tambah produk", PALE, INK, 4, 1),
          rect(310, 538, 940, 152, WHITE, LIGHT, 4, 1),
          rect(325, 550, 910, 32, PALE, LIGHT, 2, 1), text(338, 571, "PRODUK", 10, MID, weight=700), text(730, 571, "KATEGORI", 10, MID, weight=700), text(865, 571, "HARGA", 10, MID, weight=700), text(985, 571, "STATUS", 10, MID, weight=700),
          text(338, 612, "Ayam Gunting", 12), text(730, 612, "Favorit", 12), text(865, 612, "Rp 15.000", 12), text(985, 612, "Aktif", 12), text(1080, 612, "Ubah  Nonaktifkan", 11, MID),
          line(325, 630, 1235, 630, LIGHT, 1), text(338, 660, "Kentang Goreng", 12), text(730, 660, "Camilan", 12), text(865, 660, "Rp 10.000", 12), text(985, 660, "Aktif", 12), text(1080, 660, "Ubah  Nonaktifkan", 11, MID),
          text(310, 735, "Antrean pesanan", 19, INK, weight=700),
          rect(310, 752, 940, 155, WHITE, LIGHT, 4, 1), text(330, 780, "Nama pemesan  ·  31 Okt 2026, 11.45 WIB  ·  KODE1234", 12, INK, weight=700),
          text(330, 810, "2 x Ayam Gunting (Rp 15.000)", 12, MID), text(330, 834, "Total", 12, MID), text(1218, 834, "Rp 30.000", 13, INK, "end", 700),
          rect(330, 850, 125, 34, "Menandai selesai", WHITE, MID, 4, 1), rect(468, 850, 112, 34, "Batalkan", WHITE, MID, 4, 1),
          text(760, 870, "MENUNGGU", 10, MID, weight=700)]
    note(a, 1, 236, "Akses admin", ["Membutuhkan sesi terautentikasi.", "Peran diverifikasi sebelum data tampil.", "Keluar mengakhiri sesi."])
    note(a, 2, 375, "Ringkasan", ["Jumlah produk aktif.", "Pesanan menunggu, dari 50 terbaru.", "Waktu diformat dalam WIB."])
    note(a, 3, 505, "Manajemen produk", ["Tambah, ubah, aktif/nonaktif.", "Validasi harga positif di server.", "Produk nonaktif hilang dari katalog."])
    note(a, 4, 665, "Antrean", ["Nama dan kode pesanan.", "Item dan snapshot harga.", "Total berasal dari transaksi."])
    note(a, 5, 820, "Tindakan status", ["Pesanan menunggu: selesai/batal.", "Status terminal tidak diubah lagi.", "Konfirmasi sebelum membatalkan."])
    note(a, 6, 940, "Responsif dan akses", ["Tabel dapat digulir horizontal.", "Kartu pesanan ditumpuk di ponsel.", "Aksi punya label yang jelas."])
    return "05-dashboard-admin", a


def write(name, elements):
    svg = "\n".join(elements + ["</svg>"])
    path = OUT / f"{name}.svg"
    path.write_text(svg, encoding="utf-8")


for maker in (catalog, detail, login, cart, admin):
    name, elements = maker()
    write(name, elements)
