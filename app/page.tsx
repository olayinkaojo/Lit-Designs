import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Process } from '@/components/sections/Process'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE.name} — Premium Creative Agency in Abuja, Nigeria`,
  description: SITE.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
