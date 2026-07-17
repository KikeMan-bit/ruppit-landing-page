"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container } from "./_primitives";

const columns = [
  {
    title: "Explora",
    links: [
      { label: "Pasajeros", href: "/customer" },
      { label: "Conductores", href: "/driver" },
      { label: "Locales", href: "/business" },
      { label: "Repartidores", href: "/delivery" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y Condiciones", href: "/terms-and-conditions" },
      { label: "Políticas de privacidad", href: "/privacy-policy" },
    ],
  },
];

export default function HomeFooter() {
  return (
    <footer className="rounded-b-[24px] bg-ink pb-14">
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
