'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE, NAV_LINKS } from '@/lib/constants'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LogoFull, LogoFlame, LOGO_GREEN } from '@/components/ui/LogoMark'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useMotionValue(0)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    const prev = lastScrollY.get()
    setScrolled(y > 40)
    setHidden(y > 100 && y > prev)
    lastScrollY.set(y)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        animate={hidden && !isOpen ? { y: '-100%', opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-brand-black/92 backdrop-blur-xl border-b border-white/5'
            : 'py-5 bg-transparent'
        )}
      >
        <nav className="section-padding container-wide flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label={SITE.legalName}>
            <LogoFull size="sm" />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-sans text-xs tracking-[0.15em] uppercase relative group transition-colors duration-300',
                    pathname === link.href ? 'text-brand-gold' : 'text-white/55 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full',
                      pathname === link.href ? 'w-full bg-brand-gold' : 'w-0 bg-brand-gold'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 text-white/50 font-sans text-[10px] tracking-[0.15em] uppercase hover:border-brand-gold/30 hover:text-brand-gold transition-all duration-300"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-gold text-brand-black font-sans text-[10px] tracking-[0.15em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
            >
              Let&apos;s Talk
              <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center border border-white/10 hover:border-white/25 transition-colors duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={16} className="text-white" />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={16} className="text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center"
            style={{ backgroundColor: '#080808' }}
          >
            {/* Logo top-left */}
            <div className="absolute top-5 left-6">
              <LogoFull size="sm" />
            </div>

            <nav className="section-padding">
              <ul className="space-y-1 mb-12">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-5xl md:text-7xl text-white/70 hover:text-white transition-colors duration-300 block py-1.5"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="pt-8 border-t border-white/10 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase self-start"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={12} />
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-sans text-sm text-white/30 hover:text-brand-gold transition-colors duration-300"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-sans text-sm text-white/30 hover:text-brand-gold transition-colors duration-300"
                >
                  {SITE.email}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
