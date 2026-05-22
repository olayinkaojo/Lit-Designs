'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewport } from '@/lib/animations'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const philosophy = [
    {
      title: 'Strategy First',
      body: 'Every visual decision we make traces back to a business objective. Beautiful without purpose is just decoration.',
    },
    {
      title: 'Obsessive Craft',
      body: 'We sweat the details others skip. The kerning, the shadow, the micro-animation — all of it matters.',
    },
    {
      title: 'African Excellence',
      body: 'We create from Abuja and speak to the world. Our work carries the ambition of a continent on the rise.',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 md:py-40 section-padding container-wide"
      aria-label="About"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        {/* Left — image */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden gradient-border">
            <Image
              src="/images/team/founder.jpg"
              alt={`${SITE.founder} — Founder & Creative Director`}
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

            {/* Name badge */}
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-xl text-white">{SITE.founder}</p>
              <p className="font-sans text-xs text-brand-gold tracking-[0.15em] uppercase mt-0.5">
                {SITE.founderTitle}
              </p>
            </div>
          </div>

          {/* Accent box */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-brand-gold/20 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-16 h-16 border border-white/5 pointer-events-none" />
        </motion.div>

        {/* Right — text */}
        <div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mb-10"
          >
            <p className="section-label mb-4">About Lit Creative Designs</p>
            <h2 className="font-display text-display text-white mb-6">
              We don&apos;t just design.
              <br />
              <span className="text-gradient-gold italic">We build legacies.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed mb-4">
              Founded by {SITE.founder} in Abuja, Lit Creative Designs is a premium creative agency operating at the
              intersection of strategy, craft, and technology. We partner with ambitious founders, scaling brands, and
              forward-thinking enterprises to create visual identities and digital products that define categories.
            </p>
            <p className="font-sans text-base text-white/50 leading-relaxed">
              From a bold brand identity to an award-worthy app experience, we bring the same level of obsessive
              attention to every project — because we believe that world-class creative work shouldn&apos;t be a
              privilege of geography.
            </p>
          </motion.div>

          {/* Philosophy cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4 mb-10"
          >
            {philosophy.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="flex gap-4 p-4 border border-white/5 hover:border-brand-gold/20 transition-colors duration-300 group"
              >
                <div className="w-1 bg-brand-gold/30 group-hover:bg-brand-gold flex-shrink-0 transition-colors duration-300 mt-1" />
                <div>
                  <p className="font-sans text-sm font-medium text-white/80 mb-1">{p.title}</p>
                  <p className="font-sans text-sm text-white/45 leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-gold hover:text-brand-gold-light transition-colors duration-300 group"
            >
              Full Story
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
