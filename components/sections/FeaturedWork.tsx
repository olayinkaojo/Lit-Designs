'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioProjects } from '@/lib/data/portfolio'
import { fadeInUp } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const featured = portfolioProjects.filter((p) => p.featured)

function FeaturedCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor-label="View"
      className="featured-card group relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[40vw] xl:w-[36vw] overflow-hidden"
      aria-label={`View case study: ${project.title}`}
    >
      {/* Image / colour placeholder */}
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${project.color}22 0%, ${project.color}0a 100%)` }}
      >
        {/* Real project image when available */}
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 40vw"
          />
        )}

        {/* Corner index */}
        <span className="absolute top-4 left-5 font-sans text-xs tracking-[0.2em] text-white/50 tabular-nums z-10">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Category pill */}
        <span className="absolute top-4 right-5 px-3 py-1 border border-white/20 bg-brand-black/40 backdrop-blur-sm font-sans text-[9px] tracking-[0.2em] uppercase text-white/60 z-10">
          {project.category}
        </span>

        {/* Fallback letter when no image */}
        {!project.coverImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-[10rem] font-light select-none leading-none"
              style={{ color: project.color + '18' }}
            >
              {project.client.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <motion.div
            initial={false}
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <p className="font-sans text-xs text-white/40 tracking-[0.15em] uppercase mb-2">{project.year} · {project.client}</p>
            <p className="font-sans text-sm text-white/70 line-clamp-2 leading-relaxed mb-5">{project.description}</p>
            <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-gold">
              Case Study <ArrowUpRight size={11} />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Card footer */}
      <div className="pt-5 flex items-start justify-between">
        <div>
          <h3 className="font-display text-xl text-white group-hover:text-brand-gold transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-white/30 mt-1 tracking-wider">{project.industry}</p>
        </div>
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/40 group-hover:text-brand-gold text-white/30 transition-all duration-300 ml-4 mt-1">
          <ArrowUpRight size={13} />
        </div>
      </div>
    </Link>
  )
}

export function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    // Only run horizontal scroll on wider screens
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const cards = track.querySelectorAll('.featured-card')
      const totalWidth = track.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollAmount = totalWidth - viewportWidth + 80 // 80px right padding

      const tween = gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Subtle card entry stagger as they come into the viewport
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: 'left right',
            toggleActions: 'play none none none',
          },
          delay: i * 0.05,
        })
      })

      return () => {
        tween.scrollTrigger?.kill()
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="featured-work"
      className="relative bg-brand-black overflow-hidden"
      aria-label="Featured Work"
    >
      {/* Pinned inner */}
      <div className="relative min-h-screen flex flex-col justify-center py-20">
        {/* Section header */}
        <div
          ref={headerRef}
          className="section-padding container-wide mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className="section-label mb-4">Featured Projects</p>
            <h2 className="font-display text-display text-white">
              Work that
              <br />
              <span className="text-gradient-gold italic">defines brands.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <span className="hidden md:block font-sans text-xs text-white/25 tracking-[0.15em] uppercase">
              Drag to explore →
            </span>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-white/40 hover:text-brand-gold transition-colors duration-300 group"
            >
              All Work
              <ArrowUpRight size={11} />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 pl-6 md:pl-20 xl:pl-24 will-change-transform"
          style={{ paddingRight: '80px' }}
        >
          {featured.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="section-padding container-wide mt-10 flex items-center gap-2">
          {featured.map((_, i) => (
            <div
              key={i}
              className="h-px bg-white/10 flex-1"
            >
              <div
                className="h-full bg-brand-gold/60"
                style={{ width: i === 0 ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
