"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, SectionHeading } from "../home/_primitives";

const faqs = [
  {
    question: "¿Qué necesito para ser conductor de Ruppit?",
    answer:
      "Solo necesitas licencia de conducir vigente, un vehículo en buen estado con papeles al día, tu documento de identidad, un smartphone con la app de Ruppit y ser mayor de 18 años.",
  },
  {
    question: "¿Cuánto cobra Ruppit de comisión?",
    answer:
      "Ruppit cobra una comisión justa y transparente sobre cada viaje, y siempre la ves en la app. La tarifa que aceptas es la que ganas, sin descuentos raros ni sorpresas.",
  },
  {
    question: "¿Cuándo y cómo recibo mis pagos?",
    answer:
      "Consultas tus ganancias por viaje en la app —ruta, precio y total— de forma clara y en todo momento. Siempre sabes cuánto llevas ganado.",
  },
  {
    question: "¿Puedo elegir qué viajes aceptar?",
    answer:
      "Sí. Ves el destino y la tarifa antes de aceptar, tomas los viajes que te convienen y rechazas los que no, sin ninguna penalización.",
  },
  {
    question: "¿Tengo que cumplir un horario mínimo?",
    answer:
      "No. No hay horarios ni turnos fijos. Te conectas cuando quieras y manejas tiempo completo o unas horas al día. Tú mandas.",
  },
  {
    question: "¿Cómo me registro?",
    answer:
      "Descarga la app de Ruppit, crea tu cuenta de conductor con tu número y sube tu licencia y los papeles de tu vehículo. Te aprobamos rápido y empiezas a recibir viajes.",
  },
];

export default function ConductoresFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <Container>
        {/* Encabezado */}
        <div className="mx-auto mb-12 flex max-w-[720px] flex-col items-center gap-4 text-center">
          <BlurFade delay={0.1} direction="up" inView>
            <Eyebrow className="text-[#d99b14]">Antes de empezar</Eyebrow>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView>
            <SectionHeading className="text-[#1d1f20] text-[28px] sm:text-[36px] lg:text-[44px]">
              Preguntas de conductores
            </SectionHeading>
          </BlurFade>
        </div>

        {/* Acordeón */}
        <div className="mx-auto max-w-[1024px]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <BlurFade key={faq.question} delay={0.08 + i * 0.04} direction="up" inView>
                <div className="border-b border-[#eff0f0]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
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
                        <p className="pb-6 pr-10 font-body text-[15px] leading-relaxed text-[#4e5355]">
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
