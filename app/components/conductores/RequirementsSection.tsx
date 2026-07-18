"use client";

import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading, CtaButton } from "../home/_primitives";

const requisitos = [
  "Licencia de conducir vigente",
  "Vehículo en buen estado y con papeles al día",
  "Documento de identidad vigente",
  "Un smartphone con la app de Ruppit",
  "Tener al menos 18 años",
];

export default function RequirementsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
          {/* Columna izquierda: texto + checklist */}
          <div className="flex w-full max-w-[670px] flex-col gap-6">
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.1} direction="up" inView>
                <Eyebrow className="text-[#d99b14]">Lo que necesitas</Eyebrow>
              </BlurFade>
              <BlurFade delay={0.2} direction="up" inView>
                <SectionHeading className="text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
                  ¿Calificas para manejar?
                </SectionHeading>
              </BlurFade>
              <BlurFade delay={0.3} direction="up" inView>
                <p className="font-body text-[16px] leading-6 text-[#4e5355]">
                  Manejar con Ruppit está al alcance de cualquiera con auto
                  propio. Revisa si cumples con lo básico y regístrate hoy mismo.
                </p>
              </BlurFade>
            </div>

            <ul className="flex flex-col gap-4">
              {requisitos.map((r, i) => (
                <BlurFade key={r} delay={0.35 + i * 0.07} direction="up" inView>
                  <li className="flex items-center gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[#171717]">
                      <CheckIcon size={13} strokeWidth={3} />
                    </span>
                    <span className="font-body text-[16px] text-[#1d1f20]">{r}</span>
                  </li>
                </BlurFade>
              ))}
            </ul>

            <BlurFade delay={0.7} direction="up" inView>
              <CtaButton className="mt-2 w-fit">Empezar a ganar</CtaButton>
            </BlurFade>
          </div>

          {/* Columna derecha: imagen conductor + mockup */}
          <BlurFade delay={0.3} direction="up" inView className="w-full lg:w-auto">
            <div className="relative mx-auto w-full max-w-[627px]">
              <Image
                src="/redesign/conductores/requisitos.png"
                alt="Conductor de Ruppit usando la app en su teléfono"
                width={627}
                height={548}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 627px"
              />
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
