'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  }

  const testimonial = testimonials[current]

  return (
    <section
      id="testimonials"
      className="py-28 md:py-40 bg-brand-surface/50"
      aria-label="Client Testimonials"
    >
      <div className="section-padding container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 md:mb-20"
        >
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="font-display text-display text-white max-w-lg">
            Results that
            <span className="text-gradient-gold italic"> speak for themselves.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center"
        >
          {/* Quote — takes 3 cols */}
          <div className="lg:col-span-3 relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Opening quote mark */}
                <span className="font-display text-7xl text-brand-gold/20 leading-none -mt-4 mb-2 block">
                  &ldquo;
                </span>

                {/* Review */}
                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-white/85 leading-relaxed italic -mt-6">
                  {testimonial.review}
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Client info — takes 2 cols */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id + '-info'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Avatar */}
                <div className="relative w-16 h-16 mb-4 overflow-hidden border border-brand-gold/20">
                  <div className="w-full h-full bg-brand-surface-2 flex items-center justify-center">
                    <span className="font-display text-2xl text-brand-gold/40">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-base font-medium text-white">{testimonial.name}</p>
                <p className="font-sans text-sm text-brand-gold mt-0.5">{testimonial.title}</p>
                <p className="font-sans text-sm text-white/40">{testimonial.company}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-brand-gold/40 hover:text-brand-gold text-white/40 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-brand-gold/40 hover:text-brand-gold text-white/40 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={cn(
                      'rounded-full transition-all duration-300',
                      i === current ? 'w-5 h-1.5 bg-brand-gold' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
