"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import Navbar from "../components/Navbar"
import { useState } from "react"
import {
  CarFront, Clock3, TrendingUp, ShieldCheck, Star,
  CheckCircle2, ChevronDown, ArrowRight,
  Smartphone, MapPin, Wallet, BadgeCheck,
} from "lucide-react"

/* ─────────────────── DATA ─────────────────── */

const benefits = [
  { icon: CarFront,    title: "Tú decides",          desc: "Acepta solo los viajes que quieras. Sin presión ni asignaciones forzadas." },
  { icon: Clock3,      title: "Tu horario",           desc: "Maneja de lunes a domingo, de día o de noche. La app nunca duerme." },
  { icon: TrendingUp,  title: "Tarifas libres",       desc: "Los pasajeros proponen el precio. En horas pico, las ofertas suben solas." },
  { icon: ShieldCheck, title: "Pagos seguros",        desc: "Cada viaje queda registrado. Cobras al finalizar, sin intermediarios." },
  { icon: BadgeCheck,  title: "Perfil verificado",    desc: "Tu verificación genera confianza y más pasajeros eligen conductores con badge." },
  { icon: Smartphone,  title: "App intuitiva",        desc: "Interfaz simple. En minutos ya estás recibiendo ofertas de viaje." },
]

const steps = [
  { emoji: "📲", number: "01", title: "Descarga la app",         desc: "Disponible para Android e iOS muy pronto." },
  { emoji: "📋", number: "02", title: "Crea tu perfil",          desc: "Sube tu foto, documentos del vehículo e identidad." },
  { emoji: "✅", number: "03", title: "Espera la verificación",  desc: "Revisamos tu info en minutos y activamos tu cuenta." },
  { emoji: "💵", number: "04", title: "Empieza a ganar",         desc: "Ve las ofertas cercanas y acepta las que te convengan." },
]

const requirements = [
  "Licencia de conducir vigente",
  "Vehículo en buen estado (año 2010 en adelante)",
  "Cédula de identidad boliviana",
  "Teléfono inteligente con internet",
  "Seguro del vehículo al día",
]

const faqs = [
  {
    q: "¿Cuánto cobra Ruppit de comisión?",
    a: "Ruppit opera con una comisión baja y transparente. La conocerás antes de activar tu cuenta — sin cargos sorpresa.",
  },
  {
    q: "¿Cuándo recibo mis ganancias?",
    a: "Recibes el pago al finalizar cada viaje. No hay retención semanal ni esperas.",
  },
  {
    q: "¿En qué ciudades opera Ruppit?",
    a: "Comenzamos en Camiri, Bolivia, con expansión planeada a más ciudades en el corto plazo.",
  },
  {
    q: "¿Puedo manejar con cualquier vehículo?",
    a: "Aceptamos autos particulares, pickups, minivans y mototaxis. El vehículo debe tener documentación al día.",
  },
  {
    q: "¿Qué pasa si el pasajero cancela?",
    a: "La política de cancelación protege tu tiempo. Los detalles completos estarán disponibles al momento del lanzamiento.",
  },
]

/* ─────────────────── COMPONENTS ─────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200/60">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm font-semibold text-gray-800 group-hover:text-black transition-colors">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} className="text-gray-400 shrink-0" />
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

/* ─────────────────── PAGE ─────────────────── */

export default function DriverLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-10 pt-20 pb-16 overflow-hidden bg-black">

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#ffc300]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ffc300]/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-5">
                Para conductores
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                Maneja con<br />
                <span className="text-[#ffc300]">Ruppit.</span><br />
                Tú pones<br className="hidden sm:block" /> las reglas.
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                Sin jefes, sin horarios fijos. Acepta los viajes que quieras,
                cuando quieras, y cobra al finalizar cada uno.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/conductores">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-[#ffc300] hover:bg-[#e6a800] text-black font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-[#ffc300]/30 transition-colors"
                  >
                    Quiero registrarme
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <a href="#como-funciona">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium px-7 py-3.5 rounded-full transition-all"
                  >
                    Cómo funciona
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            {[
              { label: "Viajes disponibles ahora", value: "12", sub: "cerca de ti", color: "from-[#ffc300]/20 to-[#ffc300]/5" },
              { label: "Tiempo promedio de espera", value: "3 min", sub: "para tu primer viaje", color: "from-white/10 to-white/5" },
              { label: "Tarifa promedio en Camiri", value: "Bs. 18", sub: "por viaje corto", color: "from-white/10 to-white/5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: -6 }}
                className={`bg-gradient-to-r ${stat.color} backdrop-blur border border-white/10 rounded-2xl px-6 py-4 w-64 shadow-lg`}
              >
                <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                <p className="text-white font-bold text-2xl leading-none">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
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
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">Beneficios</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              ¿Por qué manejar con Ruppit?
            </h2>
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
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#ffc300]/30 hover:shadow-lg hover:shadow-[#ffc300]/5 transition-all duration-300 bg-white"
              >
                <div className="w-11 h-11 rounded-xl bg-black/8 flex items-center justify-center mb-4 group-hover:bg-black/15 transition-colors">
                  <b.icon size={20} className="text-black" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="py-20 sm:py-28 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">Proceso</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Empieza en 4 pasos
            </h2>
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
                    className="w-16 h-16 rounded-full bg-white border-2 border-[#ffc300]/20 flex items-center justify-center shadow-sm group-hover:border-[#ffc300]/50 group-hover:shadow-[0_0_20px_rgba(255,195,0,0.12)] transition-all duration-300"
                  >
                    <span className="text-2xl">{step.emoji}</span>
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ffc300] flex items-center justify-center ring-2 ring-white">
                    <span className="text-black text-[9px] font-black">{step.number}</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#ffc300]/25"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">Requisitos</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">¿Qué necesitas?</h2>
            <p className="text-gray-500 text-sm">Pocos requisitos, proceso rápido.</p>
          </motion.div>
          <div className="flex flex-col gap-3 text-left">
            {requirements.map((req, i) => (
              <motion.div
                key={req}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3.5 border border-gray-100"
              >
                <CheckCircle2 size={16} className="text-black shrink-0" />
                <span className="text-sm text-gray-700">{req}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Preguntas frecuentes</h2>
          </motion.div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-28 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ffc300]/10 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Regístrate ahora y sé de los primeros conductores en Ruppit cuando lancemos en Camiri.
          </p>
          <Link href="/conductores">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#ffc300] hover:bg-[#e6a800] text-black font-bold px-9 py-4 rounded-full shadow-2xl shadow-[#ffc300]/40 transition-colors text-base"
            >
              Quiero ser conductor
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer simple */}
      <footer className="bg-gray-950 px-6 py-6 text-center">
        <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-gray-600">
          <Link href="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          <Link href="/conductores" className="hover:text-gray-400 transition-colors">Pre-registro</Link>
          <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacidad</Link>
          <Link href="/terms-and-conditions" className="hover:text-gray-400 transition-colors">Términos</Link>
        </div>
        <p className="text-gray-700 text-xs mt-4">© 2026 Ruppit. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
