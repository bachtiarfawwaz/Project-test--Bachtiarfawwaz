# 🚀 Suitmedia Ideas Platform - Modern Article Listing 
*Platform modern untuk menampilkan daftar ide dan artikel dengan fitur canggih*

## ✨ Fitur Unggulan

### 🎛️ Header Canggih
- **Sticky Navigation** - Tetap terlihat saat scrolling
- **Smart Visibility** - Menyembunyikan diri saat scroll ke bawah, muncul saat scroll up
- **Glass Effect** - Tampilan semi-transparan yang elegan
- **Active Menu Indicator** - Navigasi yang intuitif

### 🌌 Banner Parallax
- **Dynamic Background** - Gambar yang mudah dikustomisasi
- **Diagonal Cut Design** - Potongan miring yang stylish
- **3D Parallax Effect** - Animasi depth yang memukau
- **Responsive Typography** - Teks yang selalu tampil sempurna

### 📚 Article Listing
| Fitur | Deskripsi |
|-------|-----------|
| **Smart Sorting** | Urutkan berdasarkan Terbaru/Terlama |
| **Flexible Pagination** | Navigasi halaman yang smooth |
| **View Customization** | Pilih tampilan 10/20/50 item per halaman |
| **State Persistence** | Setting tetap tersimpan setelah refresh |
| **Optimized Thumbnails** | Rasio gambar konsisten & lazy loading |
| **Clean Truncation** | Judul dipotong rapi dengan ellipsis |

### ⚡ API Integration
```javascript
{
  endpoint: "https://suitmedia-backend.suitdev.com/api/ideas",
  params: {
    "page[number]": 1,
    "page[size]": 10,
    "append[]": ["small_image", "medium_image"],
    "sort": "published_at" // or "-published_at"
  }
}
```

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=react&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-FF6B6B?logo=react&logoColor=white)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/suitmedia-ideas.git
   cd suitmedia-ideas
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**  
   Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
suitmedia-ideas/
├── app/
│   ├── api/               # API routes
│   │   └── ideas/
│   │       └── route.ts   # Proxy API handler
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading skeleton
│   └── page.tsx           # Main page
└── components/
    ├── banner.tsx         # Parallax banner
    ├── header.tsx         # Smart header
    ├── pagination.tsx     # Interactive pagination
    └── post-grid.tsx      # Article listing grid
```

## 📌 Live Demo

🔗 [Demo Link](https://suitmedia-ideas.vercel.app)  
📂 [Source Code](https://github.com/bachtiarfawwaz/Project-test--Bachtiarfawwaz.git)

---

<div align="center">
  Made with ❤️ by Bachtiarfawwaz | MIT License
</div>
