# Lit Creative Designs — Portfolio Website

Premium portfolio website for **Lit Creative Designs**, a creative agency based in Abuja, Nigeria. Founded by Olayinka Samuel Ojo.

**Live:** https://litcreativedesigns.com

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| GSAP + ScrollTrigger | Scroll-driven effects |
| Lenis | Smooth scroll |
| next-themes | Dark/Light mode |
| Lucide React | Icons |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
lit-creative-designs/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, SEO, providers)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles, CSS variables
│   ├── about/page.tsx          # About / Founder page
│   ├── contact/page.tsx        # Contact + form
│   └── work/[slug]/page.tsx    # Individual case study
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # Footer with links and socials
│   ├── sections/               # Homepage sections
│   │   ├── Hero.tsx            # Fullscreen hero with particle canvas
│   │   ├── Marquee.tsx         # Infinite scrolling ticker
│   │   ├── About.tsx           # Founder intro + philosophy
│   │   ├── Services.tsx        # 14 service cards grid
│   │   ├── Portfolio.tsx       # Filterable project grid
│   │   ├── Process.tsx         # Accordion process steps
│   │   ├── Testimonials.tsx    # Auto-advancing carousel
│   │   ├── Stats.tsx           # Animated number counters
│   │   └── CTA.tsx             # Conversion section
│   ├── pages/
│   │   ├── AboutPage.tsx       # Full about page content
│   │   ├── ContactPage.tsx     # Contact form + methods
│   │   └── CaseStudy.tsx       # Case study layout
│   ├── ui/
│   │   ├── CustomCursor.tsx    # Dot + ring cursor
│   │   ├── LoadingScreen.tsx   # Branded loading screen
│   │   ├── MagneticButton.tsx  # Magnetic hover effect
│   │   └── ThemeToggle.tsx     # Dark/Light toggle
│   └── providers/
│       ├── ThemeProvider.tsx   # next-themes wrapper
│       └── LenisProvider.tsx   # Lenis smooth scroll
│
├── lib/
│   ├── data/
│   │   ├── services.ts         # 14 service definitions
│   │   ├── portfolio.ts        # 8 portfolio projects
│   │   ├── testimonials.ts     # 5 client testimonials
│   │   ├── process.ts          # 5 process steps
│   │   └── stats.ts            # Studio statistics
│   ├── animations.ts           # Framer Motion variants
│   ├── constants.ts            # Site config, nav links, socials
│   └── utils.ts                # cn(), lerp(), clamp(), etc.
│
├── public/
│   └── images/
│       ├── portfolio/          # Project cover images
│       ├── team/               # Founder photo
│       └── clients/            # Client avatars
│
├── tailwind.config.ts          # Design token config
└── package.json
```

---

## Customizing Content

All content is centralized in `lib/` — **no need to touch component files** for content changes.

### Brand & Contact
Edit **`lib/constants.ts`**:
- `SITE.tagline` — your tagline
- `SITE.email`, `SITE.phone`, `SITE.whatsapp`
- `SITE.social.*` — all social profile URLs
- `SITE.calendly` — booking link
- `NAV_LINKS` — navigation items

### Portfolio Projects
Edit **`lib/data/portfolio.ts`** — each project has:
- `slug` — URL path (`/work/[slug]`)
- `title`, `client`, `description`, `overview`
- `category` — used for filter tabs
- `tools`, `role`, `outcome`
- `coverImage` — path under `/public/images/portfolio/`

### Services
Edit **`lib/data/services.ts`** — 14 services with title, description, icon, category.

Icons use [Lucide React](https://lucide.dev) names (e.g. `"Monitor"`, `"Globe"`).

### Testimonials
Edit **`lib/data/testimonials.ts`**.

### Process Steps
Edit **`lib/data/process.ts`**.

### Stats
Edit **`lib/data/stats.ts``.

---

## Adding Real Images

Replace placeholder `<div>` elements with `<Image>` from `next/image`:

```tsx
// In Portfolio.tsx, replace the placeholder div with:
<Image
  src={project.coverImage}
  alt={project.title}
  fill
  className="object-cover"
/>
```

Place images in:
- `/public/images/portfolio/` — project images
- `/public/images/team/` — founder photo (used in About)
- `/public/images/clients/` — testimonial avatars

---

## Contact Form

The contact form in `components/pages/ContactPage.tsx` currently simulates submission.

**To wire up a real form handler**, replace the `handleSubmit` function with your preferred service:

### Option A — Resend (recommended)
```bash
npm install resend
```
Create `app/api/contact/route.ts` and call Resend's API.

### Option B — Formspree
```tsx
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(e.currentTarget),
})
```

### Option C — Emailjs
```bash
npm install @emailjs/browser
```

---

## SEO

SEO metadata is defined in:
- `app/layout.tsx` — global metadata + JSON-LD structured data
- Each `page.tsx` — page-specific title + description

Update `lib/constants.ts`:
```ts
SITE.url = 'https://litcreativedesigns.com'
SEO.ogImage = '/images/og-image.jpg'  // 1200×630px
```

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Other hosts
Any platform supporting Next.js 14 works: Netlify, Railway, Render, etc.

---

## Design System

| Token | Value |
|-------|-------|
| `--black` | `#080808` |
| `--surface` | `#141414` |
| `--surface-2` | `#1a1a1a` |
| `--gold` | `#C9A84C` |
| `--gold-light` | `#E8C96A` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

Tailwind custom classes: `text-gradient-gold`, `section-label`, `glass-card`, `gold-line`, `gradient-border`

---

## License

Private. All rights reserved — Lit Creative Designs © 2024.
