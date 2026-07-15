"use client"

import {
  Store, Users, Bike, Percent, ChartNoAxesColumn, Wallet,
  UserPlus, BadgeCheck, Rocket,
} from "lucide-react"
import AudienceLanding, {
  type Benefit, type LandingStep, type Faq, type HeroStat,
} from "../components/AudienceLanding"

const CONTACT_EMAIL = "mailto:soporte@ruppit.com?subject=Quiero%20registrar%20mi%20negocio%20en%20Ruppit"

const stats: HeroStat[] = [
  { label: "Comisión", value: "Baja", sub: "justa y transparente" },
  { label: "Tu local activo en", value: "48 h", sub: "tras registrarte" },
  { label: "Entrega", value: "Incluida", sub: "con repartidores Ruppit" },
]

const benefits: Benefit[] = [
  { icon: Store, title: "Tu local, en línea", desc: "Crea tu catálogo en minutos y aparece frente a clientes de toda tu ciudad." },
  { icon: Users, title: "Más clientes", desc: "Llega a personas que ya usan Ruppit para moverse y pedir cada día." },
  { icon: Bike, title: "Entrega resuelta", desc: "Nuestros repartidores verificados llevan tus pedidos. Tú te enfocas en vender." },
  { icon: Percent, title: "Comisión justa", desc: "Tarifas bajas y transparentes. Sabes cuánto pagas desde el primer día." },
  { icon: ChartNoAxesColumn, title: "Controla tu negocio", desc: "Gestiona pedidos, horarios y productos desde un panel simple." },
  { icon: Wallet, title: "Pagos claros", desc: "Recibe tus ganancias sin descuentos ocultos ni sorpresas." },
]

const steps: LandingStep[] = [
  { icon: <UserPlus size={24} />, number: "01", title: "Regístrate", desc: "Cuéntanos de tu negocio y envíanos tus datos de contacto." },
  { icon: <Store size={24} />, number: "02", title: "Arma tu catálogo", desc: "Sube tus productos, precios y horarios de atención." },
  { icon: <BadgeCheck size={24} />, number: "03", title: "Te verificamos", desc: "Revisamos tu local y lo activamos en la app." },
  { icon: <Rocket size={24} />, number: "04", title: "Recibe pedidos", desc: "Los clientes te encuentran y nuestros repartidores entregan." },
]

const faqs: Faq[] = [
  { q: "¿Cuánto cobra Ruppit de comisión?", a: "Una comisión baja y transparente que conocerás antes de activar tu local. Sin cargos sorpresa." },
  { q: "¿Necesito mis propios repartidores?", a: "No. Nuestra red de repartidores verificados se encarga de llevar tus pedidos, aunque también puedes usar los tuyos si prefieres." },
  { q: "¿Cómo recibo los pedidos?", a: "Desde la app de Ruppit para negocios ves cada pedido entrante y su estado en tiempo real." },
  { q: "¿Cuándo recibo mis pagos?", a: "Recibes tus ganancias de forma clara y periódica, sin descuentos ocultos." },
  { q: "¿En qué ciudades puedo registrar mi negocio?", a: "Estamos activando negocios junto con nuestra expansión en las provincias de Bolivia, comenzando por Camiri. Escríbenos para sumar tu local." },
]

export default function BusinessLanding() {
  return (
    <AudienceLanding
      eyebrow="Para negocios"
      title={
        <>
          Haz crecer tu<br />
          negocio con<br className="hidden sm:block" /> <span className="text-[#ffc300]">Ruppit.</span>
        </>
      }
      subtitle="Recibe pedidos de toda tu ciudad, llega a más clientes y deja la entrega en manos de nuestros repartidores. Comisiones justas y transparentes, sin letra chica."
      primaryCta={{ label: "Registrar mi negocio", href: CONTACT_EMAIL }}
      secondaryCta={{ label: "Cómo funciona", href: "#como-funciona" }}
      stats={stats}
      benefitsEyebrow="Beneficios"
      benefitsTitle="¿Por qué vender con Ruppit?"
      benefits={benefits}
      stepsEyebrow="Proceso"
      stepsTitle="Empieza a vender en 4 pasos"
      steps={steps}
      checklist={{
        eyebrow: "Requisitos",
        title: "¿Qué necesitas para empezar?",
        subtitle: "Pocos requisitos, activación rápida.",
        items: [
          "Un negocio o local con productos para vender",
          "Datos de contacto y ubicación",
          "Fotos y precios de tus productos",
          "Ganas de llegar a más clientes",
        ],
      }}
      faqs={faqs}
      finalTitle="Suma tu negocio a Ruppit"
      finalText="Llega a más clientes en las provincias de Bolivia. Escríbenos y activa tu local hoy."
      finalCta={{ label: "Registrar mi negocio", href: CONTACT_EMAIL }}
    />
  )
}
