"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading } from "./_primitives";

const faqs = [
  {
    question: "¿Qué es Ruppit?",
    answer:
      "Ruppit es una app de movilidad compartida donde tú propones el precio de tu viaje. Conectamos pasajeros con conductores que aceptan la tarifa ofrecida, sin precios impuestos ni sorpresas al final.",
  },
  {
    question: "¿Cómo funciona la propuesta de tarifa?",
    answer:
      "Ingresa tu destino, elige cuántos pasajeros viajan contigo y propón la tarifa que consideres justa. Los conductores cercanos ven tu oferta y pueden aceptarla. Tú decides cuánto pagar.",
  },
  {
    question: "¿Puedo elegir cuántos pasajeros van en el viaje?",
    answer:
      "Sí. Puedes configurar si viajas solo o compartir el viaje con otros pasajeros para dividir el costo. Ruppit te da el control total sobre tu experiencia de viaje.",
  },
  {
    question: "¿Cómo sé que mi conductor es confiable?",
    answer:
      "Todos los conductores en Ruppit pasan por un proceso de verificación de identidad y documentos del vehículo. Además, cada viaje queda registrado y los usuarios pueden dejar calificaciones y reseñas.",
  },
  {
    question: "¿En qué ciudades estará disponible Ruppit?",
    answer:
      "Ruppit nace en las provincias de Bolivia, comenzando en Camiri como ciudad piloto. Desde ahí transformamos la manera en que las personas se mueven, con expansión a más provincias y ciudades.",
  },
  {
    question: "¿Dónde puedo descargar la app?",
    answer:
      "¡Ruppit ya está disponible! Descárgala gratis en Google Play para Android. La versión para iOS llegará muy pronto.",
  },
  {
    question: "¿Hay comisiones ocultas?",
    answer:
      "No. La tarifa que propones es la que pagas. Ruppit es transparente con sus costos desde el primer momento.",
  },
  {
    question: "¿Puedo cancelar un viaje?",
    answer:
      "Sí, puedes cancelar antes de que el conductor llegue a tu ubicación. Encuentra los detalles completos de la política de cancelación directamente en la app.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <Container>
        {/* Encabezado */}
        <div className="mx-auto mb-12 flex max-w-[720px] flex-col items-center gap-4 text-center">
          <BlurFade delay={0.1} direction="up" inView>
            <Eyebrow className="text-[#d99b14]">FAQ</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <SectionHeading className="text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              Lo que más nos preguntan
            </SectionHeading>
          </BlurFade>
          <BlurFade delay={0.3} direction="up" inView>
            <p className="font-body text-[16px] leading-6 text-[#4e5355]">
              Todo lo que necesitas saber sobre Ruppit, en un solo lugar.
            </p>
          </BlurFade>
        </div>

        {/* Acordeón */}
        <div className="mx-auto max-w-[860px]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <BlurFade key={faq.question} delay={0.08 + i * 0.04} direction="up" inView>
                <div className="border-b border-[#eaebeb]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-[16px] font-medium text-[#1d1f20] sm:text-[18px]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={20}
                        className={isOpen ? "text-primary" : "text-[#9aa0a2]"}
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 font-body text-[15px] leading-relaxed text-[#4e5355]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
