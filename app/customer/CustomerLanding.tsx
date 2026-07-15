"use client"

import {
  HandCoins, Users, ShieldCheck, Star, Wallet, MapPin, CarFront,
} from "lucide-react"
import AudienceLanding, {
  type Benefit, type LandingStep, type Faq, type HeroStat,
} from "../components/AudienceLanding"
import { PLAY_STORE_URL } from "@/lib/constants"

const stats: HeroStat[] = [
  { label: "Conductores verificados", value: "100%", sub: "identidad y vehículo" },
  { label: "Viajes desde", value: "Bs. 5", sub: "tú propones la tarifa" },
  { label: "Comunidad", value: "5★", sub: "calificada y confiable" },
]

const benefits: Benefit[] = [
  { icon: HandCoins, title: "Tú pones el precio", desc: "Propón la tarifa que consideres justa. Los conductores cercanos deciden si la aceptan." },
  { icon: Users, title: "Viaja en grupo", desc: "Elige cuántos van contigo y dividan el costo. Salir con amigos nunca fue tan barato." },
  { icon: ShieldCheck, title: "Conductores verificados", desc: "Todos pasan verificación de identidad y documentos del vehículo." },
  { icon: Star, title: "Reseñas reales", desc: "Ve el perfil y las calificaciones de tu conductor antes de subir." },
  { icon: Wallet, title: "Precio transparente", desc: "La tarifa que propones es la que pagas. Cero comisiones ocultas." },
  { icon: MapPin, title: "Hecho para provincias", desc: "Pensada para las ciudades y provincias de Bolivia, donde otras apps no llegan." },
]

const steps: LandingStep[] = [
  { icon: <MapPin size={24} />, number: "01", title: "Ingresa tu destino", desc: "Abre Ruppit, escribe a dónde quieres ir y ve la ruta al instante." },
  { icon: <Users size={24} />, number: "02", title: "Elige cuántos viajan", desc: "¿Solo o en grupo? Selecciona los pasajeros para dividir el costo." },
  { icon: <HandCoins size={24} />, number: "03", title: "Propón tu tarifa", desc: "Tú decides cuánto pagar. Pon un precio justo y lanza tu oferta." },
  { icon: <CarFront size={24} />, number: "04", title: "Un conductor acepta", desc: "Ve su perfil y su llegada en tiempo real. Súbete y disfruta." },
]

const faqs: Faq[] = [
  { q: "¿Qué es Ruppit?", a: "Ruppit es una app de movilidad compartida donde tú propones el precio de tu viaje. Conectamos pasajeros con conductores que aceptan la tarifa ofrecida, sin precios impuestos ni sorpresas al final." },
  { q: "¿Cómo funciona la propuesta de tarifa?", a: "Ingresa tu destino, elige cuántos pasajeros viajan contigo y propón la tarifa que consideres justa. Los conductores cercanos ven tu oferta y pueden aceptarla." },
  { q: "¿Puedo elegir cuántos pasajeros van en el viaje?", a: "Sí. Puedes viajar solo o compartir el viaje con otros pasajeros para dividir el costo. Tú tienes el control de tu experiencia." },
  { q: "¿Cómo sé que mi conductor es confiable?", a: "Todos los conductores pasan por verificación de identidad y documentos del vehículo. Además, cada viaje queda registrado y puedes ver calificaciones y reseñas." },
  { q: "¿Hay comisiones ocultas?", a: "No. La tarifa que propones es la que pagas. Ruppit es transparente con sus costos desde el primer momento." },
]

export default function CustomerLanding() {
  return (
    <AudienceLanding
      eyebrow="Para clientes"
      title={
        <>
          Tú propones.<br />
          Ruppit te<br className="hidden sm:block" /> <span className="text-[#ffc300]">lleva.</span>
        </>
      }
      subtitle="Elige a dónde vas, cuántos viajan contigo y cuánto quieres pagar. Conductores verificados aceptan tu tarifa. Sin precios impuestos, sin sorpresas."
      primaryCta={{ label: "Descargar en Google Play", href: PLAY_STORE_URL }}
      secondaryCta={{ label: "Cómo funciona", href: "#como-funciona" }}
      stats={stats}
      benefitsEyebrow="Beneficios"
      benefitsTitle="¿Por qué viajar con Ruppit?"
      benefits={benefits}
      stepsEyebrow="Proceso"
      stepsTitle="Viajar es así de fácil"
      steps={steps}
      checklist={{
        eyebrow: "Seguridad",
        title: "Viaja con tranquilidad",
        subtitle: "Tu seguridad es lo primero, en cada viaje.",
        items: [
          "Verificación de identidad de cada conductor",
          "Documentos del vehículo al día",
          "Cada viaje queda registrado",
          "Calificaciones y reseñas de la comunidad",
          "Soporte cuando lo necesites",
        ],
      }}
      faqs={faqs}
      finalTitle="Tu próximo viaje te espera"
      finalText="Descarga Ruppit y viaja a tu precio en las provincias de Bolivia."
      finalCta={{ label: "Descargar en Google Play", href: PLAY_STORE_URL, playBadge: true }}
    />
  )
}
