"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading, CtaButton } from "./_primitives";

export default function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-10">
          {/* Encabezado */}
          <div className="flex max-w-[720px] flex-col items-center gap-6 text-center">
            <BlurFade delay={0.1} direction="up" inView>
              <Eyebrow className="text-[#d99b14]">Conductores verificados</Eyebrow>
            </BlurFade>

            <BlurFade delay={0.2} direction="up" inView>
              <SectionHeading className="text-[#1d1f20] text-[30px] sm:text-[38px] lg:text-[44px]">
                Viaja con gente en quien confiar
              </SectionHeading>
            </BlurFade>

            <BlurFade delay={0.3} direction="up" inView>
              <p className="font-body text-[16px] leading-6 text-[#4e5355]">
                Cada conductor de Ruppit pasa por un proceso de verificación. Ve
                su perfil, sus valoraciones y su tiempo de llegada antes de
                subirte. Sin sorpresas, sin desconocidos.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} direction="up" inView>
              <CtaButton variant="dark">Descarga la App</CtaButton>
            </BlurFade>
          </div>

          {/* Ilustración banner */}
          <BlurFade delay={0.2} direction="up" inView className="w-full">
            <div className="relative mx-auto w-full max-w-[980px] overflow-hidden rounded-xl">
              <Image
                src="/redesign/trust-taxi.jpg"
                alt="Taxi de Ruppit recogiendo pasajeros en la provincia"
                width={1448}
                height={622}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 980px"
              />
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
