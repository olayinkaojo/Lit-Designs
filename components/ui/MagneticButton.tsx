'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: 'button' | 'a' | 'div'
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  as: Tag = 'button',
  href,
  onClick,
  target,
  rel,
  type,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 200, damping: 20, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 200, damping: 20, mass: 0.5 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      rawX.set((e.clientX - centerX) * strength)
      rawY.set((e.clientY - centerY) * strength)
    },
    [rawX, rawY, strength]
  )

  const handleMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  const props = {
    ref,
    className: cn('magnetic-wrapper inline-block', className),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    ...(Tag === 'a' && { href, target, rel }),
    ...(Tag === 'button' && { type: type ?? 'button' }),
  }

  return (
    <motion.div style={{ x, y }} className="inline-block">
      {/* @ts-expect-error dynamic tag */}
      <Tag {...props}>{children}</Tag>
    </motion.div>
  )
}

// Convenience styled variants
interface ButtonProps extends Omit<MagneticButtonProps, 'as'> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  type,
  strength,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs tracking-widest',
    md: 'px-8 py-4 text-xs tracking-widest',
    lg: 'px-10 py-5 text-sm tracking-widest',
  }

  const variantClasses = {
    primary:
      'bg-brand-gold text-brand-black font-sans font-500 uppercase hover:bg-brand-gold-light transition-colors duration-300',
    outline:
      'border border-white/20 text-white font-sans font-400 uppercase hover:border-brand-gold hover:text-brand-gold transition-colors duration-300',
    ghost:
      'text-brand-gold font-sans font-400 uppercase hover:text-brand-gold-light transition-colors duration-300 underline underline-offset-4',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <MagneticButton
      as={Tag as 'a' | 'button'}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      type={type}
      strength={strength}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </MagneticButton>
  )
}
