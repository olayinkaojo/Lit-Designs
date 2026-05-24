'use client'

/**
 * Uses /public/logo/logo.svg — the real Lit Creative Designs asset.
 *
 * The SVG is 1500×1500 with a white background rect.
 * A CSS crop window reveals only the flame + wordmark content region.
 * On dark backgrounds the white bg becomes invisible via:
 *   filter: invert(1) hue-rotate(180deg)
 *   — white → black (matches dark bg), green stays green, charcoal → light grey.
 *
 * LogoFlame is kept as inline SVG since no standalone flame file exists.
 */

// ─── Brand colors (match logo.svg) ──────────────────────
export const LOGO_GREEN = '#80bb4e'
export const LOGO_CHARCOAL = '#414149'
export const LOGO_GREY = '#6B6B6B'

// ─── Full logo using the real SVG file ──────────────────
//
// Crop math (SVG is 1500×1500):
// Content region: x 85–1310, y 310–1040 → 1225×730px → aspect 1.68:1
//
// Scale = containerH / 730
// imgSize  = 1500 × scale
// left     = -(85  × scale)
// top      = -(310 × scale)
// containerW = 1225 × scale
//
const CROP_CONFIGS = {
  sm:      { imgSize: 205, left: -12, top: -42, containerW: 168, containerH: 100 },
  default: { imgSize: 164, left: -9,  top: -34, containerW: 134, containerH: 80 },
  lg:      { imgSize: 214, left: -12, top: -44, containerW: 175, containerH: 104 },
} as const

interface LogoFullProps {
  size?: keyof typeof CROP_CONFIGS
  className?: string
}

export function LogoFull({ size = 'default', className = '' }: LogoFullProps) {
  const c = CROP_CONFIGS[size]

  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: c.containerW, height: c.containerH }}
      aria-label="Lit Creative Designs"
      role="img"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: c.imgSize,
          height: c.imgSize,
          left: c.left,
          top: c.top,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        className="dark:[filter:invert(1)_hue-rotate(180deg)]"
      />
    </div>
  )
}

// ─── Standalone flame mark (used in Preloader) ──────────
// Kept as inline SVG — no standalone flame file in /public.
export function LogoFlame({ className = 'w-10 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M42 68C30 72 16 64 14 50C12 36 18 20 28 12C26 22 26 38 30 52C33 62 38 66 42 68Z"
        fill={LOGO_CHARCOAL}
        fillOpacity="0.9"
      />
      <path
        d="M28 72C16 76 2 68 0 54C-2 40 4 22 14 14C12 24 12 40 16 54C19 64 24 70 28 72Z"
        fill={LOGO_GREEN}
      />
    </svg>
  )
}

// ─── Text-only wordmark ──────────────────────────────────
export function LogoText({
  size = 'default',
  darkMode = true,
}: {
  size?: 'sm' | 'default' | 'lg'
  darkMode?: boolean
}) {
  const textColor = darkMode ? '#ffffff' : LOGO_CHARCOAL
  const sizes = { sm: 'text-sm', default: 'text-base', lg: 'text-xl' }

  return (
    <span className={`font-display font-semibold ${sizes[size]}`}>
      <span style={{ color: LOGO_GREEN }}>Lit</span>
      <span style={{ color: textColor }}> Creative Designs</span>
    </span>
  )
}
