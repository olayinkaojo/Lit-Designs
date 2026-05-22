import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#080808',
        'brand-surface': '#141414',
        'brand-surface-2': '#1a1a1a',
        'brand-gold': '#5DC241',
        'brand-gold-light': '#72D455',
        'brand-border': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem,8vw,6rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem,6vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.75rem,4vw,3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.25rem,2.5vw,2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #5DC241 0%, #72D455 50%, #5DC241 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'cursor-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'circ-out': 'cubic-bezier(0, 0.55, 0.45, 1)',
      },
      boxShadow: {
        'gold': '0 0 40px rgba(93, 194, 65, 0.15)',
        'gold-sm': '0 0 20px rgba(93, 194, 65, 0.1)',
        'inner-gold': 'inset 0 0 30px rgba(93, 194, 65, 0.05)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
