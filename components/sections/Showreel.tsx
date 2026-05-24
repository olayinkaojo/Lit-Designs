'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, X, Volume2, VolumeX } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'

// Replace with your actual YouTube reel video ID once you have one.
// To get the ID: from https://www.youtube.com/watch?v=XXXXXXXXXXXX, the ID is XXXXXXXXXXXX.
const REEL_VIDEO_ID = 'YOUR_YOUTUBE_REEL_ID'
const HAS_REEL = REEL_VIDEO_ID !== 'YOUR_YOUTUBE_REEL_ID'

export function Showreel() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section
        id="showreel"
        ref={ref}
        className="py-28 md:py-40 relative overflow-hidden bg-brand-black"
        aria-label="Showreel"
      >
        {/* Background — animated gradient mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(93,194,65,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Gold line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="section-padding container-wide">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Motion & Design</p>
            <h2 className="font-display text-display text-white mb-4">
              Design in motion.
              <br />
              <span className="text-gradient-gold italic">Ideas made visible.</span>
            </h2>
            <p className="font-sans text-base text-white/45 max-w-lg mx-auto leading-relaxed">
              A selection of motion graphics, brand animations, and visual campaigns — delivered across Africa, Europe, and North America.
            </p>
          </motion.div>

          {/* Video frame */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-5xl"
          >
            {/* Frame border */}
            <div className="absolute inset-0 border border-brand-gold/15 pointer-events-none z-10" />

            {/* Aspect ratio box */}
            <div className="relative aspect-video bg-brand-surface overflow-hidden group">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(93,194,65,1) 1px, transparent 1px), linear-gradient(90deg, rgba(93,194,65,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />

              {/* Placeholder text — replace with <video> autoplay muted loop or a thumbnail */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/20">
                  {HAS_REEL ? 'Click to play showreel' : 'Showreel coming soon · Add REEL_VIDEO_ID in Showreel.tsx'}
                </p>

                {/* Animated ring */}
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Outer pulse ring */}
                  <motion.div
                    className="absolute inset-[-14px] rounded-full border border-brand-gold/15"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                  />

                  {/* Play button */}
                  <button
                    onClick={() => HAS_REEL && setIsOpen(true)}
                    disabled={!HAS_REEL}
                    data-cursor-label="Play"
                    className="w-20 h-20 rounded-full border border-brand-gold/40 bg-brand-gold/8 hover:bg-brand-gold/20 hover:border-brand-gold transition-all duration-400 flex items-center justify-center group/btn disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Play showreel"
                  >
                    <Play
                      size={22}
                      className="text-brand-gold ml-1 group-hover/btn:scale-110 transition-transform duration-300"
                      fill="currentColor"
                    />
                  </button>
                </motion.div>

                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/15">
                  Lit Creative Designs · Motion Reel 2024
                </p>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r border-b border-brand-gold/20 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l border-t border-brand-gold/20 pointer-events-none" />
          </motion.div>

          {/* Stats below reel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-10 md:gap-20 mt-12 pt-10 border-t border-white/5"
          >
            {[
              { value: '14', label: 'Design Disciplines' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '5★', label: 'Client Rating' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl text-white">{s.value}</p>
                <p className="font-sans text-[10px] text-white/30 tracking-wider uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && HAS_REEL && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white/20 hover:border-brand-gold/40 hover:text-brand-gold text-white/40 transition-all duration-300"
            aria-label="Close showreel"
          >
            <X size={16} />
          </button>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${REEL_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Lit Creative Designs Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
