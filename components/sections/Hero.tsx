'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { MagneticButton } from '@/components/ui/MagneticButton'

// ─── Animated Particle Canvas ──────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; alpha: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      particles = Array.from({ length: Math.min(count, 80) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.35 + 0.08,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(93,194,65,${p.alpha})`
        ctx.fill()
      })
      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(93,194,65,${0.06 * (1 - dist / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    />
  )
}

// ─── Hero Section ───────────────────────────────────────
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const headline = ['We Make', 'Ideas', 'Visible.']

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black"
      aria-label="Hero"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 65%, rgba(93,194,65,0.055) 0%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: bgY, opacity }}
        className="relative z-10 section-padding container-wide pt-40 pb-28"
      >
        {/* Studio label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-brand-gold" />
          <span className="section-label">
            {SITE.location} · {SITE.yearsExperience}+ Years · 100+ Projects
          </span>
        </motion.div>

        {/* Staggered headline */}
        <h1 className="font-display text-hero text-white mb-8">
          {headline.map((word, wi) => (
            <span key={wi} className="block overflow-hidden">
              <motion.span
                className={`block ${wi === 1 ? 'text-gradient-gold italic' : ''}`}
                initial={{ y: '110%', rotate: 3 }}
                animate={{ y: '0%', rotate: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + wi * 0.13,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg md:text-xl text-white/55 max-w-xl leading-relaxed mb-12"
        >
          Premium brand identities, digital products, and visual campaigns —{' '}
          <span className="text-white/85">
            crafted for visionary businesses across Africa, Europe, and North America.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <MagneticButton as="div" data-cursor-label="Let's go">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
            >
              Start a Project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </MagneticButton>

          <MagneticButton as="div" data-cursor-label="View">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-sans text-xs tracking-[0.2em] uppercase hover:border-brand-gold/35 hover:text-brand-gold transition-all duration-300 group"
            >
              View Our Work
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </MagneticButton>

          <a
            href={SITE.behance}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Open"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-white/30 hover:text-brand-gold transition-colors duration-300"
          >
            Behance Portfolio ↗
          </a>
        </motion.div>

        {/* Founder credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="font-sans text-xs text-white/20 mt-6 tracking-wider"
        >
          Founded by <span className="text-white/35">{SITE.founder}</span>
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-8 md:gap-12 mt-20 pt-10 border-t border-white/5"
        >
          {[
            { value: '8+', label: 'Years' },
            { value: '100+', label: 'Projects' },
            { value: '5★', label: 'Rating' },
            { value: '14', label: 'Disciplines' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl md:text-3xl text-white">{s.value}</p>
              <p className="font-sans text-[10px] text-white/35 tracking-wider uppercase mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 right-8 md:right-16 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDownRight size={15} className="text-brand-gold/50" />
        </motion.div>
        <p
          className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/20"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
