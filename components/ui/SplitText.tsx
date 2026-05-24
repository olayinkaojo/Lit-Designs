'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
  as?: keyof JSX.IntrinsicElements
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.025,
  once = true,
  as: Tag = 'span',
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-60px' })

  const words = text.split(' ')

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn('inline', className)} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', rotate: 2, opacity: 0 }}
            animate={isInView ? { y: '0%', rotate: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              delay: delay + wi * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

interface SplitCharsProps {
  text: string
  className?: string
  charClassName?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function SplitChars({
  text,
  className,
  charClassName,
  delay = 0,
  stagger = 0.03,
  once = true,
}: SplitCharsProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-60px' })

  return (
    <span ref={ref} className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={cn('inline-block', charClassName)}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
