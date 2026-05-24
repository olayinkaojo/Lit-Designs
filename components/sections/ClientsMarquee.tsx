'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// ── Real logo entries ───────────────────────────────────
// All logos are normalised with filter: invert(1) grayscale(1) so they
// render as white silhouettes on the dark marquee background regardless
// of the original logo colours or background.

interface LogoClient {
  name: string
  sector: string
  logo: string
  w: number
  h: number
}

interface TextClient {
  name: string
  sector: string
  abbr: string
  logo?: undefined
}

type Client = LogoClient | TextClient

const clients: Client[] = [
  {
    name: 'Nalado Nigeria Limited',
    sector: 'Engineering',
    logo: '/clients/nalado.png',
    w: 943, h: 343,
  },
  {
    name: 'Manyatta Engineering Services',
    sector: 'Engineering',
    logo: '/clients/manyatta.png',
    w: 933, h: 267,
  },
  {
    name: 'Africa Power & Development Advisors',
    sector: 'Energy',
    logo: '/clients/poweradf.png',
    w: 1080, h: 1080,
  },
  {
    name: 'Coplan Associates',
    sector: 'Professional Services',
    logo: '/clients/coplan.png',
    w: 367, h: 137,
  },
  {
    name: 'EcoFitness Hub Nigeria',
    sector: 'Health & Wellness',
    logo: '/clients/ecofitness.png',
    w: 256, h: 100,
  },
  {
    name: 'NBA — Section on Business Law',
    sector: 'Legal',
    logo: '/clients/nba-sbl.png',
    w: 1600, h: 361,
  },
  // Text placeholders — logos coming soon
  { name: 'NBA — Section on Legal Practice', sector: 'Legal', abbr: 'NBA·SLP' },
  { name: 'CoID Nigeria',                    sector: 'Design', abbr: 'CoID'   },
]

// Duplicate list so the seamless loop has enough content
const TRACK = [...clients, ...clients]

function LogoItem({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <div className="flex items-center gap-3 group opacity-35 hover:opacity-75 transition-opacity duration-500">
        <div className="flex items-center justify-center h-8">
          <Image
            src={client.logo}
            alt={client.name}
            width={client.w}
            height={client.h}
            style={{
              height: client.w === client.h ? '32px' : '28px',   // square logos a touch taller
              width: 'auto',
              maxWidth: client.w === client.h ? '32px' : '160px',
              objectFit: 'contain',
              filter: 'invert(1) grayscale(1)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/20 hidden sm:block">
          {client.sector}
        </span>
      </div>
    )
  }

  // Text monogram placeholder
  const abbr = (client as TextClient).abbr
  return (
    <div className="flex items-center gap-3 group opacity-30 hover:opacity-65 transition-opacity duration-500">
      <div className="border border-white/15 px-3 h-8 flex items-center group-hover:border-white/30 transition-colors duration-500">
        <span className="font-display text-sm tracking-[0.12em] text-white/60">
          {abbr}
        </span>
      </div>
      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/20 hidden sm:block">
        {client.sector}
      </span>
    </div>
  )
}

function ClientTrack({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden mask-marquee">
      <motion.div
        className="flex items-center gap-14 whitespace-nowrap flex-shrink-0"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {TRACK.map((client, i) => (
          <div key={i} className="flex items-center gap-14 flex-shrink-0">
            <LogoItem client={client} />
            {/* Tick separator */}
            <span className="w-px h-4 bg-white/8 flex-shrink-0" aria-hidden="true" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <section
      className="py-14 border-y border-white/5 bg-brand-surface/30 overflow-hidden"
      aria-label="Clients we have worked with"
    >
      {/* Label */}
      <div className="mb-6 section-padding container-wide">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/20">
          Trusted by — across Africa, Europe &amp; North America
        </p>
      </div>

      <div className="space-y-5">
        <ClientTrack />
        <ClientTrack reverse />
      </div>
    </section>
  )
}
