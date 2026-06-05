"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

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

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${bgClass}`}>
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl mx-auto">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="Ruppit" width={100} height={100} priority />
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/" className={`text-sm font-medium transition-colors min-h-[44px] flex items-center px-3 ${linkClass}`}>
            Inicio
          </Link>
          <Link href="/driver" className={`text-sm font-medium transition-colors min-h-[44px] flex items-center px-3 ${linkClass}`}>
            Conductores
          </Link>
          <button className="bg-primary text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e6a800] transition-colors min-h-[44px]">
            Próximamente
          </button>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            // Ícono X
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Ícono hamburguesa
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } ${pastHero ? "bg-white/95" : "bg-black/95"} backdrop-blur-md`}
      >
        <div className="flex flex-col items-start gap-1 px-6 pb-6 pt-2">
          <Link
            href="/"
            className={`text-base font-medium transition-colors min-h-[48px] flex items-center w-full ${linkClass}`}
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/driver"
            className={`text-base font-medium transition-colors min-h-[48px] flex items-center w-full ${linkClass}`}
            onClick={() => setMenuOpen(false)}
          >
            Conductores
          </Link>
          <button
            className="mt-2 bg-primary text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#e6a800] transition-colors w-full"
            onClick={() => setMenuOpen(false)}
          >
            Próximamente
          </button>
        </div>
      </div>
    </header>
  )
}
