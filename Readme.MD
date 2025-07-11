Proyek ini adalah implementasi halaman daftar ide/artikel dengan fitur-fitur modern seperti header adaptif, banner parallax, fungsionalitas sorting dan pagination yang persisten, serta integrasi API.

## Fitur Utama

Proyek ini mencakup fitur-fitur berikut sesuai dengan spesifikasi:

### 1. Header

- **Fixed Position**: Header tetap di bagian atas layar.
- **Adaptive Visibility**: Header akan menghilang saat pengguna scroll ke bawah dan muncul kembali saat scroll ke atas.
- **Transparent Background**: Header memiliki sedikit transparansi saat di-scroll untuk efek visual yang lebih baik.
- **Active State Menu**: Menu navigasi akan menunjukkan halaman yang sedang aktif.


### 2. Banner

- **Customizable Image**: Banner menggunakan gambar latar belakang yang dapat diperbarui dengan mudah.
- **Diagonal Bottom Edge**: Bagian bawah banner memiliki potongan miring yang elegan.
- **Parallax Effect**: Terdapat efek parallax antara gambar latar belakang dan teks pada banner saat di-scroll, menciptakan kedalaman visual.


### 3. List Post

- **Sorting Functionality**: Pengguna dapat mengurutkan daftar post berdasarkan "Terbaru" atau "Terlama".
- **Pagination**: Fungsi pagination memungkinkan navigasi antar halaman.
- **Items Per Page**: Pilihan jumlah item per halaman (10, 20, 50) tersedia.
- **State Persistence**: Pengaturan sort, show-per-page, dan halaman yang dikunjungi akan tetap tersimpan meskipun halaman di-refresh.
- **Consistent Thumbnail Ratio**: Rasio gambar thumbnail pada setiap kartu post konsisten.
- **Lazy Loading Images**: Gambar-gambar post dimuat secara lazy untuk performa yang lebih baik.
- **Title Truncation**: Judul post dibatasi maksimal 3 baris dengan ellipsis jika melebihi batas.


### 4. API Integration

- **Proxy API**: Pengaturan proxy telah dilakukan untuk mengakses API eksternal.
- **API Endpoint**: Menggunakan API dari `https://suitmedia-backend.suitdev.com/api/ideas`.
- **Parameters**: Mendukung parameter `page[number]`, `page[size]`, `append[]` (`small_image`, `medium_image`), dan `sort` (`published_at` atau `-published_at`).


## Teknologi yang Digunakan

- **Next.js**: Framework React untuk aplikasi web full-stack.
- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Framework CSS untuk styling yang cepat dan responsif.
- **shadcn/ui**: Komponen UI yang dapat diakses dan dapat disesuaikan.
- **Lucide React**: Koleksi ikon.


## Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone Repository**:
```bash
git clone [URL_REPOSITORY_ANDA]
cd halaman-list-parallax
```
2. **Install Dependencies**:
```bash
npm install

# atau

yarn install
```


3. **Run Development Server**:
```bash
npm run dev

# atau

yarn dev
```


4. **Akses Aplikasi**:
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.


## Struktur Proyek

```
.
├── app/
│   ├── api/
│   │   └── ideas/
│   │       └── route.ts  # API Proxy untuk fetching data
│   ├── globals.css       # Global CSS (Tailwind CSS)
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Loading fallback
│   └── page.tsx          # Halaman utama (IdeasPage)
└── components/
├── banner.tsx        # Komponen Banner dengan efek parallax
├── header.tsx        # Komponen Header dengan scroll behavior
├── pagination.tsx    # Komponen Pagination
└── post-grid.tsx     # Komponen Grid untuk menampilkan post
```

## Deployment

Proyek ini dapat di-deploy ke platform cloud seperti Vercel. Pastikan Anda telah menginstal Vercel CLI dan terhubung dengan akun Vercel Anda.

1. **Deploy ke Vercel**:
```bash
vercel deploy
```


## URL Repository dan Deployment

- **URL Repository**: [URL_REPOSITORY_ANDA]
- **URL Deployment**: [URL_DEPLOYMENT_ANDA]


</md>**Catatan:**

- Anda perlu mengganti `[URL_REPOSITORY_ANDA]` dan `[URL_DEPLOYMENT_ANDA]` dengan link repository GitLab dan link deployment Anda yang sebenarnya.
- Untuk menginstal kode ini, Anda bisa menggunakan mekanisme instalasi bawaan v0 dengan mengklik tombol "Download Code" di tampilan Block.