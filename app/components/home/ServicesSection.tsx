"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading } from "./_primitives";

const services = [
  {
    img: "/redesign/service-ciudad.jpg",
    title: "Viajes dentro de la ciudad",
    desc: "Pide tu viaje, propón tu tarifa y llega con conductores verificados de tu zona. Rápido, seguro y a tu precio.",
  },
  {
    img: "/redesign/service-delivery.jpg",
    title: "Delivery",
    desc: "Envía y recibe paquetes o compras en minutos. Conecta con repartidores de confianza sin salir de casa.",
  },
  {
    img: "/redesign/service-farmacia.jpg",
    title: "Farmacias de turno",
    desc: "Consulta al instante qué farmacias están de turno cerca de ti. Encuentra la que está abierta cuando más la necesitas.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        {/* Encabezado (alineado a la izquierda) */}
        <div className="mb-12 flex flex-col gap-4">
          <BlurFade delay={0.1} direction="up" inView>
            <Eyebrow className="text-[#d99b14]">Una plataforma</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <SectionHeading className="text-[#e4e6e7] text-[30px] sm:text-[38px] lg:text-[44px]">
              Nuestros servicios
            </SectionHeading>
          </BlurFade>
          <BlurFade delay={0.3} direction="up" inView>
            <p className="max-w-[760px] font-body text-[16px] leading-6 text-[#cacdce]">
              Una sola app para moverte, pedir y resolver. Todo lo que tu día
              necesita, en un solo lugar.
            </p>
          </BlurFade>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <BlurFade key={s.title} delay={0.15 + i * 0.1} direction="up" inView>
              <article className="group flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-body text-[18px] font-semibold text-[#e4e6e7]">
                  {s.title}
                </h3>
                <p className="mt-1.5 font-body text-[14px] leading-[21px] text-[#cacdce]">
                  {s.desc}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
