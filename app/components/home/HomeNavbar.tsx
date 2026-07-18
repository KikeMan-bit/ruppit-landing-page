"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PLAY_STORE_URL } from "@/lib/constants";
import { Container, CtaButton } from "./_primitives";

const navLinks = [
  { href: "/driver", label: "Conductores" },
  { href: "/#faq", label: "FAQs" },
];

type NavLink = { href: string; label: string };

export default function HomeNavbar({
  links = navLinks,
}: {
  links?: NavLink[];
} = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[#212121] bg-ink/95 backdrop-blur-md"
    >
      <Container>
        <nav className="flex h-[58px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
            aria-label="Ruppit — Inicio"
          >
            <Image
              src="/logo-sec.webp"
              alt="Ruppit"
              width={69}
              height={20}
              priority
              className="h-5 w-auto"
            />
          </Link>

          {/* Links (desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1 font-body text-[14px] text-[#8a8f92] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Acciones (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-body text-[14px] text-[#bdbdbd] transition-colors hover:text-white"
              aria-label="Cambiar idioma"
            >
              Español
              <ChevronDown size={12} strokeWidth={2.5} />
            </button>
            <CtaButton className="rounded-lg px-3.5 py-1.5 text-[14px]">
              Descarga la App
            </CtaButton>
          </div>

          {/* Hamburguesa (móvil) */}
          <button
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <motion.line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ originX: "12px", originY: "6px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ originX: "12px", originY: "18px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </button>
        </nav>
      </Container>

      {/* Menú desplegable (móvil) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[#212121] bg-ink/98 backdrop-blur-md"
          >
            <div className="flex flex-col items-start gap-1 px-6 pb-6 pt-3">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className="flex min-h-[48px] w-full items-center font-body text-base text-[#c9cdcf] transition-colors hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 w-full rounded-lg bg-primary px-6 py-3 text-center font-body text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Descarga la App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
