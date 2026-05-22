# Lit Creative Designs — Portfolio Website

**Production-ready portfolio website** for **Lit Creative Designs Limited**  
Founded by **Olayinka Samuel Ojo** — Creative Director & Brand Specialist, Abuja, Nigeria.

🌐 **Live:** https://litcreativedesigns.com  
📧 **Email:** olayinkaojo.ng@gmail.com  
📞 **Phone:** +234 803 073 1420  
🎨 **Behance:** https://www.behance.net/litdesigns

---

## Build Status

```
✓ TypeScript: 0 errors
✓ Next.js build: successful
✓ Pages: 10 (all statically pre-rendered)
✓ Case studies: 4 (NBA, EcoFitness, JOPAG, UI/UX)
```

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14.2 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling + design tokens |
| Framer Motion v11 | All animations |
| Lenis 1.1.9 | Smooth scroll |
| next-themes | Dark / Light toggle |
| Lucide React | Icons |

---

## Quick Start

```bash
# 1 — Install
npm install

# 2 — Dev server
npm run dev
# → http://localhost:3000

# 3 — Production build
npm run build
npm start
```

---

## Project Structure

```
lit-creative-designs/
├── app/
│   ├── layout.tsx              ← Root layout: SEO, JSON-LD, fonts, providers
│   ├── page.tsx                ← Homepage (all sections)
│   ├── globals.css             ← CSS variables, global styles
│   ├── about/page.tsx          ← About / Founder page
│   ├── contact/page.tsx        ← Contact form + methods
│   └── work/[slug]/page.tsx    ← Case study pages (4 projects)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Sticky nav, mobile menu, scroll-hide
│   │   ├── Footer.tsx          ← Footer with CTA strip, links, socials
│   │   ├── Preloader.tsx       ← Branded loading screen (flame reveal)
│   │   └── CustomCursor.tsx    ← (see components/ui/CustomCursor.tsx)
│   ├── sections/               ← Homepage sections
│   │   ├── Hero.tsx            ← Fullscreen + particle canvas + parallax
│   │   ├── Marquee.tsx         ← Infinite scrolling ticker
│   │   ├── About.tsx           ← Founder intro + philosophy cards
│   │   ├── Services.tsx        ← 14 service cards grid
│   │   ├── Portfolio.tsx       ← Filterable project grid
│   │   ├── Process.tsx         ← 6-step interactive accordion
│   │   ├── Testimonials.tsx    ← Auto-advancing carousel
│   │   ├── Stats.tsx           ← Animated counters (8+, 100+, 5★, 14)
│   │   └── CTA.tsx             ← Conversion section
│   ├── pages/
│   │   ├── AboutPage.tsx       ← Full founder bio, experience, skills
│   │   ├── ContactPage.tsx     ← Contact form + contact methods
│   │   └── CaseStudy.tsx       ← Case study layout
│   ├── ui/
│   │   ├── LogoMark.tsx        ← Logo SVG (flame + wordmark components)
│   │   ├── CustomCursor.tsx    ← Gold dot + ring cursor
│   │   ├── LoadingScreen.tsx   ← Legacy (use Preloader instead)
│   │   ├── MagneticButton.tsx  ← Spring-physics magnetic buttons
│   │   └── ThemeToggle.tsx     ← Animated dark/light switch
│   └── providers/
│       ├── ThemeProvider.tsx   ← next-themes wrapper
│       └── LenisProvider.tsx   ← Smooth scroll provider
│
├── lib/
│   ├── data/
│   │   ├── portfolio.ts        ← 4 real projects (NBA, EcoFitness, JOPAG, UI/UX)
│   │   ├── services.ts         ← 14 service definitions
│   │   ├── testimonials.ts     ← 5 client testimonials
│   │   ├── process.ts          ← 6 process steps
│   │   └── stats.ts            ← Studio statistics
│   ├── animations.ts           ← Framer Motion variants + easing curves
│   ├── constants.ts            ← All site config (contact, socials, nav)
│   └── utils.ts                ← cn(), lerp(), clamp(), mapRange()
│
└── public/
    ├── logo/                   ← Drop logo.svg / logo.png here
    ├── projects/               ← Project cover images
    ├── founder/                ← Olayinka's photo → olayinka.jpg
    └── images/
        ├── clients/            ← Testimonial avatars
        └── og-image.jpg        ← 1200×630px Open Graph image
```

---

## Updating Content

Everything is centralized in `lib/` — **no need to touch component files** for content edits.

### Contact & Brand Info → `lib/constants.ts`
```ts
SITE.email        = 'olayinkaojo.ng@gmail.com'  ✓ Done
SITE.phone        = '+234 803 073 1420'          ✓ Done
SITE.whatsapp     = '+2348030731420'             ✓ Done
SITE.social.*     = update your real social URLs
SITE.calendly     = 'calendly.com/YOUR_LINK'    ← Add when ready
```

### Portfolio Projects → `lib/data/portfolio.ts`
4 real projects included: NBA Conference, EcoFitness, JOPAG Logistics, Startup UI/UX.  
To add projects: copy one object block and fill in — the slug becomes the URL.

### Testimonials → `lib/data/testimonials.ts`
5 testimonials (real quotes from the brief + placeholder client names).  
Replace `name` and `avatar` fields when clients provide details.

### Services → `lib/data/services.ts`
14 services as specified. Icons use [Lucide React](https://lucide.dev) names.

---

## Adding Real Images

### Founder photo
Place at: `public/founder/olayinka.jpg`  
Then update `components/pages/AboutPage.tsx`, replacing the placeholder `<div>` with:
```tsx
<Image src="/founder/olayinka.jpg" alt="Olayinka Samuel Ojo" fill className="object-cover object-top" />
```

### Project images
Place at: `public/projects/nba-conference-cover.jpg` etc.  
Filenames match the `coverImage` and `images` fields in `lib/data/portfolio.ts`.

### Logo file
Place your actual SVG/PNG at `public/logo/logo.svg` (or `.png`).  
Update `components/ui/LogoMark.tsx` to use `<Image src="/logo/logo.svg" ...>` for static export if preferred.

### OG Image
Create `public/images/og-image.jpg` at 1200×630px — used for all social sharing previews.

---

## Contact Form

The form in `components/pages/ContactPage.tsx` simulates submission.

**To connect a real form handler:**

### Option A — Resend (recommended)
```bash
npm install resend
```
Create `app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
// POST handler → resend.emails.send({ to: SITE.email, ... })
```

### Option B — Formspree (no backend needed)
```tsx
// In handleSubmit, replace the setTimeout with:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(e.currentTarget),
  headers: { Accept: 'application/json' },
})
```

---

## SEO

Fully configured in `app/layout.tsx`:
- ✓ Title template: `Page Title | Lit Creative Designs`
- ✓ Open Graph + Twitter Card metadata
- ✓ JSON-LD structured data (Organization + Person schemas)
- ✓ Target keywords: "graphics design agency Nigeria", "branding agency Abuja", "UI/UX designer Nigeria", etc.

**To activate Google Search Console:** uncomment and add your code in `app/layout.tsx`:
```ts
verification: { google: 'YOUR_VERIFICATION_CODE' }
```

---

## Deployment

### Vercel (Recommended — zero config)
```bash
npm install -g vercel
vercel
# Follow prompts — auto-detects Next.js
```

### Environment Variables (if using Resend/Calendly API)
Add to `.env.local` (never commit):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### Other Hosts
Any platform that supports Next.js 14 works: Netlify, Railway, Render, DigitalOcean App Platform.

---

## Logo Notes

The inline `LogoMark.tsx` SVG approximates the actual LCD flame mark using:
- `#5DC241` (bright green — front flame)
- `#3D3D3D` (dark charcoal — back flame)

For pixel-perfect output, drop your actual logo SVG at `/public/logo/logo.svg` and replace the SVG paths in `components/ui/LogoMark.tsx`.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#080808` |
| Surface | `#141414` |
| Surface-2 | `#1a1a1a` |
| Gold | `#C9A84C` |
| Gold Light | `#E8C96A` |
| Logo Green | `#5DC241` |
| Logo Charcoal | `#3D3D3D` |
| Display Font | Cormorant Garamond |
| Body Font | DM Sans |

Utility classes: `text-gradient-gold`, `section-label`, `glass-card`, `gold-line`, `gradient-border`

---

## License

Private. All rights reserved — Lit Creative Designs Limited © 2024.  
Website by Olayinka Samuel Ojo.
