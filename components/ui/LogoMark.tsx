/**
 * LCD Logo SVG components
 * Drop /public/logo/logo.svg in to swap with the real asset when ready.
 * These inline SVGs faithfully represent the Lit Creative Designs flame mark:
 * — Green curved flame (front) + charcoal curved flame (back)
 * — Wordmark: "Lit" green · "Creative" charcoal · "designs" charcoal · "LIMITED" grey
 */

// ─── Brand Colors extracted from actual logo ────────────
export const LOGO_GREEN = '#5DC241'
export const LOGO_CHARCOAL = '#3D3D3D'
export const LOGO_GREY = '#6B6B6B'

// ─── Just the flame mark (used in tight spaces) ─────────
export function LogoFlame({ className = 'w-10 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Back/lower charcoal flame */}
      <path
        d="M42 68C30 72 16 64 14 50C12 36 18 20 28 12C26 22 26 38 30 52C33 62 38 66 42 68Z"
        fill={LOGO_CHARCOAL}
        fillOpacity="0.9"
      />
      {/* Front/upper green flame */}
      <path
        d="M28 72C16 76 2 68 0 54C-2 40 4 22 14 14C12 24 12 40 16 54C19 64 24 70 28 72Z"
        fill={LOGO_GREEN}
      />
    </svg>
  )
}

// ─── Full horizontal logo (mark + wordmark) ─────────────
export function LogoFull({
  className = '',
  size = 'default',
  darkMode = true,
}: {
  className?: string
  size?: 'sm' | 'default' | 'lg'
  darkMode?: boolean
}) {
  const textColor = darkMode ? '#ffffff' : LOGO_CHARCOAL

  const scales = {
    sm: { flame: 'w-7 h-8', text1: 'text-sm', text2: 'text-[10px]' },
    default: { flame: 'w-9 h-11', text1: 'text-base', text2: 'text-[11px]' },
    lg: { flame: 'w-12 h-14', text1: 'text-xl', text2: 'text-sm' },
  }

  const s = scales[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Lit Creative Designs">
      <LogoFlame className={s.flame} />
      <div className="flex flex-col leading-none">
        {/* Line 1: Lit + Creative */}
        <div className={`font-display font-semibold tracking-tight ${s.text1} flex items-baseline gap-0.5`}>
          <span style={{ color: LOGO_GREEN }}>Lit</span>
          <span style={{ color: textColor }}>&nbsp;Creative</span>
        </div>
        {/* Line 2: designs */}
        <div className={`font-display font-normal leading-tight ${s.text1}`} style={{ color: textColor }}>
          designs
        </div>
        {/* Line 3: LIMITED */}
        <div
          className={`font-sans uppercase tracking-[0.22em] leading-tight mt-0.5 ${s.text2}`}
          style={{ color: darkMode ? 'rgba(255,255,255,0.45)' : LOGO_GREY }}
        >
          Limited
        </div>
      </div>
    </div>
  )
}

// ─── Compact mark — just text, no flame ─────────────────
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
