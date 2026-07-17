"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading, CtaButton } from "./_primitives";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Container className="relative">
        <div className="flex flex-col items-center gap-10 py-14 lg:flex-row lg:justify-between lg:gap-12 lg:py-16">
          {/* Columna de texto */}
          <div className="flex w-full flex-col items-center gap-8 text-center lg:max-w-[560px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <BlurFade delay={0.1} direction="up">
                <Eyebrow className="text-white/90">Taxi para las provincias</Eyebrow>
              </BlurFade>

              <BlurFade delay={0.2} direction="up">
                <SectionHeading
                  as="h1"
                  className="text-[40px] leading-[1.1] sm:text-[48px] lg:text-[58px]"
                >
                  Tú propones el precio de tu viaje
                </SectionHeading>
              </BlurFade>

              <BlurFade delay={0.35} direction="up">
                <p className="max-w-[420px] font-body text-[17px] leading-[1.5] text-white/60 sm:text-[18px]">
                  La app de taxi para las provincias. Elige cuántos van y propón
                  tu tarifa. Conductores verificados, sin sorpresas.
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.5} direction="up">
              <CtaButton>Descarga la App</CtaButton>
            </BlurFade>
          </div>

          {/* Ilustración */}
          <BlurFade delay={0.3} direction="up" className="w-full lg:w-auto">
            <div className="relative mx-auto w-full max-w-[731px]">
              <Image
                src="/redesign/hero-illustration.png"
                alt="Ilustración de un taxi de Ruppit en las provincias"
                width={731}
                height={619}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
