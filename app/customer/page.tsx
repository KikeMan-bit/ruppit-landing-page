import type { Metadata } from "next"
import CustomerLanding from "./CustomerLanding"

export const metadata: Metadata = {
  title: "Viaja con Ruppit – Tú propones el precio de tu viaje",
  description:
    "Elige tu destino, cuántos viajan contigo y cuánto pagar. Conductores verificados en las provincias de Bolivia aceptan tu tarifa. Sin precios impuestos, sin sorpresas.",
  alternates: { canonical: "https://ruppit.com/customer" },
  openGraph: {
    url: "https://ruppit.com/customer",
    title: "Viaja con Ruppit – Tú propones el precio de tu viaje",
    description:
      "Movilidad compartida en Bolivia donde tú propones la tarifa. Conductores verificados.",
  },
}

export default function CustomerPage() {
  return <CustomerLanding />
}
