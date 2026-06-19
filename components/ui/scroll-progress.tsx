"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "origin-left h-[2px] w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40",
        className,
      )}
    />
  )
}
