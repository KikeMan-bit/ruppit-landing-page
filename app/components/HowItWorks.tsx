"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { MapPin, Users, HandCoins, CarFront, Smartphone, Eye, ThumbsUp, Wallet } from "lucide-react"

type Step = {
  number: string
  icon: React.ReactNode
  title: string
  desc: string
}

const passengerSteps: Step[] = [
  {
    number: "01",
    icon: <MapPin size={24} />,
    title: "Ingresa tu destino",
    desc: "Abre Ruppit, escribe a dónde quieres ir y la app calcula la ruta al instante.",
  },
  {
    number: "02",
    icon: <Users size={24} />,
    title: "Elige cuántos viajan",
    desc: "¿Solo o en grupo? Selecciona el número de pasajeros para dividir el costo entre todos.",
  },
  {
    number: "03",
    icon: <HandCoins size={24} />,
    title: "Propón tu tarifa",
    desc: "Tú decides cuánto pagar. Pon el precio que consideres justo y lanza tu oferta.",
  },
  {
    number: "04",
    icon: <CarFront size={24} />,
    title: "Un conductor acepta",
    desc: "Un conductor acepta tu precio. Ve su perfil y el tiempo de llegada en tiempo real.",
  },
]

const driverSteps: Step[] = [
  {
    number: "01",
    icon: <Smartphone size={24} />,
    title: "Descarga la app",
    desc: "Regístrate, sube tus documentos y espera la verificación de identidad en minutos.",
  },
  {
    number: "02",
    icon: <Eye size={24} />,
    title: "Ve las ofertas",
    desc: "Explora los viajes disponibles cerca tuyo y ve la tarifa que propone cada pasajero.",
  },
  {
    number: "03",
    icon: <ThumbsUp size={24} />,
    title: "Acepta lo que te conviene",
    desc: "Solo tú decides qué viajes tomar. Sin presión ni asignaciones forzadas.",
  },
  {
    number: "04",
    icon: <Wallet size={24} />,
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
  const [activeStep, setActiveStep] = useState(0)
  const [mounted, setMounted] = useState(false)
  const reduceMotion = useReducedMotion()
  // Solo animamos tras el montaje para que el HTML del servidor y el del
  // primer render del cliente coincidan (evita el error de hidratación).
  const animate = mounted && !reduceMotion

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const handleTabChange = (tab: "passengers" | "drivers") => {
    setDirection(tab === "drivers" ? 1 : -1)
    setActiveTab(tab)
    setActiveStep(0)
  }

  const activeSteps = activeTab === "passengers" ? passengerSteps : driverSteps
  // Porcentaje de la línea de progreso según el paso activo (0 → 100%)
  const progress = (activeStep / (activeSteps.length - 1)) * 100

  // Avance automático que recorre los pasos (corre siempre, aun con
  // "reducir movimiento": es la función principal, no una decoración).
  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % 4)
    }, 5000)
    return () => clearInterval(id)
  }, [activeTab])

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      {/* Patrón de puntos con desvanecido */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background:radial-gradient(circle,rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,#000_30%,transparent_75%)]"
      />
      {/* Glow primario superior */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-black mb-4 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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
          className="flex justify-center mb-16"
        >
          <div className="relative flex bg-gray-100 rounded-full p-1 gap-1 shadow-inner">
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
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-5"
          >
            {/* Conector con progreso — solo desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 h-[2px] pointer-events-none"
              style={{ left: "12.5%", right: "12.5%" }}
            >
              {/* Línea base punteada */}
              <div className="absolute inset-0 border-t-2 border-dashed border-black/15" />
              {/* Relleno que se pinta hasta el paso actual */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-[#ffd84d]"
                initial={{ width: "0%" }}
                animate={{ width: mounted ? `${progress}%` : "0%" }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeInOut" }}
              />
              {/* Punto de progreso en el borde de avance */}
              {mounted && (
                <motion.div
                  className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-2 ring-white shadow-[0_0_14px_4px_rgba(255,195,0,0.7)]"
                  initial={{ left: "0%" }}
                  animate={{ left: `${progress}%` }}
                  transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeInOut" }}
                />
              )}
            </div>

            {activeSteps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative flex h-full flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-5 z-10">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.12 : 1,
                        boxShadow: isActive
                          ? "0 0 28px rgba(255,195,0,0.45)"
                          : "0 1px 2px rgba(0,0,0,0.08)",
                      }}
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary border-primary text-black"
                          : "bg-black border-black text-primary group-hover:border-primary/60"
                      }`}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ffc300] flex items-center justify-center ring-2 ring-white">
                      <span className="text-black text-[9px] font-black leading-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Pulse ring — solo en el paso activo */}
                    {isActive && animate && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </div>

                  {/* Card con texto — altura uniforme + borde animado */}
                  <motion.div
                    animate={{ y: isActive ? -6 : 0 }}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="relative w-full flex-1"
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden rounded-2xl p-[1.5px] transition-colors duration-300 ${
                        isActive ? "bg-primary/30" : "bg-gray-200/70"
                      }`}
                    >
                      {/* Borde giratorio (solo paso activo) */}
                      {isActive && animate && (
                        <motion.span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[180%] -translate-x-1/2 -translate-y-1/2"
                          style={{
                            background:
                              "conic-gradient(from 0deg, transparent 0deg, #ffc300 70deg, #fff3c4 110deg, transparent 160deg, transparent 360deg)",
                          }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      {/* Contenido */}
                      <div
                        className={`relative z-10 flex h-full flex-col justify-center rounded-[15px] px-5 py-6 transition-shadow duration-300 ${
                          isActive
                            ? "bg-white shadow-[0_18px_40px_-12px_rgba(255,195,0,0.4)]"
                            : "bg-white/80 shadow-sm group-hover:shadow-xl"
                        }`}
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
