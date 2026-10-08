# 📖 Knowledge Base — Portofolio Website

> Dokumentasi lengkap project **Portofolio Website** milik **William Ivan Saputra** (a.k.a. *William Syz*).
> Dibuat sebagai referensi cepat untuk memahami struktur, teknologi, dan cara kerja seluruh codebase.

---

## 1. 📌 Ringkasan Project

| Item | Keterangan |
|------|------------|
| **Nama** | Portofolio Website |
| **Pemilik** | William Ivan Saputra (William Syz) |
| **Profesi** | Fullstack Developer |
| **Jenis** | Website portofolio personal — *single page* statis |
| **Repo** | https://github.com/willysinss/Portofolio-Website.git |
| **Branch** | `main` |
| **Hosting** | GitHub Pages (pernah pakai custom domain via CNAME, lalu dihapus) |
| **Build tool** | ❌ Tidak ada — murni HTML/CSS/JS, langsung jalan di browser |

Project ini adalah website portofolio satu halaman (*one-page*) yang menampilkan profil, keahlian, layanan, dan karya/proyek dari William. Tidak menggunakan framework JavaScript maupun build system — semua ditulis dengan **vanilla HTML, CSS, dan JavaScript**.

---

## 2. 🛠️ Tech Stack

| Teknologi | Penggunaan | Sumber |
|-----------|-----------|--------|
| **HTML5** | Struktur halaman (`index.html`) | Lokal |
| **CSS3** | Styling + responsif (`styles.css`) | Lokal |
| **Vanilla JavaScript** | Interaktivitas (`main.js`) | Lokal |
| **Remix Icon 4.2.0** | Ikon (menu, sosial, layanan) | CDN jsdelivr |
| **Google Fonts — Poppins** | Tipografi utama | CDN Google Fonts |
| **EmailJS v4** | Pengiriman form kontak via email | CDN jsdelivr |

> ⚠️ Semua library eksternal dimuat via CDN (tidak ada `package.json` / `node_modules`). Tidak ada dependency yang perlu di-install.

---

## 3. 📂 Struktur Folder

```
Portofolio-Website/
├── index.html                  # Halaman utama (seluruh markup)
├── knowledge.md                # File dokumentasi ini
└── assets/
    ├── css/
    │   └── styles.css          # Seluruh styling (≈843 baris)
    ├── js/
    │   └── main.js             # Logika interaktivitas (60 baris)
    └── image/
        ├── favicon.png         # Favicon utama
        ├── favicon-32x32.png   # Favicon 32x32
        ├── william.png         # Foto profil (dipakai di SVG blob)
        ├── william.jpg         # Foto profil (cadangan)
        ├── william123.png      # Foto profil (cadangan)
        ├── blob.svg            # Bentuk blob (referensi)
        ├── blob-border.svg     # Bentuk blob berbingkai (referensi)
        ├── Portofolio 1.png    # Screenshot: Employee Performance Web
        ├── Portofolio 2.png    # Screenshot: Grocery App
        ├── Portofolio 3.png    # Screenshot: Simple CRUD Website
        ├── portofolio 4.png    # Screenshot: Student CRUD Website
        ├── portofolio 5.png    # Screenshot: Promotion Poster
        ├── portofolio 6.png    # Screenshot: Campaign Poster
        ├── portofolio 7.png    # Screenshot: Educational Poster
        └── portofolio 8.png    # Screenshot: Bookshelf App
```

> ⚠️ **Inconsistensi penamaan file gambar:** ada campuran huruf besar/kecil (`Portofolio 1.png` vs `portofolio 4.png`). Berisiko error pada hosting *case-sensitive* (mis. Linux/GitHub Pages). Sebaiknya diseragamkan ke lowercase dengan hyphen, mis. `portofolio-1.png`.

---

## 4. 🧩 Bagian Halaman (Sections)

Halaman terdiri dari satu `index.html` dengan beberapa `<section>` yang dinavigasi via anchor link (`#home`, `#about`, dst.).

### 4.1 Header & Navbar
- Logo: **William `<span>Syz</span>`** (kata "Syz" berwarna primer)
- Menu: Home, About, Services, Projects, Contact
- **Mobile:** tombol toggle (☰) membuka menu geser dari kanan + tombol close (✕)
- **Efek blur header** saat scroll > 50px (`blur-header` class)

### 4.2 Home (`#home`)
- Salam: "Hello, I'm" → Nama besar **William Ivan Saputra** → **Fullstack Developer**
- Deskripsi singkat peran sebagai fullstack web developer
- Tombol CTA: "Let's Talk" → `#contact`
- **Social links:** GitHub, LinkedIn, WhatsApp (ikon heksagonal via `clip-path`)
- **Foto profil** dalam bentuk SVG blob berbingkai (mask + pattern)

### 4.3 About (`#about`)
- Subtitle: "Hello, Nice To Meet You" / Judul: "Get To Know Me"
- Deskripsi peran & filosofi kerja
- Tombol: "Contact Me" → `#contact`
- Foto profil kedua dalam SVG blob dengan border stroke

### 4.4 Skills (tanpa `id` — tidak ada link nav langsung)
- Subtitle: "Favorite Skills" / Judul: "My Skills"
- **13 keahlian** dalam 2 kolom ordered list bernomor `01–13`:
  1. HTML & CSS · 2. JavaScript · 3. Bootstrap · 4. Node.Js · 5. PHP · 6. Laravel · 7. Vue.Js · 8. Nuxt.Js · 9. Dart · 10. Flutter · 11. Git & Github · 12. Figma · 13. Canva
- Tombol: "See Projects" → `#projects`

### 4.5 Services (`#services`)
Judul: "What Can I Do For You?" — **4 kartu layanan:**

| # | Layanan | Ikon | Deskripsi singkat |
|---|---------|------|-------------------|
| 1 | **Web Developer** | `ri-code-s-slash-line` | Frontend (HTML, CSS, JS, VueJs, NuxtJs) + Backend (Node.js, PHP, Laravel) |
| 2 | **Mobile Developer** | `ri-smartphone-line` | Cross-platform Flutter & Dart (Android + iOS) |
| 3 | **UI/UX Designer** | `ri-pen-nib-line` | Figma, prototyping, user testing |
| 4 | **Graphic Designer** | `ri-image-line` | PowerPoint, poster, banner via Canva |

### 4.6 Projects (`#projects`)
Judul: "Recent Projects" — **8 kartu proyek** dengan efek modal geser ke atas saat hover:

| # | Judul | Kategori | Link GitHub |
|---|-------|----------|-------------|
| 1 | Employee Performance Web | Web | willysinss/simple_CRUD |
| 2 | Grocery App | App | willysinss/grocery_app |
| 3 | Simple CRUD Website | Web | willysinss/Mahasiswa-CRUD |
| 4 | Student CRUD Website | Web | willysinss/Mahasiswa-Simple-CRUD |
| 5 | Promotion Poster | Poster | — (tidak ada link) |
| 6 | Campaign Poster | Poster | — (tidak ada link) |
| 7 | Educational Poster | Poster | — (tidak ada link) |
| 8 | Bookshelf App | Web | willysinss/Bookshelf |

### 4.7 Contact (`#contact`)
- Form: Nama, Email, Pesan → dikirim via **EmailJS** (lihat §6)
- Pesan status sukses/gagal muncul 5 detik lalu hilang

### 4.8 Footer
- Logo: **William Syz** + "Fullstack Developer"
- Social: Instagram, WhatsApp · Copyright: ©2024, William Ivan Saputra

---

## 5. 🎨 Sistem Desain (CSS)

### 5.1 CSS Variables (`:root`)
Didefinisikan di awal `styles.css` untuk konsistensi tema.

**Warna:**

| Variable | Nilai | Kegunaan |
|----------|-------|----------|
| `--first-color` | `#0097B2` (teal/cyan) | Warna primer (aksen, tombol, link) |
| `--first-color-alt` | `#1ba5bd` | Varian primer (background social) |
| `--title-color` | putih | Judul |
| `--text-color` | abu terang | Teks body |
| `--body-color` | `rgb(63,62,62)` abu gelap | Background body |
| `--container-color` | `rgb(44,44,44)` abu lebih gelap | Background card/header |
| `--hue` | `162` | Basis hue untuk gradient modal |

> 💡 Ada blok warna lama (HSL-based) yang di-*comment* — tema sebelumnya sebelum diganti ke palet teal/abu saat ini.

**Tipografi:** Font `Poppins` (weight 400/500/600), ukuran responsif naik skala pada `min-width: 1152px`.
**Z-index:** `--z-tooltip: 10`, `--z-fixed: 100`.

### 5.2 Breakpoint Responsif

| Breakpoint | Target | Perubahan utama |
|------------|--------|-----------------|
| `max-width: 380px` | Ponsel kecil | Margin container 1rem, skills 1 kolom |
| `max-width: 576px` | Ponsel | Semua container 360px, center |
| `max-width: 768px` | Tablet | Nav menu 55% lebar, blob 400px, layout 1 kolom |
| `max-width: 1023px` | Tablet besar | Nav menu geser dari kanan (mobile) |
| `min-width: 1024px` | Desktop | Nav horizontal, toggle/close disembunyikan |
| `min-width: 1152px` | Desktop besar | Layout penuh multi-kolom, font besar |

### 5.3 Komponen & Efek Notable
- **Blob SVG** — foto profil dipotong dalam bentuk heksagon melengkung via `<mask>` + `<pattern>` (`home__blob`, `about__blob`)
- **Hexagon social icon** — `clip-path: polygon(...)` membentuk segi enam
- **Backdrop blur** — `backdrop-filter: blur()` pada header & menu mobile
- **Project modal** — overlay gradient geser dari `bottom: -100%` ke `bottom: 0` saat hover
- **Custom scrollbar** — `::-webkit-scrollbar` bergaya abu
- **Smooth scroll** — `html { scroll-behavior: smooth }`
- **Box-shadow glow** — tombol & social berpendar cyan saat hover (`#20c0dc`)

---

## 6. ⚙️ Logika JavaScript (`main.js`)

File JS pendek (60 baris) menangani 3 hal:

### 6.1 Mobile Menu Toggle
```js
navToggle  → add 'show-menu'    (buka)
navClose   → remove 'show-menu'  (tutup)
nav__link  → remove 'show-menu'  (tutup saat klik link)
```

### 6.2 Blur Header on Scroll
```js
window scroll → if scrollY >= 50 → add 'blur-header' else remove
```

### 6.3 EmailJS Contact Form
```js
emailjs.sendForm(
  'service_d3psfpo',      // Service ID
  'template_8gaj7n6',     // Template ID
  '#contact-form',        // Form selector
  'wgaAlEmLwQYo9EXDW'     // Public Key
)
```
- Sukses → tampilkan "Message Sent Successfully" (5 detik) + reset form
- Gagal → tampilkan "Message Not Sent (service error)"

> 🔐 **Catatan keamanan:** Public key EmailJS memang dirancang untuk diekspos di client-side (bukan secret). Namun Service ID & Template ID juga terlihat publik — siapa saja bisa mengirim email via form ini. Pertimbangkan menambah rate-limiting di sisi EmailJS.

---

## 7. 🔗 Git History

```
ee1b928 (HEAD → main) portofolio update
119dba9 fixed
1064188 Merge branch 'main' of github.com/willysinss/Portofolio-Website
9b91cbb fixed
6413bb4 Delete CNAME
d0c4f92 Create CNAME
e4b6681 portofolio website-first commit
```
- Total **7 commit** pada branch `main`
- Pernah aktif custom domain (CNAME), kemudian dihapus

---

## 8. 🔗 Link & Kontak Penting

| Platform | URL / Handle |
|----------|--------------|
| GitHub | https://github.com/willysinss |
| LinkedIn | william-ivan-saputra-979124246 |
| WhatsApp | https://wa.me/6281294166967 |
| Instagram | https://www.instagram.com/william.syz |

**Repo proyek yang ditampilkan:** `simple_CRUD`, `grocery_app`, `Mahasiswa-CRUD`, `Mahasiswa-Simple-CRUD`, `Bookshelf` (semua di github.com/willysinss).

---

## 9. ▶️ Cara Menjalankan

Karena project statis tanpa build step:

**Opsi 1 — Buka langsung:** double-click `index.html` di browser.
**Opsi 2 — Live Server (VS Code):** install ekstensi *Live Server* → klik kanan `index.html` → "Open with Live Server".
**Opsi 3 — Python HTTP server:**
```bash
python -m http.server 8000   # buka http://localhost:8000
```

> ⚠️ Membuka via `file://` langsung bisa membuat beberapa fitur (CDN, EmailJS) terbatas; lebih baik pakai local server.

---

## 10. 🧭 Peta Cepat — Mau Edit Apa?

| Saya ingin mengubah… | Buka file… | Cari… |
|----------------------|-----------|-------|
| Nama / teks profil | `index.html` | `home__title`, `home__education` |
| Foto profil | `index.html` | `href="./assets/image/william.png"` (home & about blob) |
| Daftar skills | `index.html` | `<ol class="skills__group">` |
| Daftar layanan | `index.html` | `<article class="services__card">` |
| Daftar proyek | `index.html` | `<article class="projects__card">` |
| Social links | `index.html` | `home__social-link` & `footer__social-link` |
| Warna tema | `styles.css` | `:root { --first-color ... }` |
| EmailJS config | `main.js` | `emailjs.sendForm(...)` |
| Responsivitas | `styles.css` | `@media screen and ...` |

---

## 11. ⚠️ Catatan & Saran Perbaikan

1. **Penamaan gambar tidak konsisten** — `Portofolio 1.png` vs `portofolio 4.png`. Pada server *case-sensitive* (GitHub Pages/Linux) berisiko 404. Seragamkan ke lowercase.
2. **Spasi dalam nama file** (`Portofolio 1.png`) — memerlukan encoding `%20` di URL. Lebih aman pakai hyphen: `portofolio-1.png`.
3. **Skills section tidak punya `id`** — tidak bisa di-link langsung dari nav. Tambahkan `id="skills"` jika ingin ditambahkan ke menu.
4. **Tiga kartu proyek poster** (5, 6, 7) tidak punya link GitHub — hanya tampilan visual.
5. **`--hue: 162`** masih dipakai di gradient modal proyek meski palet utama sudah bukan HSL — konsistensi bisa diperbaiki.
6. **Tidak ada `meta description` / Open Graph / SEO tags** — tambahkan untuk preview saat di-share di sosial media.
7. **Tidak ada `package.json` / `.gitignore`** — tidak masalah untuk project statis, tapi `.gitignore` berguna jika nanti ada build artifacts.
8. **EmailJS credentials terlihat publik** — wajar untuk public key, tapi aktifkan rate-limit di dashboard EmailJS untuk mencegah spam.

---

*Dokumen ini dibuat otomatis dari analisis codebase pada 10/7/2026. Perbarui bila ada perubahan struktur project.*



