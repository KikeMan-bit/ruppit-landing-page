"use client"

import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import Image from "next/image"

const points = [
  {
    number: "01",
    title: "Propón tu precio",
    desc: "Tú decides cuánto pagar antes de solicitar el viaje. Sin tarifas impuestas ni algoritmos ocultos.",
  },
  {
    number: "02",
    title: "Elige cuántos van",
    desc: "Viaja solo o divide el costo entre amigos y familia. Control total desde el primer toque.",
  },
  {
    number: "03",
    title: "Llega seguro",
    desc: "Conductores verificados con perfil completo, calificaciones reales y viaje registrado.",
  },
]

export default function AppShowcase() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — illustration + decoration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          {/* Sparkle decorations */}
          <motion.div
            animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-6 text-primary"
          >
            <Sparkles size={22} />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -12, 8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 left-2 text-primary/50"
          >
            <Sparkles size={14} />
          </motion.div>

          <Image
            src="/illustator/passenger.png"
            alt="Pasajero usando Ruppit"
            width={480}
            height={480}
            className="relative w-[300px] sm:w-[380px] lg:w-[440px] h-auto select-none"
            priority
          />
        </motion.div>

        {/* Right — content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Para pasajeros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Viaja en tus términos.{" "}
              <span className="italic">Siempre.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
              Ruppit te da el control total sobre cada viaje: el precio,
              los pasajeros y el conductor. Simple, justo y transparente.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:border-primary/30 transition-colors duration-200"
              >
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black text-xs font-black shrink-0 mt-0.5">
                  {p.number}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-0.5">{p.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
