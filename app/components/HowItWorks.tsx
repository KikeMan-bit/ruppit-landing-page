"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

type Step = {
  number: string
  emoji: string
  title: string
  desc: string
}

const passengerSteps: Step[] = [
  {
    number: "01",
    emoji: "📍",
    title: "Ingresa tu destino",
    desc: "Abre Ruppit, escribe a dónde quieres ir y la app calcula la ruta al instante.",
  },
  {
    number: "02",
    emoji: "👥",
    title: "Elige cuántos viajan",
    desc: "¿Solo o en grupo? Selecciona el número de pasajeros para dividir el costo entre todos.",
  },
  {
    number: "03",
    emoji: "💰",
    title: "Propón tu tarifa",
    desc: "Tú decides cuánto pagar. Pon el precio que consideres justo y lanza tu oferta.",
  },
  {
    number: "04",
    emoji: "✅",
    title: "Un conductor acepta",
    desc: "Un conductor acepta tu precio. Ve su perfil y el tiempo de llegada en tiempo real.",
  },
]

const driverSteps: Step[] = [
  {
    number: "01",
    emoji: "📲",
    title: "Descarga la app",
    desc: "Regístrate, sube tus documentos y espera la verificación de identidad en minutos.",
  },
  {
    number: "02",
    emoji: "👀",
    title: "Ve las ofertas",
    desc: "Explora los viajes disponibles cerca tuyo y ve la tarifa que propone cada pasajero.",
  },
  {
    number: "03",
    emoji: "✅",
    title: "Acepta lo que te conviene",
    desc: "Solo tú decides qué viajes tomar. Sin presión ni asignaciones forzadas.",
  },
  {
    number: "04",
    emoji: "💵",
    title: "Cobra al finalizar",
    desc: "Recibe tu pago al terminar el viaje. Sin descuentos ocultos ni comisiones sorpresa.",
  },
]

const tabs = [
  { id: "passengers" as const, label: "Soy pasajero" },
  { id: "drivers" as const, label: "Soy conductor" },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"passengers" | "drivers">("passengers")
  const [direction, setDirection] = useState(1)

  const handleTabChange = (tab: "passengers" | "drivers") => {
    setDirection(tab === "drivers" ? 1 : -1)
    setActiveTab(tab)
  }

  const activeSteps = activeTab === "passengers" ? passengerSteps : driverSteps

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-black mb-3">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            ¿Cómo funciona Ruppit?
          </h2>
          <p className="text-gray-500 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
            Simple, rápido y transparente. En 4 pasos estás viajando o generando ingresos.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="relative flex bg-gray-100 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 z-10"
                style={{ color: activeTab === tab.id ? "#000000" : "#6B7280" }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-[#ffc300] rounded-full shadow-sm"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          >
            {/* Connecting dashed line — desktop only */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 h-px border-t-2 border-dashed border-[#ffc300]/20"
              style={{ left: "12.5%", right: "12.5%" }}
            />

            {activeSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-5 z-10">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-white border-2 border-[#ffc300]/20 flex items-center justify-center shadow-sm group-hover:border-[#ffc300]/50 group-hover:shadow-[0_0_20px_rgba(255,195,0,0.15)] transition-all duration-300"
                  >
                    <span className="text-2xl select-none">{step.emoji}</span>
                  </motion.div>

                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ffc300] flex items-center justify-center ring-2 ring-white">
                    <span className="text-black text-[9px] font-black leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#ffc300]/30"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Text */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
