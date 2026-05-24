import Link from 'next/link'
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { SITE, FOOTER_LINKS } from '@/lib/constants'
import { LogoFull } from '@/components/ui/LogoMark'
import { MagneticButton } from '@/components/ui/MagneticButton'

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3.988H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
)

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.05 6.37 1.73 1.35 3.91 2.165 6.295 2.165 1.41 0 2.77-.29 4.01-.785zm-9.86-3.79c.25-.414 3.11-5.134 8.268-6.816.138-.045.278-.087.418-.127-.27-.615-.56-1.228-.868-1.83C8.29 9.912 2.908 9.87 2.277 9.86l-.008.146c0 2.35.85 4.5 2.277 6.154zm-2.042-7.316c.64.013 5.33.014 9.108-1.187-1.637-2.906-3.396-5.346-3.668-5.728-2.91 1.375-5.022 4.058-5.44 6.915zm9.478-8.806c.285.396 2.08 2.842 3.698 5.81 3.517-1.318 5.004-3.32 5.188-3.57-1.823-1.618-4.233-2.607-6.886-2.607-.34 0-.676.02-1 .04v.327z" />
  </svg>
)

const socialLinks = [
  { href: SITE.social.behance, icon: BehanceIcon, label: 'Behance' },
  { href: SITE.social.instagram, icon: Instagram, label: 'Instagram' },
  { href: SITE.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: SITE.social.dribbble, icon: DribbbleIcon, label: 'Dribbble' },
  { href: SITE.social.twitter, icon: Twitter, label: 'X / Twitter' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-8">
      <div className="section-padding container-wide">
        {/* Top CTA strip */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-white/5 mb-16">
          <div>
            <p className="section-label mb-3">Ready to work together?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-lg">
              Let&apos;s build something
              <span className="text-gradient-gold italic"> extraordinary.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <MagneticButton as="div" data-cursor-label="Let's go">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
              >
                Start a Project
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
            <MagneticButton as="div" data-cursor-label="Chat">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/60 font-sans text-xs tracking-[0.2em] uppercase hover:border-brand-gold/30 hover:text-brand-gold transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <LogoFull size="sm" className="mb-4" />
            <p className="font-sans text-sm text-white/45 leading-relaxed max-w-xs mb-6">
              Premium creative agency by {SITE.founder}. Crafting brands and digital experiences from Abuja to the world since 2019.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-brand-gold/40 hover:text-brand-gold text-white/35 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">Services</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">Company</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300 break-all">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/45 hover:text-brand-gold transition-colors duration-300"
                >
                  Behance Portfolio
                </a>
              </li>
              <li>
                <p className="font-sans text-sm text-white/30">{SITE.location}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-sans text-xs text-white/20 tracking-wider">
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/20 hover:text-white/40 transition-colors duration-300 tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-sans text-xs text-white/15 tracking-wider">
            Designed &amp; built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
