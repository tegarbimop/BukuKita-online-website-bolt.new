# BukuKita-online-website-bolt.new

prompt :
"Buatkan sebuah website toko buku online sederhana menggunakan bahasa Indonesia.

Untuk tahap pertama, buat hanya **1 halaman yaitu Homepage**. Website ini nantinya akan digunakan untuk menjual buku secara online, di mana pengguna bisa memilih buku, melihat detail singkat, memasukkan ke keranjang, melakukan pembayaran/transfer, kemudian buku akan dikirim ke alamat rumah pengguna.

### Konsep website

Nama toko: **BukuKita**

Target pengguna adalah orang yang ingin membeli buku secara online dengan proses yang sederhana dan mudah dipahami.

### Gaya desain

* Desain modern, bersih, dan sederhana.
* Dominan warna putih dengan kombinasi warna biru tua atau hijau sebagai warna utama.
* Gunakan card dengan sudut sedikit rounded.
* Tampilan profesional tetapi tetap sederhana.
* Responsive untuk desktop dan mobile.
* Jangan terlalu banyak animasi.
* Gunakan font yang mudah dibaca.
* Gunakan gambar cover buku sebagai visual utama.

### Struktur Homepage

1. **Navbar**

   * Logo/nama toko: "BukuKita"
   * Menu:

     * Beranda
     * Semua Buku
     * Kategori
   * Icon/search bar untuk mencari buku.
   * Icon keranjang di sebelah kanan.
   * Tombol "Masuk"

2. **Hero Section**
   Buat banner utama dengan:

   * Judul: "Temukan Buku Favoritmu"
   * Deskripsi: "Beli buku dengan mudah, bayar secara online, dan buku akan dikirim langsung ke rumahmu."
   * Tombol utama: "Belanja Sekarang"
   * Tambahkan ilustrasi atau gambar beberapa buku di sisi kanan.

3. **Kategori Buku**
   Tampilkan beberapa kategori dalam bentuk card sederhana:

   * Novel
   * Pendidikan
   * Teknologi
   * Bisnis
   * Agama
   * Pengembangan Diri

4. **Buku Populer**
   Tampilkan minimal 6 produk buku dalam bentuk grid/card.

   Setiap card buku memiliki:

   * Cover buku
   * Judul buku
   * Nama penulis
   * Harga
   * Rating
   * Tombol "Tambah ke Keranjang"
   * Tombol/icon untuk melihat detail

   Gunakan contoh data buku fiktif, misalnya:

   * "Laskar Pelangi" — Andrea Hirata — Rp95.000
   * "Bumi" — Tere Liye — Rp89.000
   * "Atomic Habits" — James Clear — Rp120.000
   * "Filosofi Teras" — Henry Manampiring — Rp98.000
   * "Belajar JavaScript" — Andi Pratama — Rp85.000
   * "The Psychology of Money" — Morgan Housel — Rp110.000

5. **Keunggulan Toko**
   Buat section sederhana dengan 3 atau 4 keunggulan:

   * 🚚 Pengiriman ke seluruh Indonesia
   * 🔒 Pembayaran aman
   * 📚 Buku berkualitas
   * ⚡ Proses pesanan cepat

6. **Cara Membeli**
   Buat section sederhana berisi 3 langkah:

   1. Pilih buku
   2. Lakukan pembayaran/transfer
   3. Buku dikirim ke alamat rumah

7. **Footer**
   Tampilkan:

   * Logo "BukuKita"
   * Deskripsi singkat toko
   * Link navigasi
   * Kontak
   * Copyright "© 2026 BukuKita"

### Interaksi sederhana

Untuk saat ini belum perlu membuat sistem backend atau database.

Buat beberapa interaksi frontend sederhana:

* Search buku dapat memfilter daftar buku.
* Tombol "Tambah ke Keranjang" dapat menambahkan buku ke keranjang.
* Jumlah item keranjang berubah secara realtime.
* Icon keranjang dapat membuka panel/dropdown sederhana yang menampilkan buku yang dipilih.
* Tombol "Belanja Sekarang" mengarah/scroll ke bagian buku populer.
* Tombol kategori dapat memfilter buku berdasarkan kategori.

### Teknologi

Gunakan:

* React
* TypeScript
* Tailwind CSS
* Lucide React untuk icon
* Gunakan komponen yang rapi dan reusable.

Pastikan kode bersih, struktur komponen jelas, dan mudah dikembangkan ke halaman berikutnya seperti:

* Detail buku
* Keranjang
* Checkout
* Pembayaran/transfer
* Konfirmasi pesanan
* Status pengiriman

Untuk sekarang **JANGAN membuat halaman tambahan**. Fokus hanya membuat Homepage yang terlihat seperti website toko buku online sungguhan dan sudah memiliki interaksi frontend dasar."

kedua :
"Buatkan halaman **Product Detail / Detail Buku** untuk website toko buku online **BukuKita**.

Halaman ini harus konsisten dengan desain Homepage BukuKita yang sudah dibuat sebelumnya. Gunakan desain yang modern, bersih, sederhana, profesional, dan responsive untuk desktop maupun mobile.

### Tujuan halaman

Halaman ini digunakan ketika pengguna mengklik salah satu buku dari Homepage. Pengguna dapat melihat informasi lengkap mengenai buku, memilih jumlah, menambahkan buku ke keranjang, dan membeli buku.

### Navbar

Gunakan navbar yang sama seperti Homepage:

* Logo "BukuKita"
* Beranda
* Semua Buku
* Kategori
* Search bar
* Icon keranjang
* Tombol "Masuk"

Pastikan navbar tetap konsisten dengan halaman Homepage.

### Breadcrumb

Di bawah navbar, tampilkan breadcrumb sederhana:

Beranda > Semua Buku > Novel > Laskar Pelangi

Breadcrumb harus bisa diklik untuk navigasi.

### Product Detail

Buat layout utama dua kolom:

**Kolom kiri:**

* Cover buku berukuran besar.
* Tambahkan thumbnail kecil jika diperlukan.
* Gunakan gambar cover buku yang menarik dan realistis.
* Berikan efek hover sederhana pada gambar.

**Kolom kanan:**
Tampilkan informasi:

* Judul: "Laskar Pelangi"
* Penulis: "Andrea Hirata"
* Rating: ⭐ 4.8
* Jumlah ulasan: "1.245 ulasan"
* Harga: "Rp95.000"
* Status: "Stok tersedia"
* Deskripsi singkat buku.

Tambahkan informasi:

* Penerbit: Bentang Pustaka
* Tahun terbit: 2005
* Jumlah halaman: 529 halaman
* Bahasa: Indonesia
* ISBN: 9789793062792

### Pilihan jumlah

Buat kontrol jumlah:

* Tombol "-"
* Jumlah item
* Tombol "+"

Jumlah tidak boleh kurang dari 1.

### Tombol pembelian

Buat dua tombol utama:

1. **Tambah ke Keranjang**
2. **Beli Sekarang**

"TAMBAH KE KERANJANG":

* Menambahkan produk ke keranjang.
* Tampilkan notifikasi kecil seperti "Buku berhasil ditambahkan ke keranjang".
* Update jumlah item pada icon keranjang.

"BELI SEKARANG":

* Langsung mengarahkan pengguna ke halaman checkout.
* Untuk sementara gunakan navigasi frontend saja karena backend belum dibuat.

### Informasi pengiriman

Tambahkan card kecil di bawah tombol pembelian:

🚚 **Pengiriman**
"Pesanan dikirim ke alamat rumahmu."

📦 **Estimasi**
"2–5 hari kerja"

🔒 **Pembayaran**
"Pembayaran aman dan mudah"

### Deskripsi Buku

Buat section di bawah product detail:

## Deskripsi Buku

Tampilkan deskripsi yang cukup panjang mengenai buku Laskar Pelangi.

Tambahkan tombol "Lihat Selengkapnya" jika teks terlalu panjang.

### Spesifikasi Buku

Buat tabel atau card sederhana:

| Informasi      | Detail          |
| -------------- | --------------- |
| Penulis        | Andrea Hirata   |
| Penerbit       | Bentang Pustaka |
| Tahun Terbit   | 2005            |
| Jumlah Halaman | 529             |
| Bahasa         | Indonesia       |
| ISBN           | 9789793062792   |
| Kategori       | Novel           |

### Rating dan Ulasan

Buat section:

**Rating & Ulasan**

Tampilkan:

* Rating keseluruhan 4.8/5
* Jumlah ulasan
* Distribusi rating 5 sampai 1 bintang menggunakan progress bar sederhana.

Kemudian tampilkan beberapa contoh ulasan:

* Nama pengguna
* Rating bintang
* Tanggal
* Isi ulasan

Contoh:
"★★★★★
Bukunya bagus dan pengirimannya cepat. Kondisi buku juga sangat baik."

### Rekomendasi Buku

Di bagian paling bawah buat section:

**Kamu Mungkin Juga Suka**

Tampilkan 4 card buku lainnya dengan:

* Cover
* Judul
* Penulis
* Harga
* Rating
* Tombol "Lihat Buku"

Gunakan contoh:

* Bumi — Tere Liye
* Filosofi Teras — Henry Manampiring
* Atomic Habits — James Clear
* The Psychology of Money — Morgan Housel

### Footer

Gunakan footer yang sama dengan Homepage BukuKita.

### Interaksi

Implementasikan frontend interaction berikut:

* Quantity +/-
* Tambah ke keranjang
* Beli sekarang
* Toast notification setelah produk ditambahkan
* Keranjang otomatis memperbarui jumlah item
* Breadcrumb dapat digunakan untuk navigasi
* Card rekomendasi dapat diklik
* Responsive di mobile

### Teknologi

Gunakan:

* React
* TypeScript
* Tailwind CSS
* Lucide React
* Komponen reusable.

### Penting

Jangan membuat desain yang terlalu rumit. Prioritaskan:

1. Informasi buku mudah dibaca.
2. Harga dan tombol pembelian terlihat jelas.
3. User mudah menambahkan buku ke keranjang.
4. Tampilan konsisten dengan Homepage BukuKita.
5. Responsive.
6. Kode mudah dikembangkan ke halaman Checkout dan Pembayaran.

Untuk tahap ini **belum perlu backend, database, login sungguhan, payment gateway, atau API**. Gunakan dummy data dan state frontend terlebih dahulu."


[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-ekevol46)
