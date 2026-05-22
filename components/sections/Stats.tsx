'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/data/stats'
import { fadeInUp } from '@/lib/animations'

function useCounter(target: number, isActive: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const step = target / (duration / 16)
    const id = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(id)
  }, [target, isActive, duration])

  return count
}

function StatItem({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) {
  const count = useCounter(stat.value, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group text-center md:text-left"
    >
      {/* Value */}
      <div className="flex items-baseline gap-1 justify-center md:justify-start mb-2">
        <span className="font-display text-5xl md:text-6xl lg:text-7xl text-white tabular-nums">
          {count}
        </span>
        {stat.suffix && (
          <span className="font-display text-3xl md:text-4xl text-brand-gold">{stat.suffix}</span>
        )}
      </div>

      {/* Gold line */}
      <div className="w-8 h-px bg-brand-gold mx-auto md:mx-0 mb-3 group-hover:w-12 transition-all duration-500" />

      {/* Label */}
      <p className="font-sans text-sm font-medium text-white/70 mb-1 uppercase tracking-wider">
        {stat.label}
      </p>
      <p className="font-sans text-xs text-white/35 leading-relaxed max-w-[180px] mx-auto md:mx-0">
        {stat.description}
      </p>
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="stats"
      className="py-28 md:py-40 relative overflow-hidden"
      aria-label="Studio Stats"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-surface/30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(93,194,65,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative section-padding container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 md:mb-20"
        >
          <p className="section-label mb-4">By the Numbers</p>
          <h2 className="font-display text-display text-white">
            Five years of
            <span className="text-gradient-gold italic"> relentless craft.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
