"use client"

import {
  HandCoins, MapPinned, ShieldCheck, Timer, Star,
  Smartphone, Bike, PackageCheck, ShoppingBag,
} from "lucide-react"
import AudienceLanding, {
  type Benefit, type LandingStep, type Faq, type HeroStat,
} from "../components/AudienceLanding"
import { PLAY_STORE_URL } from "@/lib/constants"

const stats: HeroStat[] = [
  { label: "Repartidores cerca de ti", value: "20+", sub: "listos para tu pedido" },
  { label: "Entrega promedio", value: "18 min", sub: "en zona urbana" },
  { label: "Envío desde", value: "Bs. 6", sub: "tú propones la tarifa" },
]

const benefits: Benefit[] = [
  { icon: ShoppingBag, title: "Pide de todo", desc: "Comida, mercado, farmacia o paquetes. Si cabe en una moto, te lo llevamos." },
  { icon: HandCoins, title: "Tú pones el precio", desc: "Propón cuánto pagar por el envío. Sin tarifas dinámicas ni sorpresas al final." },
  { icon: MapPinned, title: "Seguimiento en vivo", desc: "Ve a tu repartidor en el mapa en tiempo real, desde que acepta hasta tu puerta." },
  { icon: ShieldCheck, title: "Repartidores verificados", desc: "Cada repartidor pasa verificación de identidad. Tu pedido en manos confiables." },
  { icon: Timer, title: "Rápido de verdad", desc: "Los repartidores cercanos aceptan en segundos y llegan en minutos, no en horas." },
  { icon: Star, title: "Califica cada entrega", desc: "Tu opinión cuenta. Califica al repartidor y ayuda a mantener el mejor servicio." },
]

const steps: LandingStep[] = [
  { icon: <Smartphone size={24} />, number: "01", title: "Abre Ruppit", desc: "Elige Delivery, dinos qué necesitas y a dónde llevarlo." },
  { icon: <HandCoins size={24} />, number: "02", title: "Propón tu tarifa", desc: "Pon cuánto quieres pagar por el envío y publica tu pedido." },
  { icon: <Bike size={24} />, number: "03", title: "Un repartidor acepta", desc: "Un repartidor cercano toma tu pedido y sale en camino." },
  { icon: <PackageCheck size={24} />, number: "04", title: "Recíbelo en tu puerta", desc: "Sigue la entrega en vivo y paga sin sorpresas al recibir." },
]

const faqs: Faq[] = [
  { q: "¿Qué puedo pedir con Ruppit Delivery?", a: "Casi cualquier cosa que quepa en una moto: comida, mercado, farmacia, paquetes y encargos dentro de la ciudad." },
  { q: "¿Cómo se calcula el costo del envío?", a: "No lo calculamos nosotros: tú propones cuánto pagar por el envío y los repartidores cercanos deciden si lo aceptan. Tú tienes el control." },
  { q: "¿Puedo seguir mi pedido?", a: "Sí. Ves a tu repartidor en el mapa en tiempo real, desde que acepta tu pedido hasta que llega a tu puerta." },
  { q: "¿En qué zonas está disponible el delivery?", a: "Ruppit Delivery se activa junto con nuestra expansión en las provincias de Bolivia, comenzando por Camiri. Descarga la app para ver la disponibilidad en tu zona." },
  { q: "¿Cómo pago mi pedido?", a: "Pagas al recibir, según la tarifa que propusiste. Sin cargos ocultos ni sorpresas al final." },
]

export default function DeliveryLanding() {
  return (
    <AudienceLanding
      eyebrow="Ruppit Delivery"
      title={
        <>
          Pide lo que<br />
          quieras, <span className="text-[#ffc300]">a tu<br className="hidden sm:block" /> precio.</span>
        </>
      }
      subtitle="Comida, farmacia, mercado o un encargo de último minuto. Propón cuánto quieres pagar por el envío y un repartidor cercano lo acepta. Sin tarifas sorpresa."
      primaryCta={{ label: "Descargar en Google Play", href: PLAY_STORE_URL }}
      secondaryCta={{ label: "Cómo funciona", href: "#como-funciona" }}
      stats={stats}
      benefitsEyebrow="Beneficios"
      benefitsTitle="¿Por qué pedir con Ruppit?"
      benefits={benefits}
      stepsEyebrow="Proceso"
      stepsTitle="Pedir es así de fácil"
      steps={steps}
      checklist={{
        eyebrow: "Categorías",
        title: "¿Qué puedes pedir?",
        subtitle: "Todo lo que necesitas, en una sola app.",
        items: [
          "Comida de tus restaurantes favoritos",
          "Mercado y víveres del día",
          "Farmacia y cuidado personal",
          "Paquetes y encomiendas dentro de la ciudad",
          "Encargos y compras de último minuto",
        ],
      }}
      faqs={faqs}
      finalTitle="¿Listo para pedir?"
      finalText="Descarga Ruppit y pide lo que quieras, a tu precio, en las provincias de Bolivia."
      finalCta={{ label: "Descargar en Google Play", href: PLAY_STORE_URL, playBadge: true }}
    />
  )
}
