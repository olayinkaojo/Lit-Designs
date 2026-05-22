'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Calendar, ArrowUpRight, Send, CheckCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

const services = [
  'Brand Identity', 'UI/UX Design', 'Web Design', 'Mobile App',
  '3D Design', 'Motion Graphics', 'Social Media', 'Other',
]

const budgets = [
  'Under ₦500K', '₦500K – ₦1M', '₦1M – ₦5M', '₦5M+',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactPageContent() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState('')

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')
    // Placeholder — wire up to your preferred form handler (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('success')
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message us directly',
      href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`,
    },
    {
      icon: Calendar,
      label: 'Book a Call',
      value: 'Schedule 30 minutes',
      href: SITE.calendly,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: SITE.location,
      href: '#',
    },
  ]

  return (
    <div className="bg-brand-black min-h-screen pt-32">
      {/* Hero */}
      <section className="section-padding container-wide pb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="font-display text-display text-white mb-6">
            Let&apos;s build something
            <br />
            <span className="text-gradient-gold italic">extraordinary.</span>
          </h1>
          <p className="font-sans text-base text-white/55 leading-relaxed">
            Whether you have a fully-formed brief or just an idea on a napkin — we&apos;d love to hear from you. No
            pitch decks required. Just tell us what you&apos;re trying to build.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="section-padding container-wide py-10 grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20">
        {/* Contact methods — sidebar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:col-span-1 space-y-4"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/30 mb-6">Contact Methods</p>

          {contactMethods.map((m) => (
            <motion.a
              key={m.label}
              variants={staggerItem}
              href={m.href}
              target={m.href.startsWith('http') ? '_blank' : undefined}
              rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-start gap-4 p-4 border border-white/5 hover:border-brand-gold/20 transition-all duration-300 block"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 flex-shrink-0 transition-colors duration-300">
                <m.icon size={15} className="text-white/40 group-hover:text-brand-gold transition-colors duration-300" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/30 tracking-wider uppercase mb-0.5">{m.label}</p>
                <p className="font-sans text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                  {m.value}
                </p>
              </div>
            </motion.a>
          ))}

          {/* Response time */}
          <div className="mt-8 p-4 bg-brand-gold/5 border border-brand-gold/15">
            <p className="font-sans text-xs text-brand-gold/80 leading-relaxed">
              We typically respond within 24 hours on business days. For urgent projects, WhatsApp is fastest.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:col-span-2"
        >
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-20 border border-brand-gold/20"
            >
              <CheckCircle size={40} className="text-brand-gold mb-6" />
              <h2 className="font-display text-3xl text-white mb-4">Message Received</h2>
              <p className="font-sans text-base text-white/55 max-w-sm mb-8">
                Thank you for reaching out. We&apos;ll review your brief and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold hover:text-brand-gold-light transition-colors duration-300"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2">
                      {f.label} {f.required && <span className="text-brand-gold">*</span>}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      className="w-full bg-brand-surface border border-white/10 focus:border-brand-gold/40 outline-none px-4 py-3 font-sans text-sm text-white placeholder:text-white/25 transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Company + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'company', label: 'Company / Brand', type: 'text', placeholder: 'Your Company Ltd', required: false },
                  { id: 'phone', label: 'Phone (Optional)', type: 'tel', placeholder: '+234 xxx xxx xxxx', required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      className="w-full bg-brand-surface border border-white/10 focus:border-brand-gold/40 outline-none px-4 py-3 font-sans text-sm text-white placeholder:text-white/25 transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Services */}
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-3">
                  Services Needed <span className="text-brand-gold">*</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`px-4 py-2 font-sans text-xs tracking-[0.12em] uppercase transition-all duration-300 ${
                        selectedServices.includes(s)
                          ? 'bg-brand-gold text-brand-black'
                          : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-3">Budget Range</p>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b === selectedBudget ? '' : b)}
                      className={`px-4 py-2 font-sans text-xs tracking-[0.12em] uppercase transition-all duration-300 ${
                        selectedBudget === b
                          ? 'bg-brand-gold text-brand-black'
                          : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2">
                  Project Brief <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project — what you're building, what you need, and what success looks like..."
                  className="w-full bg-brand-surface border border-white/10 focus:border-brand-gold/40 outline-none px-4 py-3 font-sans text-sm text-white placeholder:text-white/25 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2">
                  Desired Timeline
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  placeholder="e.g. 4 weeks, end of June, ASAP"
                  className="w-full bg-brand-surface border border-white/10 focus:border-brand-gold/40 outline-none px-4 py-3 font-sans text-sm text-white placeholder:text-white/25 transition-colors duration-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-gold text-brand-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <span className="w-3 h-3 border border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Brief
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  )
}
