"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Color del foco (cualquier valor CSS). */
  color?: string
  /** Tamaño del foco en px. */
  size?: number
}

/**
 * Foco radial que sigue al cursor con un leve retraso elástico.
 * Se monta como capa absoluta (sin capturar eventos) dentro de un contenedor `relative`.
 */
export function MouseSpotlight({
  className,
  color = "rgba(255,195,0,0.12)",
  size = 500,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 })

  useEffect(() => {
    if (reduceMotion) return

    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (inside) {
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      } else {
        x.set(-9999)
        y.set(-9999)
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [reduceMotion, x, y])

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
          background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        }}
      />
    </div>
  )
}
