'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { processSteps } from '@/lib/data/process'
import { fadeInUp, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'

function ProcessStep({
  step,
  index,
  isActive,
  onToggle,
  isInView,
}: {
  step: typeof processSteps[0]
  index: number
  isActive: boolean
  onToggle: () => void
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'border-b border-white/5 transition-colors duration-300',
        isActive ? 'border-brand-gold/20' : ''
      )}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-8 text-left group"
        aria-expanded={isActive}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Number */}
          <span
            className={cn(
              'font-display text-4xl md:text-6xl transition-colors duration-400',
              isActive ? 'text-brand-gold' : 'text-white/10 group-hover:text-white/20'
            )}
          >
            {step.number}
          </span>

          {/* Title */}
          <h3
            className={cn(
              'font-display text-xl md:text-2xl lg:text-3xl transition-colors duration-300',
              isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'
            )}
          >
            {step.title}
          </h3>
        </div>

        {/* Toggle icon */}
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300',
            isActive ? 'border-brand-gold/40 text-brand-gold' : 'border-white/10 text-white/30 group-hover:border-white/20'
          )}
        >
          {isActive ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-16 md:pl-28">
          <p className="font-sans text-base text-white/55 leading-relaxed mb-6 max-w-2xl">
            {step.description}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                <span className="font-sans text-sm text-white/40">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      className="py-28 md:py-40 section-padding container-wide"
      aria-label="Our Process"
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <p className="section-label mb-4">How We Work</p>
          <h2 className="font-display text-display text-white mb-4">
            A process built for
            <br />
            <span className="text-gradient-gold italic">clarity and results.</span>
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed">
            Our five-step process removes ambiguity and keeps projects on time, on strategy, and above expectations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="border-t border-white/5">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              isActive={activeStep === i}
              onToggle={() => setActiveStep(activeStep === i ? -1 : i)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
