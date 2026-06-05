import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.99-11.97-2.94-2.94L3.18 23.76zm16.35-12.7L16.96 9.5 13.65 12l3.31 2.5 2.63-1.52c.75-.44.75-1.48-.06-1.92zM2.98.53C2.68.73 2.5 1.07 2.5 1.46v21.08c0 .39.18.73.48.93l.1.06 11.82-11.82v-.28L3.08.47l-.1.06zm10.41 11.19L2.98 23.14v-.01-.01l-.1-.06V1.46l.1-.06.41.41 9.99 9.99.01-.08z" />
    </svg>
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

function StoreButton({ store }: { store: "apple" | "google" }) {
  return (
    <button className="flex items-center gap-2.5 bg-gray-900 text-white rounded-full px-4 py-2.5 hover:bg-gray-800 transition-colors">
      {store === "apple" ? <AppleIcon /> : <GooglePlayIcon />}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[9px] text-gray-400 uppercase tracking-wide">Disponible en</span>
        <span className="font-semibold text-xs">{store === "apple" ? "App Store" : "Google Play"}</span>
      </div>
    </button>
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
            </div>

            {/* Ruppit links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Ruppit</h3>
              <nav className="flex flex-col gap-2">
                {["Funciones", "Cómo funciona", "Testimonios"].map((link) => (
                  <a key={link} href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/terms-and-conditions" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="/delete-account" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  Eliminar cuenta
                </Link>
              </nav>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-white text-sm">Síguenos</h3>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Instagram", Icon: InstagramIcon },
                  { label: "Twitter", Icon: XIcon },
                  { label: "LinkedIn", Icon: LinkedInIcon },
                ].map(({ label, Icon }) => (
                  <a key={label} href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    <Icon />
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
