"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl mx-auto">
        <Link href="/" className="font-bold text-lg tracking-tight text-gray-900">
          <Image src="/logo.webp" alt="Ruppit" width={100} height={100} priority />
        </Link>
        <button className="bg-primary text-white px-4 md:px-5 py-2 rounded-full text-sm font-medium hover:bg-[#9c14e0] transition-colors min-h-[44px] min-w-[44px]">
          Próximamente
        </button>
      </nav>
    </header>
  )
}
