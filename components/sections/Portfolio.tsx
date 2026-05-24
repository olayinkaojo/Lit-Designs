'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects, portfolioCategories, type PortfolioCategory } from '@/lib/data/portfolio'
import { fadeInUp, staggerContainer, staggerItem, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'

function ProjectCard({ project }: { project: typeof portfolioProjects[0] }) {
  return (
    <motion.article
      variants={staggerItem}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <Link href={`/work/${project.slug}`} className="block" data-cursor-label="View">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface-2">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: project.color + '15' }}
          >
            {/* Placeholder — replace with real Image when assets are added */}
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)`,
              }}
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <p className="section-label mb-2">{project.category}</p>
              <h3 className="font-display text-xl text-white mb-3">{project.title}</h3>
              <p className="font-sans text-sm text-white/60 line-clamp-2 mb-4">{project.description}</p>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.15em] uppercase text-brand-gold group-hover:gap-2 transition-all duration-300">
                View Case Study
                <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="pt-4 flex items-start justify-between">
          <div>
            <h3 className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-white/35 mt-0.5">{project.client} · {project.year}</p>
          </div>
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <span className="font-sans text-[9px] tracking-widest uppercase text-brand-gold">View</span>
            <ArrowUpRight size={10} className="text-brand-gold" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="portfolio"
      className="py-28 md:py-40 section-padding container-wide"
      aria-label="Portfolio"
    >
      {/* Header */}
      <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label mb-4">Selected Work</p>
          <h2 className="font-display text-display text-white">
            Projects that
            <br />
            <span className="text-gradient-gold italic">speak louder</span>
            {' '}than words.
          </h2>
        </motion.div>
      </div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-2 flex-wrap mb-12"
        role="group"
        aria-label="Filter by category"
      >
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300',
              activeCategory === cat
                ? 'bg-brand-gold text-brand-black'
                : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
            )}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-14 text-center"
      >
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-white/30 hover:text-brand-gold transition-colors duration-300 group"
        >
          More work coming soon
          <ArrowUpRight size={11} />
        </Link>
      </motion.div>
    </section>
  )
}
