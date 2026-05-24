'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Nigerian Bar Association', abbr: 'NBA', sector: 'Legal' },
  { name: 'EcoFitness Hub Nigeria', abbr: 'EFH', sector: 'Wellness' },
  { name: 'JOPAG Logistics Ltd', abbr: 'JOPAG', sector: 'Logistics' },
  { name: 'U.S. Tech Startups', abbr: 'SaaS', sector: 'Technology' },
  { name: 'Fashion & Lifestyle Brands', abbr: 'FLB', sector: 'Retail' },
  { name: 'European SMEs', abbr: 'EU', sector: 'Global' },
  { name: 'Nigerian Corporates', abbr: 'NIG', sector: 'Enterprise' },
  { name: 'Digital Agencies', abbr: 'WRK', sector: 'Creative' },
]

function ClientTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...clients, ...clients]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {items.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-12 group"
          >
            {/* Client block */}
            <div className="flex items-center gap-4 py-2 opacity-35 hover:opacity-70 transition-opacity duration-500">
              {/* Monogram */}
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold/30 transition-colors duration-500">
                <span className="font-display text-xs text-white/60 tracking-wider">
                  {client.abbr.slice(0, 2)}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm text-white/70 tracking-wide">{client.name}</p>
                <p className="font-sans text-[9px] text-white/25 tracking-[0.2em] uppercase">{client.sector}</p>
              </div>
            </div>
            {/* Separator */}
            <span className="w-px h-5 bg-white/8 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <section
      className="py-16 border-y border-white/5 bg-brand-surface/30 overflow-hidden"
      aria-label="Clients we have worked with"
    >
      <div className="mb-3 section-padding container-wide">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/20">
          Trusted by — across Africa, Europe & North America
        </p>
      </div>
      <div className="space-y-0">
        <ClientTrack />
        <ClientTrack reverse />
      </div>
    </section>
  )
}
