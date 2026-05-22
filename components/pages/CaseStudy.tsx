'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import type { PortfolioProject } from '@/lib/data/portfolio'
import { portfolioProjects } from '@/lib/data/portfolio'
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations'

interface CaseStudyProps {
  project: PortfolioProject
}

export function CaseStudy({ project }: CaseStudyProps) {
  const otherProjects = portfolioProjects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <div className="bg-brand-black min-h-screen pt-24">
      {/* Back link */}
      <div className="section-padding container-wide pt-8 pb-4">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-white/30 hover:text-brand-gold transition-colors duration-300 group"
        >
          <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
          All Work
        </Link>
      </div>

      {/* Hero */}
      <section className="section-padding container-wide py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-sans text-xs text-white/30">{project.year}</span>
          </div>

          <h1 className="font-display text-display text-white mb-6">{project.title}</h1>
          <p className="font-sans text-lg text-white/60 leading-relaxed max-w-2xl">{project.description}</p>
        </motion.div>
      </section>

      {/* Cover image */}
      <section className="section-padding container-wide pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-9xl font-light" style={{ color: project.color + '30' }}>
              {project.client.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
        </motion.div>
      </section>

      {/* Project info grid */}
      <section className="section-padding container-wide py-12 border-t border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Client', value: project.client },
            { label: 'Industry', value: project.industry },
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
          ].map((item) => (
            <motion.div key={item.label} variants={staggerItem}>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/30 mb-2">{item.label}</p>
              <p className="font-sans text-sm text-white/80">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tags */}
      <section className="section-padding container-wide py-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 border border-white/10 font-sans text-xs text-white/40 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding container-wide py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-label mb-4">Overview</p>
            <h2 className="font-display text-3xl md:text-4xl text-white">The challenge.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed">{project.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding container-wide py-12 border-t border-white/5">
        <p className="section-label mb-6">Tools & Technologies</p>
        <div className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-brand-surface border border-white/5 font-sans text-sm text-white/60"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="section-padding container-wide py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div>
            <p className="section-label mb-4">Results</p>
            <h2 className="font-display text-3xl md:text-4xl text-white">The outcome.</h2>
          </div>
          <div className="lg:col-span-2 p-8 border border-brand-gold/15 bg-brand-gold/3">
            <p className="font-display text-2xl md:text-3xl text-white/90 italic leading-relaxed">
              &ldquo;{project.outcome}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Next projects */}
      <section className="section-padding container-wide py-24 border-t border-white/5">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-white">More Work</h2>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.15em] uppercase text-brand-gold hover:text-brand-gold-light transition-colors duration-300 group"
          >
            All Projects
            <ArrowUpRight size={11} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group"
            >
              <div
                className="aspect-[4/3] mb-4 overflow-hidden flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${p.color}20 0%, ${p.color}08 100%)` }}
              >
                <span className="font-display text-6xl font-light" style={{ color: p.color + '40' }}>
                  {p.client.charAt(0)}
                </span>
              </div>
              <p className="font-sans text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                {p.title}
              </p>
              <p className="font-sans text-xs text-white/30 mt-0.5">{p.category} · {p.year}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-wide py-20 border-t border-white/5 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready for results like these?
        </h2>
        <p className="font-sans text-base text-white/50 mb-8">
          Let&apos;s build your next success story.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
        >
          Start a Project
          <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </div>
  )
}
