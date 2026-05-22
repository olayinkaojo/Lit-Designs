'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/constants'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const intervals: NodeJS.Timeout[] = []

    const tick = (target: number, delay: number) => {
      intervals.push(
        setTimeout(() => {
          setProgress(target)
        }, delay)
      )
    }

    tick(30, 200)
    tick(60, 500)
    tick(85, 900)
    tick(100, 1400)

    intervals.push(
      setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ''
      }, 2000)
    )

    document.body.style.overflow = 'hidden'

    return () => {
      intervals.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Logo wordmark */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          >
            {/* Logo mark */}
            <motion.div
              className="relative w-16 h-16"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }}
            >
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M32 4L8 16V48L32 60L56 48V16L32 4Z"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M32 16L20 22V42L32 48L44 42V22L32 16Z"
                  fill="#C9A84C"
                  fillOpacity="0.15"
                  stroke="#C9A84C"
                  strokeWidth="1"
                />
                <path
                  d="M32 28L26 31V37L32 40L38 37V31L32 28Z"
                  fill="#C9A84C"
                />
              </svg>
            </motion.div>

            {/* Studio name */}
            <div className="text-center">
              <motion.p
                className="font-display text-2xl text-white tracking-[0.15em] uppercase"
                initial={{ opacity: 0, letterSpacing: '0.3em' }}
                animate={{
                  opacity: 1,
                  letterSpacing: '0.15em',
                  transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                {SITE.name}
              </motion.p>
              <motion.p
                className="font-sans text-xs tracking-[0.3em] uppercase mt-1"
                style={{ color: 'var(--gold)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.5 } }}
              >
                {SITE.location}
              </motion.p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
          >
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-brand-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <motion.p
              className="font-sans text-[10px] tracking-widest text-white/30 uppercase mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
