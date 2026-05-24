"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const DARK_BG_ROUTES = ["/conductores", "/driver"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const startsOnDark = DARK_BG_ROUTES.some((r) => pathname.startsWith(r))

  useEffect(() => {
    const threshold = startsOnDark ? window.innerHeight * 0.85 : 20
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [startsOnDark])

  const linkClass =
    scrolled || !startsOnDark
      ? "text-gray-600 hover:text-black"
      : "text-white/80 hover:text-white"

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : startsOnDark
          ? "bg-black"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl mx-auto">
        <Link href="/">
          <Image
            src={!scrolled && startsOnDark ? "/logo-sec.webp" : "/logo.webp"}
            alt="Ruppit"
            width={100}
            height={100}
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/" className={`text-sm font-medium transition-colors min-h-[44px] flex items-center px-3 ${linkClass}`}>
            Inicio
          </Link>
          <Link href="/driver" className={`text-sm font-medium transition-colors min-h-[44px] flex items-center px-3 ${linkClass}`}>
            Conductores
          </Link>
          <button className="bg-primary text-black px-4 md:px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e6a800] transition-colors min-h-[44px] min-w-[44px]">
            Próximamente
          </button>
        </div>
      </nav>
    </header>
  )
}
