"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Magnetic } from "@/components/ui/magnetic";
import { PLAY_STORE_URL } from "@/lib/constants";
import Image from "next/image";

// Link con subrayado que se revela de izquierda a derecha
function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group relative inline-flex w-fit items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors";
  const underline = (
    <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
  );

  if (external) {
    return (
      <a href={href} target="_blank" className={className}>
        {children}
        {underline}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      {underline}
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-10">
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-white/10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
              <Image src="/logo-sec.webp" alt="Ruppit" width={100} height={100} />
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Tu grupo, tu precio, tu viaje. Conectamos pasajeros con conductores de forma justa, rápida y transparente.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descárgala en Google Play"
                className="inline-block w-fit transition-transform hover:scale-105"
              >
                <Image
                  src="/logo-black-play-store.png"
                  alt="Disponible en Google Play"
                  width={646}
                  height={250}
                  className="h-12 w-auto ring-white/15"
                />
              </a>
            </div>

            {/* Ruppit links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Ruppit</h3>
              <nav className="flex flex-col gap-2 items-start">
                <FooterLink href="/#how-it-works">Cómo funciona</FooterLink>
                <FooterLink href="/#features">Funciones</FooterLink>
                <FooterLink href="/customer">Clientes</FooterLink>
                <FooterLink href="/delivery">Delivery</FooterLink>
                <FooterLink href="/business">Negocios</FooterLink>
                <FooterLink href="/driver">Conductores</FooterLink>
              </nav>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Legal</h3>
              <nav className="flex flex-col gap-2 items-start">
                <FooterLink href="/terms-and-conditions">Términos y Condiciones</FooterLink>
                <FooterLink href="/privacy-policy">Política de Privacidad</FooterLink>
                <FooterLink href="/delete-account">Eliminar cuenta</FooterLink>
              </nav>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Síguenos</h3>
              <nav className="flex flex-col gap-2 items-start">
                {[
                  { label: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/ruppit_oficial/" },
                  // { label: "Twitter", Icon: XIcon, href: "https://x.com/ruppit.app" },
                  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/company/ruppit" },
                ].map(({ label, Icon, href }) => (
                  <a key={label} href={href} target="_blank" className="group flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                    <Magnetic strength={0.6}>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:ring-primary">
                        <Icon />
                      </span>
                    </Magnetic>
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </BlurFade>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 pt-4 border-t border-white/10">
          <span className="text-xs text-gray-400">© 2026 Ruppit. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
