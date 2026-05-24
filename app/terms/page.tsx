import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE.name}`,
  description: `Terms of Service for ${SITE.legalName}. Understand the terms governing your use of our services.`,
}

const sections = [
  {
    title: '1. Services',
    body: `${SITE.legalName} ("we", "us", "the Studio") provides creative design services including but not limited to brand identity design, UI/UX design, web design, motion graphics, print media design, social media content design, pitch deck design, and creative consulting.\n\nAll services are provided subject to a separate written agreement, project brief, or signed proposal that specifies deliverables, timelines, and payment terms.`,
  },
  {
    title: '2. Project Engagement',
    body: `A project engagement begins when both parties have agreed in writing (email or signed document) to a project scope, fee, and timeline. Submission of a contact form or inquiry does not constitute a binding agreement.\n\nWe reserve the right to decline any project at our discretion.`,
  },
  {
    title: '3. Payment Terms',
    body: `Unless otherwise agreed in writing:\n• A 50% deposit is required before project work begins\n• The remaining 50% is due upon project completion before final files are delivered\n• Invoices are payable within 7 days of issue\n• Late payments may incur a 5% monthly fee on the outstanding balance\n\nAll prices are quoted in Nigerian Naira (₦) or as otherwise specified in the project proposal.`,
  },
  {
    title: '4. Revisions & Scope',
    body: `Each project includes a defined number of revision rounds as stated in the project proposal. Revisions beyond the agreed scope will be quoted and billed separately.\n\nMajor changes to the project brief after work has commenced may require a revised proposal and additional fees.`,
  },
  {
    title: '5. Intellectual Property',
    body: `Upon receipt of full payment, the client receives full ownership of the final approved design deliverables.\n\nThe Studio retains the right to:\n• Display the work in our portfolio (unless a written NDA or confidentiality agreement states otherwise)\n• Include the project in award submissions and case studies\n• Use preliminary concepts and rejected designs for our own promotional purposes\n\nWe retain ownership of all preliminary work, concepts, and working files unless otherwise agreed in writing.`,
  },
  {
    title: '6. Client Responsibilities',
    body: `The client is responsible for:\n• Providing accurate briefs, brand assets, and content in a timely manner\n• Obtaining all necessary licences for fonts, images, and assets supplied to us\n• Reviewing and approving work at each stage within the agreed timeframe\n• Ensuring all content provided does not infringe any third-party rights\n\nDelays caused by the client may affect project timelines and pricing.`,
  },
  {
    title: '7. Confidentiality',
    body: `We treat all client information as confidential and will not disclose project details, business information, or unpublished work to third parties without your written consent, except where required by law.`,
  },
  {
    title: '8. Warranties & Liability',
    body: `We warrant that all work delivered is original and created by us, and that we have the right to license it to you upon payment.\n\nTo the maximum extent permitted by law, our total liability for any claim arising from our services shall not exceed the total fees paid for the specific project giving rise to the claim.\n\nWe are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    title: '9. Termination',
    body: `Either party may terminate a project engagement with 14 days written notice. In the event of termination:\n• The client is responsible for payment of all work completed to date\n• The Studio will deliver all completed work upon receipt of outstanding payment\n• Deposits are non-refundable unless the Studio terminates the project without cause`,
  },
  {
    title: '10. Governing Law',
    body: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of the Federal Capital Territory, Abuja.`,
  },
  {
    title: '11. Updates to These Terms',
    body: `We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance. The most current version is always available at ${SITE.url}/terms.`,
  },
  {
    title: '12. Contact',
    body: `For questions about these Terms:\n\n${SITE.founder}\n${SITE.legalName}\nAbuja, Nigeria\n${SITE.email}\n${SITE.phone}`,
  },
]

export default function TermsPage() {
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
          <h1 className="font-display text-display text-white mb-4">Terms of Service</h1>
          <p className="font-sans text-sm text-white/30">
            {SITE.legalName} · Last updated: {lastUpdated}
          </p>
          <p className="font-sans text-base text-white/55 leading-relaxed mt-6 max-w-2xl">
            Please read these terms carefully before engaging our services. By working with {SITE.name}, you agree to be bound by these terms.
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

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="font-sans text-sm text-white/40 mb-4">Questions about these terms?</p>
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
