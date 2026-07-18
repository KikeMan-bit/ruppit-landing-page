"use client";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, SectionHeading } from "../home/_primitives";

const steps = [
  {
    img: "/redesign/conductores/step-1.jpg",
    title: "Regístrate",
    desc: "Descarga la app de Ruppit y crea tu cuenta de conductor con tu número.",
  },
  {
    img: "/redesign/conductores/step-2.jpg",
    title: "Verifica tus datos",
    desc: "Sube tu licencia, los papeles de tu vehículo y tu documento. Te aprobamos rápido.",
  },
  {
    img: "/redesign/conductores/step-3.jpg",
    title: "Empieza a ganar",
    desc: "Recibe solicitudes, acepta las que quieras y sal a manejar. Así de simple.",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Encabezado a dos columnas */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <BlurFade delay={0.1} direction="up" inView>
            <SectionHeading className="max-w-[467px] text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              Registrarte toma minutos
            </SectionHeading>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <p className="max-w-[560px] font-body text-[16px] leading-6 text-[#4e5355] lg:pt-2">
              Convertirte en conductor de Ruppit es rápido y sin vueltas. En tres
              pasos simples estás recibiendo tu primer viaje.
            </p>
          </BlurFade>
        </div>

        {/* Bento de pasos con flechas conectoras */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
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

          {/* Flechas conectoras — capa por encima de las tarjetas (solo desktop) */}
          <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
            {[0, 1].map((n) => (
              <span
                key={n}
                style={{ left: `calc((100% - 48px) / 3 * ${n + 1} + ${24 * n + 12}px)` }}
                className="absolute top-1/2 flex size-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
              >
                <span className="flex size-[45px] items-center justify-center rounded-full bg-black text-white">
                  <ArrowRightIcon size={22} strokeWidth={2} />
                </span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
