import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import AppShowcase from "./components/AppShowcase";
import Safety from "./components/Safety";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Features } from "./features/features";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ruppit.com",
  },
  openGraph: {
    url: "https://ruppit.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ruppit.com/#organization",
      name: "Ruppit",
      url: "https://ruppit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ruppit.com/logo.webp",
      },
      description:
        "Ruppit es una app de movilidad compartida donde tú propones el precio de tu viaje. Conectamos pasajeros con conductores verificados en Bolivia.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "soporte@ruppit.com",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
      areaServed: {
        "@type": "City",
        name: "Camiri",
        containedInPlace: {
          "@type": "Country",
          name: "Bolivia",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ruppit.com/#website",
      url: "https://ruppit.com",
      name: "Ruppit",
      description: "App de movilidad compartida en Bolivia",
      publisher: { "@id": "https://ruppit.com/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Ruppit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ruppit es una app de movilidad compartida donde tú propones el precio de tu viaje. Conectamos pasajeros con conductores que aceptan la tarifa ofrecida, sin precios impuestos ni sorpresas al final.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona la propuesta de tarifa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ingresa tu destino, elige cuántos pasajeros viajan contigo y propón la tarifa que consideres justa. Los conductores cercanos ven tu oferta y pueden aceptarla. Tú decides cuánto pagar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo elegir cuántos pasajeros van en el viaje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes configurar si viajas solo o compartir el viaje con otros pasajeros para dividir el costo. Ruppit te da el control total sobre tu experiencia de viaje.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo sé que mi conductor es confiable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todos los conductores en Ruppit pasan por un proceso de verificación de identidad y documentos del vehículo. Además, cada viaje queda registrado y los usuarios pueden dejar calificaciones y reseñas.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué ciudades estará disponible Ruppit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ruppit nace en las provincias de Bolivia, comenzando en Camiri como ciudad piloto. Desde ahí transformamos la manera en que las personas se mueven, con expansión a más provincias y ciudades.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo estará disponible la app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ruppit está en desarrollo activo. Pronto podrás descargarla en iOS y Android. Mantente atento a nuestras redes para conocer la fecha de lanzamiento oficial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hay comisiones ocultas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La tarifa que propones es la que pagas. Ruppit es transparente con sus costos desde el primer momento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo cancelar un viaje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, puedes cancelar antes de que el conductor llegue a tu ubicación. Los detalles completos sobre la política de cancelación estarán disponibles al momento del lanzamiento.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <div className="bg-black">
          <Navbar />
          <div className="" />
          <main>
            <Hero />
          </main>
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        {/* <AppShowcase /> */}
        <Features />
        {/* <Safety /> */}
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
