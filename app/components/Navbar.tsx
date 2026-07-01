"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Magnetic } from "@/components/ui/magnetic"
import { PLAY_STORE_URL } from "@/lib/constants"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/driver", label: "Conductores" },
]

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const heroHeight = typeof window !== "undefined" ? window.innerHeight * 0.9 : 700

  const pastHero = isHome && scrollY > heroHeight
  const scrolled = scrollY > 20

  const bgClass = pastHero
    ? "bg-white/90 backdrop-blur-md shadow-sm"
    : scrolled || menuOpen
    ? "bg-black/90 backdrop-blur-md"
    : "bg-transparent"

  const linkClass = pastHero
    ? "text-gray-600 hover:text-black"
    : "text-white/80 hover:text-white"

  const logo = pastHero ? "/logo.webp" : "/logo-sec.webp"

  // Color del ícono hamburguesa / X
  const iconColor = pastHero ? "#111" : "#fff"

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${bgClass}`}
    >
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl mx-auto">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Image src={logo} alt="Ruppit" width={100} height={100} priority />
          </motion.div>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors min-h-[44px] flex items-center px-3 ${linkClass}`}
            >
              {link.label}
              <span className="pointer-events-none absolute bottom-2 left-3 right-3 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
          <Magnetic strength={0.5}>
            <motion.a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden bg-primary text-black px-5 py-2 rounded-full text-sm font-medium min-h-[44px] inline-flex items-center shadow-[0_0_0_0_rgba(255,195,0,0.5)] hover:shadow-[0_0_24px_0_rgba(255,195,0,0.45)] transition-shadow"
              aria-label="Pre-descárgala en Google Play"
            >
              <span className="relative z-10">Pre-descarga</span>
              {/* Brillo que cruza el botón */}
              <motion.span
                className="absolute top-0 bottom-0 w-12 -skew-x-12 bg-white/50 blur-md"
                initial={{ left: "-30%" }}
                animate={{ left: ["-30%", "130%"] }}
                transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.6 }}
              />
            </motion.a>
          </Magnetic>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {/* Hamburguesa animada → X */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round">
            <motion.line
              x1="3" y1="6" x2="21" y2="6"
              animate={menuOpen ? { rotate: 45, y: 6, x: 0 } : { rotate: 0, y: 0 }}
              style={{ originX: "12px", originY: "6px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.line
              x1="3" y1="12" x2="21" y2="12"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.line
              x1="3" y1="18" x2="21" y2="18"
              animate={menuOpen ? { rotate: -45, y: -6, x: 0 } : { rotate: 0, y: 0 }}
              style={{ originX: "12px", originY: "18px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </button>
      </nav>

      {/* Barra de progreso de scroll */}
      <ScrollProgress className="absolute bottom-0 inset-x-0" />

      {/* Menú mobile desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden ${pastHero ? "bg-white/95" : "bg-black/95"} backdrop-blur-md`}
          >
            <div className="flex flex-col items-start gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-colors min-h-[48px] flex items-center w-full ${linkClass}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.07, duration: 0.3 }}
                className="mt-2 bg-primary text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#e6a800] transition-colors w-full text-center"
                onClick={() => setMenuOpen(false)}
                aria-label="Pre-descárgala en Google Play"
              >
                Pre-descarga
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
