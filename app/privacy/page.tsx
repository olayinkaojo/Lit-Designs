import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `Privacy Policy for ${SITE.legalName}. Learn how we collect, use, and protect your personal information.`,
}

const sections = [
  {
    title: '1. Information We Collect',
    body: `When you use our contact form or reach out directly, we collect the information you voluntarily provide — including your name, email address, phone number, company name, and project details. We do not collect any information automatically beyond standard web server logs (IP address, browser type, pages visited) which are used solely for security and performance monitoring.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information you provide exclusively to:\n• Respond to your project inquiry or question\n• Send you a quote, proposal, or project brief\n• Communicate about an active project engagement\n• Send invoices and project updates\n\nWe do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '3. Data Storage & Security',
    body: `Your information is stored securely and accessed only by ${SITE.founder} and authorised team members working on your project. We use industry-standard security measures to protect your data from unauthorised access, disclosure, or loss.`,
  },
  {
    title: '4. Email Communication',
    body: `By submitting our contact form, you consent to receiving email correspondence from us related to your inquiry. You may opt out of further communication at any time by replying with an unsubscribe request or emailing us directly.`,
  },
  {
    title: '5. Third-Party Services',
    body: `Our website uses the following third-party services:\n• Vercel — for hosting and performance analytics (anonymised)\n• Google Fonts — for typography (loaded from Google servers)\n• Resend — for transactional email delivery\n\nEach of these services has their own privacy policy governing how they handle data.`,
  },
  {
    title: '6. Cookies',
    body: `We use only essential cookies necessary for the website to function. We do not use tracking cookies or advertising cookies. The theme preference (dark/light mode) is stored in your browser's local storage.`,
  },
  {
    title: '7. Your Rights',
    body: `You have the right to:\n• Request access to the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Withdraw consent to communication at any time\n\nTo exercise any of these rights, contact us at ${SITE.email}.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '9. Contact',
    body: `For any privacy-related questions, please contact:\n\n${SITE.founder}\n${SITE.legalName}\nAbuja, Nigeria\n${SITE.email}\n${SITE.phone}`,
  },
]

export default function PrivacyPage() {
  const lastUpdated = 'May 2025'

  return (
    <div className="bg-brand-black min-h-screen pt-32">
      <div className="section-padding container-wide max-w-3xl pb-32">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-white/30 hover:text-brand-gold transition-colors duration-300 group mb-12"
        >
          <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 pb-12 border-b border-white/5">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-display text-white mb-4">Privacy Policy</h1>
          <p className="font-sans text-sm text-white/30">
            {SITE.legalName} · Last updated: {lastUpdated}
          </p>
          <p className="font-sans text-base text-white/55 leading-relaxed mt-6 max-w-2xl">
            At {SITE.name}, we take your privacy seriously. This policy explains what data we collect, why we collect it, and how we protect it.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-white/5 pb-10 last:border-0">
              <h2 className="font-display text-xl md:text-2xl text-white mb-4">{s.title}</h2>
              <p className="font-sans text-sm text-white/55 leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="font-sans text-sm text-white/40 mb-4">Questions about this policy?</p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-brand-gold-light transition-colors duration-300"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  )
}
