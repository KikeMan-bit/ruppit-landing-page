"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading, CtaButton } from "./_primitives";

export default function SafetySection() {
  return (
    <section className="bg-ink pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col items-center gap-10">
          {/* Encabezado */}
          <div className="flex max-w-[760px] flex-col items-center gap-6 text-center">
            <BlurFade delay={0.1} direction="up" inView>
              <Eyebrow className="text-[#d99b14]">Seguridad</Eyebrow>
            </BlurFade>
            <BlurFade delay={0.2} direction="up" inView>
              <SectionHeading className="text-[#e4e6e7] text-[30px] sm:text-[38px] lg:text-[44px]">
                Tu seguridad es lo primero
              </SectionHeading>
            </BlurFade>
            <BlurFade delay={0.3} direction="up" inView>
              <p className="font-body text-[16px] leading-6 text-[#cacdce]">
                Queremos que todos estemos del mismo lado. Por eso creamos
                nuestro pacto de seguridad: una alianza entre pasajeros,
                conductores y Ruppit, con responsabilidades compartidas en cada
                viaje.
              </p>
            </BlurFade>
          </div>

          {/* Tarjeta con foto + escudo */}
          <BlurFade delay={0.2} direction="up" inView className="w-full">
            <div className="relative w-full overflow-hidden rounded-3xl bg-[#fcfcfb]">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                {/* Texto */}
                <div className="relative z-10 p-8 sm:p-10 lg:p-14 lg:pr-0">
                  <h3 className="font-heading text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1d1f20] sm:text-[36px] lg:text-[44px]">
                    Viaja tranquilo con Ruppit
                  </h3>
                  <p className="mt-4 max-w-[560px] font-body text-[16px] leading-6 text-[#4e5355]">
                    Verificación de identidad de cada conductor, viaje registrado
                    de punta a punta y soporte cuando lo necesites. Un pacto de
                    seguridad entre todos, en cada viaje.
                  </p>
                  <div className="mt-6">
                    <CtaButton href="/#faq" external={false} variant="dark">
                      Conoce más
                    </CtaButton>
                  </div>
                </div>

                {/* Foto */}
                <div className="relative h-64 w-full sm:h-80 lg:h-[520px]">
                  <Image
                    src="/redesign/safety-person.png"
                    alt="Persona sonriendo tras un viaje seguro con Ruppit"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
