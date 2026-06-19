"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

// Fecha de lanzamiento: 1 de julio de 2026, 00:00 (hora de Bolivia, UTC-4)
const LAUNCH_DATE = new Date("2026-07-01T00:00:00-04:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
]

function FlipDigit({ value }: { value: string }) {
  return (
    <div className="relative inline-block overflow-hidden tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function TimeCard({ value, label }: { value: number; label: string }) {
  const padded = value.toString().padStart(2, "0")

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative group">
        {/* Glow detrás de la tarjeta */}
        <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Tarjeta glass */}
        <div className="relative flex items-center justify-center w-16 h-20 sm:w-24 sm:h-28 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] overflow-hidden">
          {/* Reflejo superior */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          {/* Línea divisoria central tipo flip-clock */}
          <div className="absolute top-1/2 inset-x-0 h-px bg-black/40 -translate-y-px pointer-events-none" />

          <div className="flex text-3xl sm:text-5xl font-bold text-white tracking-tight tabular-nums leading-none">
            <FlipDigit value={padded[0]} />
            <FlipDigit value={padded[1]} />
          </div>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft())
    // Primer valor en el próximo frame (evita setState síncrono en el efecto
    // y el desajuste de hidratación del export estático).
    const raf = requestAnimationFrame(tick)
    const interval = setInterval(tick, 1000)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(interval)
    }
  }, [])

  const launched =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0

  return (
    <div className="flex flex-col items-center">
      {/* Etiqueta de lanzamiento */}
      <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold">
          {launched ? "¡Ya estamos en vivo!" : "Lanzamiento · 1 de julio"}
        </span>
      </div>

      {launched ? (
        <p className="text-2xl sm:text-3xl font-bold text-white">
          ¡Ruppit ya está disponible! 🎉
        </p>
      ) : (
        <div className="flex items-start gap-2 sm:gap-4">
          {units.map((unit, i) => (
            <div key={unit.key} className="flex items-start gap-2 sm:gap-4">
              <TimeCard
                value={timeLeft ? timeLeft[unit.key] : 0}
                label={unit.label}
              />
              {i < units.length - 1 && (
                <span className="text-2xl sm:text-4xl font-bold text-primary/40 leading-none mt-5 sm:mt-9 select-none">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
