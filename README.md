# Insimbi Ilola Insimbi - Landing Page

A premium React landing page for Insimbi Ilola Insimbi, a leadership and business development brand.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Helmet (SEO)
- React Icons
- React Scroll

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
insimbi-ilola-insimbi/
├── public/
│   └── assets/
│       ├── video/
│       │   └── hero.mp4       ← Add your video here
│       └── images/
│           └── gallery/
│               ├── gallery-1.jpg
│               ├── gallery-2.jpg
│               ├── gallery-3.jpg
│               ├── gallery-4.jpg
│               ├── gallery-5.jpg
│               ├── gallery-6.jpg
│               └── gallery-7.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── IronSharpensIron.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── BlogPreview.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Adding Your Assets

### 1. Hero Video

Place your video file at:
```
public/assets/video/hero.mp4
```

Supported format: MP4 (H.264)

### 2. Gallery Images

Place your 7 images at:
```
public/assets/images/gallery/gallery-1.jpg
public/assets/images/gallery/gallery-2.jpg
public/assets/images/gallery/gallery-3.jpg
public/assets/images/gallery/gallery-4.jpg
public/assets/images/gallery/gallery-5.jpg
public/assets/images/gallery/gallery-6.jpg
public/assets/images/gallery/gallery-7.jpg
```

Recommended size: 1920x1080 or similar aspect ratio

## Brand Colors

- Primary: `#132339` (Deep Navy)
- Secondary: `#C69760` (Warm Gold/Bronze)
- Accent: `#F5F6F0` (Soft Off-white)

## Typography

- Headings: Outfit (Sans-serif)
- Body: Merriweather (Serif)

## Sections

1. **Hero** - Video background with animated slogan
2. **About Us** - Mission and stats
3. **Services** - Service cards
4. **Iron Sharpens Iron** - Flagship event
5. **Portfolio** - Past events
6. **Gallery** - Images in continuous motion
7. **Contact** - Form and contact info
8. **Insights** - Blog preview
9. **Footer** - Social links and navigation

## License

© 2024 Insimbi Ilola Insimbi. All rights reserved.