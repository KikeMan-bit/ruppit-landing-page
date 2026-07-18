"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading, CtaButton } from "../home/_primitives";

export default function ConductoresHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Container className="relative">
        <div className="flex flex-col items-center gap-10 py-14 lg:flex-row lg:justify-between lg:gap-12 lg:py-16">
          {/* Columna de texto */}
          <div className="flex w-full flex-col items-center gap-8 text-center lg:max-w-[620px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <BlurFade delay={0.1} direction="up">
                <Eyebrow className="text-white/90">Para conductores</Eyebrow>
              </BlurFade>

              <BlurFade delay={0.2} direction="up">
                <SectionHeading
                  as="h1"
                  className="text-[40px] leading-[1.1] sm:text-[48px] lg:text-[58px]"
                >
                  Tu auto es tu <span className="text-primary">negocio</span>.
                  Maneja con Ruppit.
                </SectionHeading>
              </BlurFade>

              <BlurFade delay={0.35} direction="up">
                <p className="max-w-[460px] font-body text-[17px] leading-[1.5] text-white/60 sm:text-[18px]">
                  Gana dinero extra en Camiri con tus propios horarios. Ve el
                  destino y la tarifa antes de aceptar, y toma solo los viajes
                  que te convienen.
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.5} direction="up">
              <CtaButton>Descarga la App</CtaButton>
            </BlurFade>
          </div>

          {/* Ilustración */}
          <BlurFade delay={0.3} direction="up" className="w-full lg:w-auto">
            <div className="relative mx-auto w-full max-w-[560px]">
              <Image
                src="/redesign/conductores/hero.png"
                alt="Conductor de Ruppit recibiendo un viaje en la app"
                width={655}
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
