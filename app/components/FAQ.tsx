"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

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
    question: "¿Cuándo estará disponible la app?",
    answer:
      "Ruppit está en desarrollo activo. Pronto podrás descargarla en iOS y Android. Mantente atento a nuestras redes para conocer la fecha de lanzamiento oficial.",
  },
  {
    question: "¿Hay comisiones ocultas?",
    answer:
      "No. La tarifa que propones es la que pagas. Ruppit es transparente con sus costos desde el primer momento.",
  },
  {
    question: "¿Puedo cancelar un viaje?",
    answer:
      "Sí, puedes cancelar antes de que el conductor llegue a tu ubicación. Los detalles completos sobre la política de cancelación estarán disponibles al momento del lanzamiento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <BlurFade delay={0.1} direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Todo lo que necesitas saber sobre Ruppit.
          </p>
        </BlurFade>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <BlurFade key={i} delay={0.1 + i * 0.05} direction="up">
                <div className="relative border-b border-gray-200">
                  {/* Highlight que se desliza a la pregunta abierta */}
                  {isOpen && (
                    <motion.div
                      layoutId="faq-highlight"
                      className="absolute inset-0 -mx-3 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  <button
                    className="relative w-full flex items-start gap-4 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span
                      className={`text-xs font-mono mt-1 w-6 shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-black"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm sm:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="shrink-0 mt-0.5"
                    >
                      <ChevronDown
                        size={18}
                        className={isOpen ? "text-primary" : "text-gray-400"}
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
                        className="relative overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          exit={{ y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-500 leading-relaxed pl-10 pb-5"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
