import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import { AboutPageContent } from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About — Olayinka Samuel Ojo | Creative Director & Brand Specialist',
  description: `Meet ${SITE.founder} — Founder & Creative Director of ${SITE.name}. 8+ years crafting brand identities, UI/UX designs, and visual campaigns for clients across Africa, Europe, and North America.`,
  openGraph: {
    title: `About ${SITE.founder} | ${SITE.name}`,
    description: `Graphics Designer, Creative Director, and Visual Brand Specialist with 8+ years experience. Founder of ${SITE.name}, Abuja Nigeria.`,
    images: [{ url: '/founder/olayinka-og.jpg', width: 1200, height: 630 }],
  },
  keywords: [
    'Olayinka Samuel Ojo',
    'creative director Nigeria',
    'graphics designer Abuja',
    'brand identity designer Nigeria',
    'UI/UX designer Nigeria',
    'Lit Creative Designs founder',
  ],
}

export default function AboutPage() {
  return <AboutPageContent />
}
