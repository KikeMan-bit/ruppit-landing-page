"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./_primitives";
import { SOCIAL_LINKS } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.44 9.05 3.43 9.4 3.43 12s.01 2.95.07 4.19c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.19s-.01-2.95-.07-4.19c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.59-.07-4.74-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.79a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.3a5.83 5.83 0 0 0-.77-.05 5.89 5.89 0 1 0 5.89 5.89V9.4a7.5 7.5 0 0 0 4.35 1.39V7.6a4.28 4.28 0 0 1-3.39-1.78Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Explora",
    links: [
      { label: "Pasajeros", href: "/customer" },
      { label: "Conductores", href: "/driver" },
      // { label: "Locales", href: "/business" },
      // { label: "Repartidores", href: "/delivery" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y Condiciones", href: "/terms-and-conditions" },
      { label: "Políticas de privacidad", href: "/privacy-policy" },
      { label: "Eliminar cuenta", href: "/delete-account" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
].filter((s) => s.href);

export default function HomeFooter() {
  return (
    <footer className="bg-ink pb-14 pt-14">
      <Container>
        {/* Marca + columnas */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Marca */}
          <div className="flex flex-col gap-3">
            <Image
              src="/redesign/icon-ruppit.png"
              alt="Ruppit"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <p className="max-w-[220px] font-body text-[13px] leading-[19px] text-[#9c9c9c]">
              Viajes seguros y baratos para Camiri.
            </p>

            {socials.length > 0 && (
              <div className="mt-1 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ruppit en ${label}`}
                    className="text-[#9c9c9c] transition-colors hover:text-primary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Columnas de enlaces */}
          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            {columns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-2">
                <span className="mb-1 font-body text-[13px] font-medium text-[#959a9d]">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit font-body text-[13px] text-[#e4e6e7] transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* Aviso legal */}
        <div className="mt-10 border-t border-[#1d1f20] pt-10">
          <div className="space-y-4 font-body text-[13px] leading-[19.5px] text-[#5c5c5c]">
            <p>© 2026 Ruppit. Todos los derechos reservados.</p>
            <p>
              Ruppit es una plataforma tecnológica que conecta a pasajeros con
              conductores independientes. Ruppit no presta servicios de
              transporte; estos son proporcionados por conductores terceros
              independientes. La información publicada tiene fines exclusivamente
              informativos y no constituye una oferta ni promesa contractual.
            </p>
            <p>
              Google Play y el logo de Google Play son marcas registradas de
              Google LLC.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
