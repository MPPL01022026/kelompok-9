"""Generate grayscale desktop wireframes for all customer and admin routes."""

from html import escape
from pathlib import Path

OUT = Path(__file__).parent
INK, MID, LINE, LIGHT, WHITE = "#111111", "#505050", "#929292", "#d9d9d9", "#ffffff"
W, H = 1800, 1160
SX, SY, SCALE = 56, 186, 0.86


def text(x, y, value, size=15, color=INK, weight=400, anchor="start"):
    return f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="{anchor}">{escape(str(value))}</text>'


def rect(x, y, w, h, fill=WHITE, stroke=LINE, sw=1, radius=0):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'


def line(x1, y1, x2, y2, color=LIGHT, sw=1):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"/>'


def block(x, y, w, h, label, fill=LIGHT, size=13):
    return rect(x, y, w, h, fill, LINE) + text(x + w / 2, y + h / 2 + size * .34, label, size, MID, 600, "middle")


def button(x, y, w, h, label, solid=False):
    return rect(x, y, w, h, "#dedede" if solid else WHITE, INK, 1) + text(x + w / 2, y + h / 2 + 5, label, 14, INK, 700, "middle")


def frame(title, route, purpose, notes, content):
    a = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
         rect(0, 0, W, H, WHITE, WHITE, 0),
         text(56, 46, "AYAM GUNTING MALAYSIA  /  SPRINT 3  /  WIREFRAME", 14, MID, 700),
         text(56, 91, title, 29, INK, 700),
         text(56, 121, f"{route}   |   {purpose}", 15, MID),
         line(56, 143, 1744, 143, INK, 2),
         text(56, 169, "DESKTOP 1440 x 900   |   SKALA 86%", 12, MID, 700),
         f'<g transform="translate({SX} {SY}) scale({SCALE})">',
         rect(0, 0, 1440, 900, WHITE, INK, 2), content, "</g>",
         line(1304, 186, 1304, 960, INK, 1),
         text(1340, 210, "SPESIFIKASI LAYAR", 14, INK, 700)]
    y = 252
    for index, note in enumerate(notes, 1):
        heading, body = note
        a += [rect(1340, y - 22, 30, 30, WHITE, INK, 1, 15), text(1355, y - 2, index, 13, INK, 700, "middle"), text(1385, y, heading, 15, INK, 700)]
        for row, value in enumerate(body):
            a.append(text(1385, y + 24 + row * 19, value, 13, MID))
        y += 112 if len(body) < 4 else 132
    a += [line(56, 1010, 1744, 1010, INK, 1),
          text(56, 1042, "Monokrom menunjukkan struktur, hierarki, dan kontrol. Area media ditandai sebagai placeholder gambar.", 13, MID),
          text(56, 1071, "Wireframe untuk review implementasi, bukan pengesahan kebutuhan bisnis.", 13, MID, 700),
          text(1744, 1071, "KELOMPOK 9  |  31 OKT 2026", 13, MID, 700, "end"),
          "</svg>"]
    return "\n".join(a)


def brand_header(active="Menu", cart=False):
    a = [rect(0, 0, 1440, 78, "#eeeeee", INK), rect(58, 19, 42, 42, "#d9d9d9", INK),
         text(79, 46, "AG", 16, INK, 700, "middle"), text(116, 34, "AYAM GUNTING", 17, INK, 700),
         text(116, 56, "MALAYSIA  /  KEDAI", 11, MID, 700)]
    if cart:
        a += [text(1284, 47, "KERANJANG", 14, INK, 700, "end")]
    else:
        a += [text(1070, 47, "MENU", 14, INK, 700 if active == "Menu" else 400),
              text(1160, 47, "CARA PESAN", 14, MID), button(1260, 18, 126, 42, "Keranjang", True)]
    return "".join(a)


def home():
    s = brand_header()
    s += rect(0, 78, 662, 742, "#eeeeee", INK) + text(72, 300, "Ayam", 64, INK, 700) + text(72, 370, "gunting.", 64, INK, 700)
    s += text(72, 421, "Ayam goreng khas Malaysia.", 24, MID, 700)
    s += text(72, 468, "Pilih ayam gunting atau camilan lain, pesan lewat", 17, INK)
    s += text(72, 494, "katalog, lalu ambil langsung di kedai.", 17, INK)
    s += button(72, 548, 154, 54, "Pilih menu", True) + button(244, 548, 205, 54, "Lihat keranjang")
    s += text(72, 650, "Pesanan untuk diambil di kedai", 15, MID)
    s += block(662, 78, 778, 742, "FOTO HERO PRODUK", "#dedede", 18)
    s += rect(0, 820, 1440, 80, WHITE, WHITE, 0) + text(60, 875, "Menu favorit", 38, INK, 700)
    return frame("01  Beranda katalog", "/  +  #menu", "etalase utama dan akses katalog", [
        ("Navigasi", ["Menu mengarah ke #menu.", "Keranjang membuka ringkasan pesanan.", "Ruang admin ada di footer."]),
        ("Hero", ["Judul dan pesan utama.", "CTA menuju daftar menu.", "Foto produk memakai rasio lebar."]),
        ("Perilaku", ["Hero memenuhi lebar viewport.", "Menu berlanjut setelah hero.", "Layout ditumpuk pada ponsel."]),
    ], s)


def catalog():
    s = text(58, 96, "Menu favorit", 58, INK, 700) + text(940, 54, "Pilih camilan dan jumlahnya.", 17, MID)
    s += text(940, 78, "Kami siapkan untuk pengambilan di kedai.", 17, MID)
    s += rect(58, 129, 530, 48, WHITE, INK) + text(75, 159, "Cari nama menu", 16, MID)
    for x, label in zip((1080, 1172, 1260, 1350), ("Semua", "Favorit", "Camilan", "Pedas")):
        s += text(x, 158, label, 14, INK, 700 if label == "Semua" else 400)
    names = [("Ayam Gunting", "Rp 15.000"), ("Kentang Goreng", "Rp 10.000"), ("Chicken Ball", "Rp 12.000"), ("Fire Chicken Wings", "Rp 18.000")]
    for i, (name, price) in enumerate(names):
        x = 58 + i * 336
        s += rect(x, 202, 317, 420, WHITE, INK, 1) + block(x, 203, 315, 236, "FOTO PRODUK", "#e5e5e5")
        s += text(x + 18, 476, name, 17, INK, 700) + text(x + 18, 510, price, 15, INK, 700)
        s += text(x + 18, 546, "Ringkasan deskripsi produk", 14, MID) + button(x + 18, 570, 278, 38, "Lihat menu  >")
    s += text(58, 666, "Menampilkan produk aktif sesuai hasil pencarian dan kategori.", 14, MID)
    return frame("02  Katalog produk", "/#menu", "pencarian dan pemilihan menu", [
        ("Cari dan saring", ["Input pencarian di atas kartu.", "Kategori menyaring daftar produk.", "Hasil berubah sesuai kontrol."]),
        ("Kartu produk", ["Foto, nama, harga, deskripsi.", "Aksi membuka detail produk.", "Jumlah kolom menyesuaikan lebar."]),
        ("State", ["Katalog kosong memberi arahan.", "Foto hanya ilustrasi produk.", "Gambar memiliki teks alternatif."]),
    ], s)


def detail():
    s = brand_header(cart=True)
    s += block(0, 78, 792, 822, "FOTO PRODUK  /  1:1", "#e1e1e1", 19)
    s += text(872, 248, "<  Kembali ke menu", 15, INK, 700)
    s += text(872, 346, "FAVORIT", 15, MID, 700)
    s += text(872, 432, "Ayam Gunting", 58, INK, 700)
    s += text(872, 496, "Deskripsi singkat produk dan sajian.", 18, MID)
    s += text(872, 565, "Rp 15.000", 30, INK, 700)
    s += button(872, 615, 286, 54, "Tambah ke keranjang", True) + button(1174, 615, 190, 54, "Lihat menu lain")
    s += text(872, 713, "Foto menu merupakan ilustrasi sajian.", 14, MID)
    return frame("03  Detail produk", "/products/[id]", "informasi produk dan aksi keranjang", [
        ("Foto produk", ["Area media memenuhi sisi kiri.", "Rasio gambar mengikuti viewport.", "Teks produk tetap berdiri sendiri."]),
        ("Informasi", ["Kategori, nama, deskripsi, harga.", "Harga ditampilkan sebelum aksi."]),
        ("Aksi", ["Tambah item tanpa meninggalkan halaman.", "Navigasi kembali ke katalog tersedia."]),
    ], s)


def cart():
    s = brand_header(cart=True) + text(58, 170, "Keranjang", 48, INK, 700) + text(58, 205, "Periksa pilihan menu dan jumlahnya.", 16, MID)
    s += rect(58, 264, 808, 104, WHITE, LINE) + text(88, 313, "Ayam Gunting", 20, INK, 700) + text(88, 343, "Rp 15.000 per produk", 14, MID)
    s += rect(565, 292, 120, 42, WHITE, INK) + text(625, 319, "-      2      +", 15, INK, 700, "middle")
    s += text(744, 320, "Rp 30.000", 16, INK, 700) + text(844, 320, "X", 15, MID, 700)
    s += text(80, 424, ">  Tambah menu lain", 15, INK, 700)
    s += rect(924, 250, 458, 554, "#eeeeee", LINE) + text(960, 302, "Ringkasan", 30, INK, 700)
    s += text(960, 350, "Subtotal", 16, MID) + text(1345, 350, "Rp 30.000", 16, INK, 700, "end")
    s += line(960, 370, 1345, 370, LINE, 1) + text(960, 405, "Total dihitung kembali saat pesanan dikirim.", 14, MID)
    s += text(960, 465, "Pengambilan di kedai", 15, INK, 700) + text(960, 495, "Tunjukkan kode saat mengambil pesanan.", 14, MID)
    s += text(960, 555, "Nama pemesan", 14, INK, 700) + rect(960, 574, 385, 48, WHITE, INK) + text(977, 604, "Nama lengkap", 15, MID)
    s += button(960, 644, 385, 52, "Kirim pesanan", True) + text(960, 739, "Keranjang kosong: ajak kembali ke katalog.", 13, MID)
    return frame("04  Keranjang dan pesanan", "/cart", "tinjau item lalu kirim untuk ambil di kedai", [
        ("Item", ["Nama, harga dan jumlah.", "Jumlah dapat ditambah atau dikurangi.", "Item dapat dihapus."]),
        ("Ringkasan", ["Subtotal dari harga produk aktif.", "Server menghitung ulang total."]),
        ("Checkout", ["Nama pemesan wajib diisi.", "Tidak meminta alamat atau telepon.", "State kosong dan error perlu jelas."]),
    ], s)


def receipt():
    s = rect(0, 0, 1440, 900, "#f3f3f3", "#f3f3f3", 0)
    s += rect(292, 132, 856, 636, WHITE, LINE) + rect(688, 184, 64, 64, "#dedede", INK)
    s += text(720, 226, "OK", 20, INK, 700, "middle") + text(720, 308, "Terima kasih sudah memesan.", 42, INK, 700, "middle")
    s += text(720, 352, "Pesanan menunggu diproses. Tunjukkan kode saat mengambil.", 16, MID, 400, "middle")
    s += rect(352, 396, 736, 136, "#eeeeee", LINE) + text(380, 438, "Atas nama pemesan", 16, INK)
    s += text(380, 476, "2 x Ayam Gunting", 16, INK) + text(380, 512, "Total Rp 30.000", 16, INK, 700)
    s += rect(352, 550, 736, 96, "#202020", INK) + text(720, 586, "KODE PESANAN", 14, WHITE, 700, "middle")
    s += text(720, 620, "XXXXXXXX-XXXX-XXXX", 18, WHITE, 700, "middle") + button(548, 670, 344, 52, "Kembali ke katalog", True)
    return frame("05  Tanda terima pesanan", "/orders/received/[id]", "konfirmasi dan kode pengambilan", [
        ("Konfirmasi", ["Status pesanan ditampilkan.", "Nama dan ringkasan item ditampilkan."]),
        ("Kode", ["Kode membantu pencocokan pesanan.", "Nomor asli tidak dicantumkan wireframe."]),
        ("Akses", ["Aksi utama kembali ke katalog.", "Ringkasan tetap terbaca di ponsel."]),
    ], s)


def login():
    s = rect(0, 0, 720, 900, "#202020", "#202020", 0) + rect(720, 0, 720, 900, "#f3f3f3", "#f3f3f3", 0)
    s += rect(58, 35, 42, 42, WHITE, WHITE) + text(79, 63, "AG", 16, INK, 700, "middle")
    s += text(116, 53, "AYAM GUNTING", 17, WHITE, 700) + text(116, 75, "MALAYSIA / ADMIN", 11, WHITE, 700)
    s += text(58, 438, "Kelola", 88, WHITE, 700) + text(58, 536, "pesanan.", 88, WHITE, 700)
    s += text(58, 820, "Atur menu dan pantau pesanan untuk diambil.", 16, WHITE)
    s += text(840, 356, "Masuk ke dashboard", 30, INK, 700) + text(840, 389, "Gunakan akun admin toko.", 16, MID)
    s += text(840, 440, "Email admin", 14, INK, 700) + rect(840, 456, 492, 50, WHITE, LINE) + text(855, 488, "nama@contoh.id", 15, MID)
    s += text(840, 552, "Kata sandi", 14, INK, 700) + rect(840, 568, 492, 50, WHITE, LINE) + text(855, 600, "Masukkan kata sandi", 15, MID)
    s += button(840, 646, 492, 54, "Masuk ke dashboard", True) + text(840, 746, "<  Kembali ke katalog", 15, MID)
    return frame("06  Login admin", "/admin/login", "autentikasi pengelola", [
        ("Form", ["Email dan kata sandi.", "Label berada di luar input.", "Nilai tidak disimpan wireframe."]),
        ("Feedback", ["Kesalahan tampil dekat form.", "Pesan tidak mengungkap rahasia."]),
        ("Responsif", ["Panel menjadi satu kolom.", "Kembali ke katalog tetap tersedia."]),
    ], s)


def dashboard():
    s = rect(0, 0, 1440, 78, "#202020", "#202020") + rect(58, 18, 42, 42, "#dedede", WHITE)
    s += text(79, 45, "AG", 16, INK, 700, "middle") + text(116, 34, "AYAM GUNTING", 16, WHITE, 700)
    s += text(116, 56, "MALAYSIA / ADMIN", 11, WHITE, 700) + text(1285, 46, "Admin  |  Keluar", 14, WHITE, 700, "end")
    s += rect(0, 78, 250, 822, "#e8e8e8", LINE) + text(28, 120, "PENGELOLAAN TOKO", 13, INK, 700)
    s += text(42, 174, "Produk", 16, INK, 700) + text(42, 226, "Pesanan", 16, INK) + text(42, 278, "Lihat katalog", 15, MID)
    s += text(302, 145, "Dashboard", 34, INK, 700) + text(302, 176, "Kelola menu dan proses pesanan katalog.", 16, MID)
    for i, (label, value) in enumerate((("Produk aktif", "4"), ("Pesanan menunggu", "1"), ("Jumlah menu", "4"))):
        x = 302 + i * 350
        s += rect(x, 212, 322, 115, WHITE, LINE) + text(x + 24, 248, label, 14, MID) + text(x + 24, 300, value, 33, INK, 700)
    s += rect(302, 360, 1036, 278, WHITE, LINE) + text(332, 402, "Produk", 25, INK, 700) + button(1160, 376, 150, 42, "Tambah produk", True)
    s += rect(322, 428, 996, 38, "#eeeeee", LINE) + text(340, 453, "PRODUK", 13, INK, 700) + text(800, 453, "KATEGORI", 13, INK, 700)
    s += text(1010, 453, "HARGA", 13, INK, 700) + text(1120, 453, "STATUS", 13, INK, 700)
    for i, name in enumerate(("Ayam Gunting", "Kentang Goreng", "Chicken Ball", "Fire Chicken Wings")):
        y = 506 + i * 34
        s += text(340, y, name, 14, INK) + text(800, y, "Kategori", 14, MID) + text(1010, y, "Rp ...", 14, INK)
        s += text(1120, y, "Aktif", 14, INK, 700) + text(1240, y, "Ubah", 13, MID)
    s += rect(302, 664, 1036, 202, WHITE, LINE) + text(332, 706, "Antrean pesanan", 25, INK, 700)
    s += text(332, 750, "Nama pemesan  |  Waktu WIB  |  Kode pesanan", 15, INK, 700)
    s += text(332, 782, "Item dan kuantitas", 14, MID) + text(1238, 782, "Total", 14, INK, 700, "end")
    s += button(332, 806, 168, 40, "Tandai selesai") + button(516, 806, 120, 40, "Batalkan")
    return frame("07  Dashboard admin", "/admin", "kelola menu dan antrean transaksi", [
        ("Ringkasan", ["Produk aktif, pesanan menunggu, total menu.", "Angka bersumber dari data aplikasi."]),
        ("Produk", ["Tambah, ubah, aktif/nonaktif.", "Form produk berada sesudah tabel."]),
        ("Antrean", ["Item, total dan waktu WIB.", "Pesanan pending dapat diselesaikan/batal."]),
        ("Responsif", ["Navigasi menyempit pada ponsel.", "Tabel dan kartu menyesuaikan lebar."]),
    ], s)


SCREENS = [
    ("01-beranda-katalog", home),
    ("02-katalog-produk", catalog),
    ("03-detail-produk", detail),
    ("04-keranjang-pesanan", cart),
    ("05-tanda-terima", receipt),
    ("06-login-admin", login),
    ("07-dashboard-admin", dashboard),
]

for filename, builder in SCREENS:
    (OUT / f"{filename}.svg").write_text(builder(), encoding="utf-8")

print(f"Generated {len(SCREENS)} grayscale wireframe SVGs in {OUT}")
