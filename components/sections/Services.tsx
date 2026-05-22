'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Layers, Fingerprint, Monitor, Globe, Smartphone, Code2, Box,
  Building2, Play, Target, Zap, Share2, Package, Lightbulb, ArrowUpRight
} from 'lucide-react'
import { services } from '@/lib/data/services'
import { staggerContainer, staggerItem, fadeInUp, viewport } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Layers, Fingerprint, Monitor, Globe, Smartphone, Code2, Box,
  Building2, Play, Target, Zap, Share2, Package, Lightbulb,
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = iconMap[service.icon] ?? Layers

  return (
    <motion.article
      variants={staggerItem}
      className="group relative p-6 border border-white/5 hover:border-brand-gold/25 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Number */}
      <span className="absolute top-4 right-5 font-sans text-xs text-white/10 group-hover:text-brand-gold/20 transition-colors duration-500 tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="mb-5 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 transition-colors duration-500">
        <Icon
          size={18}
          className="text-white/40 group-hover:text-brand-gold transition-colors duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="font-sans text-base font-medium text-white/80 group-hover:text-white mb-3 transition-colors duration-300 pr-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-white/40 leading-relaxed line-clamp-3 group-hover:text-white/55 transition-colors duration-300">
        {service.description}
      </p>

      {/* Arrow - appears on hover */}
      <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <span className="font-sans text-xs tracking-[0.15em] uppercase text-brand-gold">Learn More</span>
        <ArrowUpRight size={10} className="text-brand-gold" />
      </div>

      {/* Category tag */}
      <div className="absolute bottom-4 right-5">
        <span className="font-sans text-[9px] tracking-widest uppercase text-white/15 group-hover:text-brand-gold/30 transition-colors duration-500">
          {service.category}
        </span>
      </div>
    </motion.article>
  )
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      className="py-28 md:py-40 section-padding container-wide"
      aria-label="Services"
    >
      {/* Header */}
      <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label mb-4">What We Do</p>
          <h2 className="font-display text-display text-white max-w-lg">
            Every creative need.
            <br />
            <span className="text-gradient-gold italic">One agency.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base text-white/50 max-w-sm leading-relaxed"
        >
          From the first brand concept to the final pixel of your app — we cover 14 disciplines so you never need to
          piece together a creative team again.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5"
      >
        {services.map((service, i) => (
          <div key={service.id} className="bg-brand-black">
            <ServiceCard service={service} index={i} />
          </div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 text-center"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-white/40 hover:text-brand-gold transition-colors duration-300 group"
        >
          Don&apos;t see what you need? Let&apos;s talk
          <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  )
}
