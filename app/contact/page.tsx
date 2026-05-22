import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import { ContactPageContent } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact — Start a Project | Lit Creative Designs',
  description: `Get in touch with ${SITE.name}. Book a discovery call, send a project brief, or just say hello. We respond within 24 hours.`,
  openGraph: {
    title: 'Start a Project | Lit Creative Designs',
    description: 'Ready to build something remarkable? Let\'s talk.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
