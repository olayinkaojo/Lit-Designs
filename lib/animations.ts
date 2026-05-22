import type { Variants } from 'framer-motion'

// ─── Easing Curves ─────────────────────────────────────
export const ease = {
  expo: [0.16, 1, 0.3, 1],
  circ: [0, 0.55, 0.45, 1],
  back: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.1, 0.25, 1],
}

// ─── Fade Variants ─────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.expo },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.expo },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: ease.expo },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: ease.expo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: ease.smooth },
  },
}

// ─── Scale Variants ─────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: ease.expo },
  },
}

export const scaleInSmall: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.expo },
  },
}

// ─── Stagger Container ──────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.expo },
  },
}

// ─── Text Reveal ─────────────────────────────────────────
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

export const charVariant: Variants = {
  hidden: { opacity: 0, y: '100%', rotate: 8 },
  visible: {
    opacity: 1,
    y: '0%',
    rotate: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
}

export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.expo },
  },
}

// ─── Line Reveal ─────────────────────────────────────────
export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: ease.expo, delay: 0.3 },
  },
}

// ─── Card Hover ──────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.4, ease: ease.expo },
  },
}

// ─── Page Transition ──────────────────────────────────────
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: ease.smooth },
  },
}

// ─── Viewport Settings ───────────────────────────────────
export const viewport = {
  once: true,
  margin: '-80px',
}

export const viewportEager = {
  once: true,
  margin: '-40px',
}
