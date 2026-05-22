'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { fadeInUp } from '@/lib/animations'

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      className="py-28 md:py-40 relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black" />

      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(93,194,65,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(93,194,65,1) 1px, transparent 1px), linear-gradient(90deg, rgba(93,194,65,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative section-padding container-wide text-center" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <p className="section-label mb-6">Ready to Begin?</p>

          <h2 className="font-display text-display md:text-[clamp(3rem,6vw,5rem)] text-white leading-tight mb-8">
            Your next brand milestone
            <br />
            starts with a{' '}
            <span className="text-gradient-gold italic">conversation.</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-12">
            Whether you have a fully-formed brief or just an idea you want to explore — we&apos;d love to hear from
            you. No pitch decks. No pressure. Just a conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
            >
              Start a Project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border border-white/15 text-white font-sans text-xs tracking-[0.2em] uppercase hover:border-brand-gold/30 hover:text-brand-gold transition-all duration-300 group"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-sans text-xs text-white/20 tracking-wider mt-10"
          >
            Typically respond within 24 hours · Based in {SITE.location}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
