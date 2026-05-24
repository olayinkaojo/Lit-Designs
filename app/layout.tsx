import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { PageTransition } from '@/components/providers/PageTransition'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Preloader } from '@/components/layout/Preloader'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE, SEO } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Graphics Design & Brand Identity Agency, Abuja Nigeria`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder,
  publisher: SITE.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Premium Creative Agency in Abuja, Nigeria`,
    description: SITE.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Graphics Design & Branding Agency Nigeria`,
    description: SITE.description,
    creator: '@litcreativedesigns',
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

// JSON-LD — Organization + Person
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo/logo.svg`,
      email: SITE.email,
      telephone: SITE.phone,
      description: SITE.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abuja',
        addressRegion: 'Federal Capital Territory',
        addressCountry: 'NG',
      },
      areaServed: ['Nigeria', 'Africa', 'United Kingdom', 'United States', 'Global'],
      foundingDate: '2019',
      founder: { '@id': `${SITE.url}/#founder` },
      sameAs: Object.values(SITE.social),
      serviceType: [
        'Graphics Design',
        'Brand Identity & Logo Design',
        'UI/UX Design',
        'Web Design',
        'Mobile App Design',
        'Motion Graphics',
        'Social Media Content Design',
        'Pitch Deck Design',
        'Event Marketing Design',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#founder`,
      name: SITE.founder,
      jobTitle: SITE.founderTitle,
      worksFor: { '@id': `${SITE.url}/#organization` },
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abuja',
        addressCountry: 'NG',
      },
      sameAs: [SITE.social.behance, SITE.social.linkedin],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-black text-white antialiased">
        <ThemeProvider>
          <LenisProvider>
            {/* Preloader must be first so it overlays everything */}
            <Preloader />
            <CustomCursor />
            <Navbar />
            <PageTransition>
              <main id="main-content">{children}</main>
            </PageTransition>
            <Footer />
            <Analytics />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
