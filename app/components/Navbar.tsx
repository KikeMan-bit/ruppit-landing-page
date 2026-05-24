"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const heroHeight = typeof window !== "undefined" ? window.innerHeight * 0.9 : 700

  const pastHero = isHome && scrollY > heroHeight
  const scrolled = scrollY > 20

  const bgClass = pastHero
    ? "bg-white/90 backdrop-blur-md shadow-sm"
    : scrolled
    ? "bg-black/90 backdrop-blur-md "
    : "bg-transparent"

  const linkClass = pastHero
    ? "text-gray-600 hover:text-black"
    : "text-white/80 hover:text-white"

  const logo = pastHero ? "/logo.webp" : "/logo-sec.webp"

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${bgClass}`}>
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl mx-auto">
        <Link href="/">
          <Image src={logo} alt="Ruppit" width={100} height={100} priority />
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
