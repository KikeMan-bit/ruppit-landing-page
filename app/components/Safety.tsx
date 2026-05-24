"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import {
  ShieldCheck, BadgeCheck, KeyRound, Car, Users,
  Clock, Star, FileCheck, Phone, CheckCircle2,
} from "lucide-react"

/* ─── Verificación mock animada ─── */
const verifyItems = [
  { icon: Car,       label: "Placa del vehículo",  value: "BZT-3421",   delay: 0.2 },
  { icon: BadgeCheck,label: "Conductor verificado", value: "Carlos M.",   delay: 0.5 },
  { icon: KeyRound,  label: "Código Ruppit",         value: "7842",        delay: 0.8 },
  { icon: Users,     label: "Pasajeros acordados",  value: "2 personas",  delay: 1.1 },
]

/* ─── Features por tab ─── */
const tabs = [
  {
    id: "before",
    label: "Antes de subir",
    emoji: "🔍",
    features: [
      {
        icon: Phone,
        title: "Ve el perfil del conductor",
        desc: "Foto, nombre, calificación y datos del vehículo aparecen en tu pantalla antes de que llegue.",
      },
      {
        icon: Car,
        title: "Verifica la placa",
        desc: "Al llegar el auto, compara la placa real con la que muestra la app. Si no coincide, no subas.",
      },
      {
        icon: KeyRound,
        title: "Código Ruppit único",
        desc: "Cada viaje genera un código de 4 dígitos. Confírmalo con el conductor antes de arrancar.",
      },
      {
        icon: Users,
        title: "Tú controlas cuántos suben",
        desc: "Definiste el número de pasajeros al crear el viaje. El conductor sabe exactamente cuántos van.",
      },
    ],
  },
  {
    id: "during",
    label: "Durante el viaje",
    emoji: "🛣️",
    features: [
      {
        icon: Clock,
        title: "Tiempo de llegada en tiempo real",
        desc: "Ve cuántos minutos faltan para llegar a tu destino. Sin adivinar, sin incertidumbre.",
      },
      {
        icon: FileCheck,
        title: "Ruta registrada",
        desc: "Cada viaje queda registrado con ruta, hora de inicio y conductor. Trazabilidad completa.",
      },
      {
        icon: Phone,
        title: "Comparte tu viaje",
        desc: "Envía el enlace de seguimiento a un familiar o amigo para que vean tu trayecto en tiempo real.",
      },
      {
        icon: ShieldCheck,
        title: "Soporte en todo momento",
        desc: "Botón de ayuda siempre visible durante el viaje para contactar al equipo Ruppit al instante.",
      },
    ],
  },
  {
    id: "after",
    label: "Al finalizar",
    emoji: "✅",
    features: [
      {
        icon: Star,
        title: "Califica al conductor",
        desc: "Tu opinión ayuda a otros pasajeros. Los conductores con mejores calificaciones aparecen primero.",
      },
      {
        icon: FileCheck,
        title: "Recibo de cada viaje",
        desc: "Historial completo: ruta, precio, conductor y fecha. Siempre disponible en tu perfil.",
      },
      {
        icon: BadgeCheck,
        title: "Precio pactado, precio final",
        desc: "Lo que propusiste es lo que pagas. Sin cargos adicionales al llegar.",
      },
      {
        icon: Users,
        title: "Precio dividido entre pasajeros",
        desc: "Si viajaste acompañado, el costo se reparte automáticamente. Cada uno paga su parte justa.",
      },
    ],
  },
]

/* ─── Conductores verificados: requisitos visuales ─── */
const driverChecks = [
  "Identidad verificada con cédula boliviana",
  "Placa del vehículo registrada y validada",
  "Documentos del auto al día (SOAT, revisión técnica)",
  "Foto de perfil real y aprobada por Ruppit",
  "Historial de calificaciones visible para todos",
]

/* ─── Componente principal ─── */
export default function Safety() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
            Seguridad
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Tu seguridad,{" "}
            <span className="text-black">nuestra prioridad</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Cada viaje en Ruppit tiene múltiples capas de verificación para que
            tú y el conductor viajen con total confianza.
          </p>
        </motion.div>

        {/* Main grid: mock card + tabs */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">

          {/* Left — Verificación animada */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-72 bg-gray-950 rounded-3xl p-4 shadow-2xl shadow-black/30">
              <div className="bg-black rounded-2xl p-5">

                {/* Header card */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-gray-400 text-xs">Tu viaje</p>
                    <p className="text-white font-semibold text-sm mt-0.5">Verificación activa</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-green-400" />
                  </div>
                </div>

                {/* Verification items */}
                <div className="flex flex-col gap-3 mb-5">
                  {verifyItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delay, duration: 0.4 }}
                      className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <item.icon size={13} className="text-[#ffc300] shrink-0" />
                        <span className="text-gray-400 text-xs">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-xs font-semibold">{item.value}</span>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: item.delay + 0.2, type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle2 size={13} className="text-green-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Código Ruppit highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="bg-[#ffc300]/20 border border-[#ffc300]/30 rounded-xl p-3 mb-3"
                >
                  <p className="text-gray-400 text-xs mb-1">Código Ruppit del viaje</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {["7", "8", "4", "2"].map((d, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          className="w-8 h-9 bg-[#ffc300]/30 rounded-lg flex items-center justify-center text-white font-bold text-base"
                        >
                          {d}
                        </motion.span>
                      ))}
                    </div>
                    <span className="text-green-400 text-xs font-semibold">Confirmado ✓</span>
                  </div>
                </motion.div>

                {/* ETA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[#ffc300]" />
                    <span className="text-gray-400 text-xs">Tiempo de llegada</span>
                  </div>
                  <span className="text-white font-bold text-sm">3 min</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right — Tabs de seguridad */}
          <div>
            {/* Tab buttons */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeTab === i
                      ? "bg-[#ffc300] text-black shadow-md shadow-[#ffc300]/25"
                      : "bg-white border border-gray-200 text-gray-500 hover:border-[#ffc300]/40 hover:text-black"
                  }`}
                >
                  <span>{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4"
              >
                {tabs[activeTab].features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#ffc300]/20 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-black/8 flex items-center justify-center shrink-0 group-hover:bg-black/15 transition-colors">
                      <f.icon size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">{f.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Conductores verificados */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black rounded-3xl p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#ffc300]/20 flex items-center justify-center">
                  <BadgeCheck size={16} className="text-[#ffc300]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ffc300]">
                  Conductores verificados
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Cada conductor pasa por un proceso de verificación antes de activar su cuenta.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No cualquiera puede ser conductor en Ruppit. Revisamos identidad,
                vehículo y documentos antes de que aparezca en la app.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {driverChecks.map((check, i) => (
                <motion.div
                  key={check}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.35 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 size={15} className="text-green-400 shrink-0" />
                  <span className="text-gray-300 text-xs">{check}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
