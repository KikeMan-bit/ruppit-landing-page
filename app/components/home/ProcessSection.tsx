"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, SectionHeading } from "./_primitives";

const steps = [
  {
    img: "/redesign/process-1.png",
    title: "Ingresa cuántos van",
    desc: "¿Solo o acompañado? Elige cuántos van y divide el costo entre todos. Mientras más son, menos pagas.",
  },
  {
    img: "/redesign/process-2.jpg",
    title: "Propón tu precio",
    desc: "Nadie te impone una tarifa. Propón lo que consideras justo y lanza tu oferta. Así de simple.",
  },
  {
    img: "/redesign/process-3.jpg",
    title: "Elige con confianza",
    desc: "Un conductor verificado acepta tu precio. Ve su perfil, sus valoraciones y su llegada en tiempo real.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Encabezado a dos columnas */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <BlurFade delay={0.1} direction="up" inView>
            <SectionHeading className="max-w-[520px] text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              La forma más justa de moverte. Punto.
            </SectionHeading>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <p className="max-w-[560px] font-body text-[16px] leading-6 text-[#4e5355] lg:pt-2">
              Ruppit pone el control en tus manos: tú eliges el precio, con quién
              viajas y quién te lleva. Sin tarifas impuestas, sin sorpresas.
            </p>
          </BlurFade>
        </div>

        {/* Tarjetas bento */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <BlurFade key={s.title} delay={0.15 + i * 0.1} direction="up" inView>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#eaebeb] bg-[#f4f5f5]">
                <div className="flex flex-col gap-1.5 px-8 pt-7">
                  <h3 className="font-body text-[18px] font-semibold text-[#1d1f20]">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[22px] text-[#4e5355]">
                    {s.desc}
                  </p>
                </div>
                <div className="relative mt-2 h-[360px] w-full overflow-hidden px-8 pb-7">
                  <div className="relative h-full w-full">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-contain object-top mix-blend-darken"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
