'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LOGO_GREEN, LOGO_CHARCOAL, LogoFlame } from '@/components/ui/LogoMark'
import { SITE } from '@/lib/constants'

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'done'>('loading')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const ticks: [number, number][] = [
      [20, 180],
      [45, 400],
      [70, 750],
      [90, 1100],
      [100, 1500],
    ]

    const timers: ReturnType<typeof setTimeout>[] = ticks.map(([val, delay]) =>
      setTimeout(() => setProgress(val), delay)
    )

    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 1700)

    const exitTimer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ''
    }, 2300)

    timers.push(doneTimer, exitTimer)
    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#080808' }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Central content */}
          <div className="flex flex-col items-center gap-8">
            {/* Flame mark — draws in with scale + opacity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <LogoFlame className="w-20 h-24" />

              {/* Pulse ring on the flame */}
              <motion.div
                className="absolute inset-[-12px] rounded-full border border-[#5DC241]/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </motion.div>

            {/* Studio name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Word by word reveal */}
              <div className="overflow-hidden mb-1">
                <motion.p
                  className="font-display text-2xl tracking-[0.08em] text-white"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span style={{ color: LOGO_GREEN }}>Lit</span>
                  <span className="text-white"> Creative designs</span>
                </motion.p>
              </div>
              <motion.p
                className="font-sans text-[10px] tracking-[0.35em] uppercase"
                style={{ color: LOGO_GREEN }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {SITE.location}
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-full h-px bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: LOGO_GREEN }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <motion.p
                className="font-sans text-[10px] tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                {phase === 'done' ? 'Welcome' : `${progress}%`}
              </motion.p>
            </motion.div>
          </div>

          {/* Tagline — bottom */}
          <motion.p
            className="absolute bottom-10 font-sans text-xs tracking-[0.25em] uppercase text-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {SITE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
