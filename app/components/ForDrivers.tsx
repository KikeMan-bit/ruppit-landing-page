"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { CheckCircle2, CarFront, Clock3, TrendingUp, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: CarFront,
    title: "Tú decides qué viajes aceptar",
    desc: "Ninguna asignación forzada. Ves la tarifa antes de aceptar.",
  },
  {
    icon: Clock3,
    title: "Sin jefes ni horarios fijos",
    desc: "Maneja cuando quieras. La app funciona 24/7 para ti.",
  },
  {
    icon: TrendingUp,
    title: "Gana más en horas pico",
    desc: "Los pasajeros proponen tarifas más altas cuando más te necesitan.",
  },
  {
    icon: ShieldCheck,
    title: "Pagos seguros y puntuales",
    desc: "Cada viaje queda registrado. Cobra sin sorpresas ni retenciones.",
  },
]

export default function ForDrivers() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffc300] mb-4">
                Para conductores
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight tracking-tight">
                ¿Tienes auto?{" "}
                <span className="text-[#ffc300]">Genera ingresos</span>{" "}
                con Ruppit.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Únete a la red de conductores independientes de Ruppit y empieza a generar
                ingresos desde el primer día — en tus propios términos.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="flex flex-col gap-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-[#ffc300]/15 border border-[#ffc300]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ffc300]/25 transition-colors duration-300">
                    <b.icon size={16} className="text-[#ffc300]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-snug">{b.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 bg-[#ffc300] hover:bg-[#e6a800] text-black font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#ffc300]/30 transition-colors duration-200"
              >
                Quiero ser conductor
                <CheckCircle2 size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right — decorative card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-72">

              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#ffc300]/20 blur-3xl scale-110" />

              {/* Card: viaje activo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 mb-4 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Viaje disponible</span>
                  <span className="text-xs bg-green-500/20 text-green-400 font-semibold px-2 py-0.5 rounded-full">Nuevo</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg leading-none">Bs. 15</p>
                    <p className="text-gray-400 text-xs mt-1">Plaza → Terminal • 2.3 km</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#ffc300] text-black text-xs font-semibold px-4 py-2 rounded-full"
                  >
                    Aceptar
                  </motion.button>
                </div>
              </motion.div>

              {/* Card: ganancias del día */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 shadow-xl"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Tus ganancias hoy</p>
                <p className="text-white font-bold text-2xl">Bs. 187</p>
                <div className="mt-3 flex gap-2">
                  {[40, 65, 50, 80, 55, 72, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                      style={{ height: `${h}%`, originY: 1 }}
                      className="flex-1 rounded-sm bg-[#ffc300]/60"
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-2">Últimas 7 horas</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
