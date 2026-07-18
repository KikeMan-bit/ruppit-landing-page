"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading } from "../home/_primitives";

const otrasApps = [
  "El algoritmo asigna el viaje",
  "No sabes el destino hasta aceptar",
  "Penalización por rechazar",
  "Horarios y presión",
];

const ruppit = [
  "Tú eliges qué viajes tomar",
  "Ves destino y tarifa antes de aceptar",
  "Rechaza sin penalización",
  "Manejas cuando quieras",
];

export default function DifferenceSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Encabezado */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <BlurFade delay={0.1} direction="up" inView>
            <Eyebrow className="text-[#d99b14]">La diferencia</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <SectionHeading className="text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              Manejar con Ruppit es distinto
            </SectionHeading>
          </BlurFade>
        </div>

        {/* Comparativa */}
        <BlurFade delay={0.2} direction="up" inView>
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
            {/* Otras apps */}
            <div className="flex flex-col gap-5 border-[#eff0f0] px-2 md:border-l md:px-8">
              <h3 className="font-body text-[18px] font-semibold text-[#1d1f20]">
                Otras apps
              </h3>
              <ul className="flex flex-col gap-3">
                {otrasApps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#f0f1f1] text-[#9aa0a2]">
                      <XIcon size={12} strokeWidth={2.5} />
                    </span>
                    <span className="font-body text-[14px] leading-[21px] text-[#4e5355]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ruppit */}
            <div className="flex flex-col gap-5 border-[#eff0f0] px-2 md:border-l md:px-8">
              <h3 className="font-body text-[18px] font-semibold text-[#1d1f20]">
                Ruppit
              </h3>
              <ul className="flex flex-col gap-3">
                {ruppit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary text-[#171717]">
                      <CheckIcon size={12} strokeWidth={3} />
                    </span>
                    <span className="font-body text-[14px] leading-[21px] text-[#1d1f20]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
