'use client'

import { motion } from 'framer-motion'
import { MARQUEE_ITEMS } from '@/lib/constants'

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{
          duration: 28,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl md:text-3xl italic text-white/20 hover:text-white/50 transition-colors duration-300">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function Marquee() {
  return (
    <section
      className="py-8 border-y border-white/5 overflow-hidden bg-brand-surface/50 backdrop-blur-sm"
      aria-label="Services marquee"
    >
      <div className="space-y-4">
        <MarqueeTrack />
        <MarqueeTrack reverse />
      </div>
    </section>
  )
}
