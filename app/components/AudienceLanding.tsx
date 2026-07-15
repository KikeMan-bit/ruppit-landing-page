"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { ChevronDown, ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

/* ─────────────────── TYPES ─────────────────── */

export type Benefit = { icon: LucideIcon; title: string; desc: string }
export type LandingStep = { number: string; icon: React.ReactNode; title: string; desc: string }
export type Faq = { q: string; a: string }
export type HeroStat = { label: string; value: string; sub: string }
export type Cta = { label: string; href: string; external?: boolean; playBadge?: boolean }

export type AudienceLandingProps = {
  /** Texto pequeño en mayúsculas sobre el título (ej. "Para clientes") */
  eyebrow: string
  /** Contenido del <h1>; se pasa como JSX para permitir <br/> y <span> amarillos */
  title: React.ReactNode
  subtitle: string
  primaryCta?: Cta
  secondaryCta?: Cta
  /** Tarjetas flotantes a la derecha del hero */
  stats?: HeroStat[]
  benefitsEyebrow: string
  benefitsTitle: string
  benefits: Benefit[]
  stepsEyebrow: string
  stepsTitle: string
  steps: LandingStep[]
  /** Lista con checks (requisitos, categorías, seguridad…). Opcional. */
  checklist?: { eyebrow: string; title: string; subtitle?: string; items: string[] }
  faqEyebrow?: string
  faqTitle?: string
  faqs: Faq[]
  finalTitle: string
  finalText: string
  finalCta: Cta
}

/* ─────────────────── HELPERS ─────────────────── */

function isExternal(href: string) {
  return href.startsWith("http")
}

function CtaButton({ cta, variant }: { cta: Cta; variant: "primary" | "secondary" }) {
  // Botón que muestra la insignia de Google Play en vez de texto
  if (cta.playBadge) {
    return (
      <motion.a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        aria-label="Descárgala en Google Play"
      >
        <Image
          src="/logo-black-play-store.png"
          alt="Disponible en Google Play"
          width={646}
          height={250}
          className="h-16 w-auto sm:h-20"
        />
      </motion.a>
    )
  }

  const className =
    variant === "primary"
      ? "inline-flex items-center gap-2 bg-[#ffc300] hover:bg-[#e6a800] text-black font-bold px-8 py-4 rounded-full shadow-2xl shadow-[#ffc300]/40 transition-colors"
      : "inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium px-7 py-3.5 rounded-full transition-all"

  const external = isExternal(cta.href)

  return (
    <motion.a
      href={cta.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {cta.label}
      {variant === "primary" && <ArrowRight size={18} />}
    </motion.a>
  )
}

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} className="text-gray-600 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────── SCAFFOLD ─────────────────── */

export default function AudienceLanding({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  benefitsEyebrow,
  benefitsTitle,
  benefits,
  stepsEyebrow,
  stepsTitle,
  steps,
  checklist,
  faqEyebrow = "FAQ",
  faqTitle = "Preguntas frecuentes",
  faqs,
  finalTitle,
  finalText,
  finalCta,
}: AudienceLandingProps) {
  const hasStats = !!stats?.length

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-10 pt-20 pb-16 overflow-hidden bg-black">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#ffc300]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ffc300]/10 blur-3xl pointer-events-none" />

        <div
          className={
            hasStats
              ? "max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center"
              : "max-w-2xl mx-auto w-full"
          }
        >
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-5">
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                {title}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">{subtitle}</p>
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-wrap gap-3 items-center">
                  {primaryCta && <CtaButton cta={primaryCta} variant="primary" />}
                  {secondaryCta && <CtaButton cta={secondaryCta} variant="secondary" />}
                </div>
              )}
            </motion.div>
          </div>

          {/* Tarjetas flotantes */}
          {hasStats && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:flex flex-col gap-4 items-end"
            >
              {stats!.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  whileHover={{ x: -6 }}
                  className={`bg-linear-to-r ${
                    i === 0 ? "from-[#ffc300]/20 to-[#ffc300]/5" : "from-white/10 to-white/5"
                  } backdrop-blur border border-white/10 rounded-2xl px-6 py-4 w-64 shadow-lg`}
                >
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-2xl leading-none">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-3 block">
              {benefitsEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{benefitsTitle}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#ffc300]/40 hover:shadow-lg hover:shadow-[#ffc300]/10 transition-all duration-300 bg-gray-50"
              >
                <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-4 group-hover:bg-[#ffc300] transition-colors">
                  <b.icon size={20} className="text-[#ffc300] group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="py-20 sm:py-28 px-6 sm:px-10 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-3 block">
              {stepsEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{stepsTitle}</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 h-px border-t-2 border-dashed border-[#ffc300]/20"
              style={{ left: "12.5%", right: "12.5%" }}
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-5 z-10">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-16 h-16 rounded-full bg-white/8 border-2 border-[#ffc300]/20 flex items-center justify-center shadow-sm group-hover:border-[#ffc300]/50 group-hover:shadow-[0_0_20px_rgba(255,195,0,0.15)] transition-all duration-300 text-[#ffc300]"
                  >
                    {step.icon}
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ffc300] flex items-center justify-center ring-2 ring-black">
                    <span className="text-black text-[9px] font-black">{step.number}</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#ffc300]/25"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ── */}
      {checklist && (
        <section className="py-20 sm:py-24 px-6 sm:px-10 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-3 block">
                {checklist.eyebrow}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">{checklist.title}</h2>
              {checklist.subtitle && <p className="text-gray-500 text-sm">{checklist.subtitle}</p>}
            </motion.div>
            <div className="flex flex-col gap-3 text-left">
              {checklist.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3.5 border border-gray-100"
                >
                  <CheckCircle2 size={16} className="text-[#ffc300] shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 bg-black border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-3 block">{faqEyebrow}</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">{faqTitle}</h2>
          </motion.div>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-28 px-6 bg-black text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ffc300]/10 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">{finalTitle}</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">{finalText}</p>
          <CtaButton cta={finalCta} variant="primary" />
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
