"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      "Ruppit nace en Camiri, Bolivia. Desde ahí comenzamos a transformar la manera en que las personas se mueven, con planes de expansión a más ciudades en el corto plazo.",
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

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <BlurFade key={i} delay={0.1 + i * 0.05} direction="up">
              <button
                className="w-full flex items-start gap-4 py-5 text-left group"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-xs font-mono text-black mt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm sm:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-black" : ""
                  }`}
                  size={18}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </div>
            </BlurFade>
          );
        })}
      </div>
      </div>
    </section>
  );
}
