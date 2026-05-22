'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Briefcase, GraduationCap, Star, MapPin, Mail, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

// ─── Founder Data ───────────────────────────────────────
const experience = [
  {
    role: 'Founder & Creative Director',
    company: 'Lit Creative Designs Ltd',
    period: '2019 – Present',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    highlights: [
      'Founded and leads a multidisciplinary creative studio delivering world-class brand development, digital campaigns, and design solutions',
      'Supervises designers; oversees brand identity, UI/UX, motion graphics, and event design projects',
      'Collaborates with cross-border clients across Africa, Europe, and North America via remote workflows',
      'Led NBA Annual General Conference 2024 full brand campaign — the most watched legal event in Nigeria',
      'Managed JOPAG Logistics Ltd full branding including fleet design and digital identity',
      'Delivered UI/UX prototypes for U.S. & U.K. startups used in successful investor presentations',
    ],
  },
  {
    role: 'Freelance Graphics Designer',
    company: 'Independent / Remote & Onsite',
    period: '2015 – 2019',
    location: 'Nigeria + Global Remote',
    type: 'Freelance',
    highlights: [
      'Custom branding and digital campaigns for startups and SMEs across Africa, Europe, and North America',
      'Boosted client social media engagement by 35% through strategic creative content',
      'Brand identity packs for fashion, wellness, and tech brands in Europe and Africa',
      'Consistent 5★ rating on international freelance platforms throughout the period',
    ],
  },
]

const skills = [
  'Brand Identity & Logo Design',
  'Digital & Print Media',
  'UI/UX Wireframing & Prototyping',
  'Motion Graphics',
  'Social Media Content Design',
  'Pitch Deck & Presentation Design',
  'Event Marketing & Collateral',
  'Remote Team Collaboration',
  'Creative Direction',
  'Corporate Communications',
  'Product Branding',
  'Creative Strategy',
]

const technicalSkills = [
  { name: 'Adobe Photoshop', level: 98 },
  { name: 'Adobe Illustrator', level: 98 },
  { name: 'Figma', level: 92 },
  { name: 'Adobe InDesign', level: 90 },
  { name: 'Adobe After Effects', level: 85 },
  { name: 'CorelDRAW', level: 88 },
  { name: 'Adobe XD', level: 85 },
  { name: 'Blender (3D)', level: 70 },
  { name: 'Canva (Advanced)', level: 95 },
  { name: 'HTML & CSS', level: 65 },
]

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'National Open University of Nigeria',
    period: 'Completed',
    icon: GraduationCap,
  },
  {
    degree: 'Adobe Creative Suite Mastery Certification',
    institution: 'Adobe Authorized Partner',
    period: 'Certified',
    icon: Award,
  },
  {
    degree: 'UI/UX Design Fundamentals',
    institution: 'Coursera / Udemy',
    period: 'Certified',
    icon: Award,
  },
]

const achievements = [
  {
    title: 'NBA Annual General Conference 2024',
    detail: 'Featured Designer — led the complete visual brand campaign for Nigeria\'s premier legal conference',
    year: '2024',
  },
  {
    title: 'UI/UX for U.S. & U.K. Investor Pitches',
    detail: 'High-fidelity prototypes that contributed to successful seed funding rounds for multiple startups',
    year: '2022–2024',
  },
  {
    title: '5★ International Platform Rating',
    detail: 'Consistent top rating across all international freelance platform engagements',
    year: 'Ongoing',
  },
  {
    title: 'JOPAG Logistics — Fleet Branding',
    detail: 'Full brand identity including fleet vehicle wraps, uniforms, and digital assets',
    year: '2023',
  },
  {
    title: 'EcoFitness Hub Nigeria',
    detail: 'Complete brand identity system — logo, color, typography, and brand guidelines',
    year: '2023',
  },
  {
    title: '35% Social Engagement Increase',
    detail: 'Measurable boost in client social media performance through strategic creative content',
    year: '2015–2019',
  },
]

export function AboutPageContent() {
  return (
    <div className="bg-brand-black min-h-screen pt-32">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="section-padding container-wide pb-20">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
          <p className="section-label mb-4">Meet the Founder</p>
          <h1 className="font-display text-display md:text-[clamp(3rem,7vw,5rem)] text-white mb-4 leading-tight">
            Olayinka Samuel Ojo
          </h1>
          <p className="font-display text-xl md:text-2xl italic mb-6" style={{ color: '#5DC241' }}>
            Graphics Designer · Creative Director · Visual Brand Specialist
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8 font-sans text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {SITE.locationDetail}
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={13} className="text-brand-gold" />
              5★ International Rating
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={13} />
              8+ Years Experience
            </span>
          </div>
          <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
            Olayinka Samuel Ojo is a creative and results-driven Graphics Designer and Creative Director with 8+ years
            of experience crafting brand identities, digital marketing assets, UI/UX prototypes, and corporate
            communications for international clients.
          </p>
        </motion.div>
      </section>

      {/* ── Bio + Photo ──────────────────────────────── */}
      <section className="section-padding container-wide py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start border-t border-white/5">
        {/* Photo */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden gradient-border bg-brand-surface-2">
            {/* Placeholder — add /public/founder/olayinka.jpg */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-4" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)' }}>
              <div className="w-24 h-24 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <span className="font-display text-5xl text-brand-gold/30">O</span>
              </div>
              <p className="font-sans text-xs text-white/20 tracking-widest uppercase">Founder Photo</p>
              <p className="font-sans text-xs text-white/15">Add: /public/founder/olayinka.jpg</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-lg text-white">Olayinka Samuel Ojo</p>
              <p className="font-sans text-xs tracking-[0.15em] uppercase mt-0.5" style={{ color: '#5DC241' }}>
                Founder & Creative Director
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 w-20 h-20 border border-brand-gold/15 pointer-events-none" />

          {/* Quick contact */}
          <div className="mt-8 space-y-3">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors duration-300 group">
              <Phone size={14} />
              <span className="font-sans text-sm">{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors duration-300 group">
              <Mail size={14} />
              <span className="font-sans text-sm">{SITE.email}</span>
            </a>
            <a href={SITE.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors duration-300 group">
              <ArrowUpRight size={14} />
              <span className="font-sans text-sm">behance.net/litdesigns</span>
            </a>
          </div>
        </motion.div>

        {/* Full Bio */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-3xl text-white mb-4">The Story</h2>
            <p className="font-sans text-base text-white/60 leading-relaxed mb-4">
              Olayinka Samuel Ojo is the founder of Lit Creative Designs — a multidisciplinary creative studio delivering
              world-class brand development, digital campaigns, and design solutions for visionary businesses across
              Africa, Europe, and North America.
            </p>
            <p className="font-sans text-base text-white/55 leading-relaxed">
              With over 8 years of professional design experience, he has led brand campaigns for major Nigerian
              institutions, delivered UI/UX prototypes for funded international startups, and built a reputation
              for precision, creativity, and results-driven design across every discipline he touches.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-white mb-4">The Philosophy</h2>
            <p className="font-sans text-base text-white/60 leading-relaxed">
              Great design is never just visual — it&apos;s strategic. Every project begins with a fundamental
              question: what does success actually look like for this business? The aesthetics serve the answer,
              not the other way around. This is why clients see real results — measurable increases in brand recognition,
              social engagement, investor confidence, and market positioning.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-white mb-4">Global Reach from Abuja</h2>
            <p className="font-sans text-base text-white/60 leading-relaxed">
              Based in Abuja, Nigeria, Olayinka operates globally — collaborating with clients and teams across
              Africa, the United Kingdom, the United States, and Europe through seamless remote workflows. Lit Creative
              Designs is proof that world-class creative excellence has no geographic boundary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
            >
              Work With Me
              <ArrowUpRight size={12} />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/60 font-sans text-xs tracking-[0.2em] uppercase hover:border-brand-gold/30 hover:text-brand-gold transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Experience Timeline ───────────────────────── */}
      <section className="section-padding container-wide py-24 border-t border-white/5">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-14">
          <p className="section-label mb-4">Professional Experience</p>
          <h2 className="font-display text-heading text-white">
            8+ years of
            <span className="text-gradient-gold italic"> relentless craft.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experience.map((role, i) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pb-12 border-b border-white/5 last:border-0"
            >
              {/* Left — role info */}
              <div>
                <span className="inline-block px-2.5 py-1 font-sans text-[9px] tracking-widest uppercase bg-brand-gold/10 text-brand-gold mb-3">
                  {role.type}
                </span>
                <h3 className="font-display text-xl text-white mb-1">{role.role}</h3>
                <p className="font-sans text-sm text-brand-gold mb-1">{role.company}</p>
                <p className="font-sans text-xs text-white/30 mb-0.5">{role.period}</p>
                <p className="font-sans text-xs text-white/25">{role.location}</p>
              </div>

              {/* Right — highlights */}
              <ul className="md:col-span-2 space-y-2.5">
                {role.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-brand-gold mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-sm text-white/55 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Core Skills ───────────────────────────────── */}
      <section className="section-padding container-wide py-20 border-t border-white/5">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-10">
          <p className="section-label mb-4">Core Competencies</p>
          <h2 className="font-display text-heading text-white">Craft without limits.</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={staggerItem}
              className="px-4 py-2.5 border border-white/8 font-sans text-sm text-white/55 hover:border-brand-gold/30 hover:text-brand-gold/80 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ── Technical Skills ─────────────────────────── */}
      <section className="section-padding container-wide py-20 border-t border-white/5">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-10">
          <p className="section-label mb-4">Technical Skills</p>
          <h2 className="font-display text-heading text-white">Tools of the trade.</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 max-w-3xl">
          {technicalSkills.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-sm text-white/65">{tool.name}</span>
                <span className="font-sans text-xs text-white/30">{tool.level}%</span>
              </div>
              <div className="h-px w-full bg-white/8 overflow-hidden">
                <motion.div
                  className="h-full bg-brand-gold"
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.2, delay: i * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Key Achievements ─────────────────────────── */}
      <section className="section-padding container-wide py-20 border-t border-white/5">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-10">
          <p className="section-label mb-4">Key Achievements</p>
          <h2 className="font-display text-heading text-white">Work that moves the needle.</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              className="p-5 border border-white/5 hover:border-brand-gold/20 transition-colors duration-300 group"
            >
              <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gold/60 group-hover:text-brand-gold mb-3 transition-colors duration-300">
                {a.year}
              </p>
              <p className="font-sans text-sm font-medium text-white/80 mb-2">{a.title}</p>
              <p className="font-sans text-xs text-white/35 leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Education & Certifications ────────────────── */}
      <section className="section-padding container-wide py-20 border-t border-white/5">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-10">
          <p className="section-label mb-4">Education & Certifications</p>
          <h2 className="font-display text-heading text-white">Always learning.</h2>
        </motion.div>
        <div className="space-y-5 max-w-2xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 p-5 border border-white/5 hover:border-brand-gold/15 transition-colors duration-300 group"
            >
              <edu.icon size={18} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-medium text-white/80">{edu.degree}</p>
                <p className="font-sans text-xs text-white/35 mt-1">{edu.institution}</p>
                <p className="font-sans text-xs text-brand-gold/50 mt-0.5">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-padding container-wide py-24 border-t border-white/5 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready to work with Olayinka?
        </h2>
        <p className="font-sans text-base text-white/45 mb-8 max-w-lg mx-auto">
          Available for brand projects, UI/UX engagements, event design, and creative consulting — locally and globally.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 group"
          >
            Start a Conversation
            <ArrowUpRight size={12} />
          </Link>
          <a
            href={SITE.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/10 text-white/50 font-sans text-xs tracking-[0.2em] uppercase hover:border-brand-gold/30 hover:text-brand-gold transition-all duration-300"
          >
            View Behance Portfolio
            <ArrowUpRight size={12} />
          </a>
        </div>
      </section>
    </div>
  )
}
