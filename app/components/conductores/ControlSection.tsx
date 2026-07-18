"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading } from "../home/_primitives";

const features = [
  {
    icon: "/redesign/image-1.png",
    title: "Tú eliges los viajes",
    desc: "Ve el destino y la tarifa antes de aceptar. Toma los que te convienen y rechaza los que no, sin penalización.",
  },
  {
    icon: "/redesign/image-2.png",
    title: "Tú decides cuándo",
    desc: "Sin horarios ni turnos fijos. Conéctate cuando quieras. Manejas full o unas horas al día, tú mandas.",
  },
  {
    icon: "/redesign/image-3.png",
    title: "Ganas más, sin sorpresas",
    desc: "La tarifa que aceptas es la que ganas. Comisiones justas y transparentes, sin descuentos raros.",
  },
  {
    icon: "/redesign/image-4.png",
    title: "Pagos claros",
    desc: "Consulta tus ganancias por viaje en la app: ruta, precio y total. Siempre sabes cuánto llevas.",
  },
];

export default function ControlSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Encabezado */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <BlurFade delay={0.1} direction="up" inView>
            <Eyebrow className="text-[#d99b14]">Maneja a tu ritmo</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <SectionHeading className="text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              Tú tienes el control, en cada viaje
            </SectionHeading>
          </BlurFade>
        </div>

        {/* Tarjetas de features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <BlurFade key={f.title} delay={0.15 + i * 0.08} direction="up" inView>
              <article className="flex h-full flex-col rounded-xl border border-[#eaebeb] bg-white p-6">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={58}
                  height={58}
                  className="size-[58px] object-contain"
                />
                <h3 className="mt-6 font-body text-[16px] font-semibold text-[#1d1f20]">
                  {f.title}
                </h3>
                <p className="mt-1.5 font-body text-[14px] leading-[22px] text-[#4e5355]">
                  {f.desc}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
