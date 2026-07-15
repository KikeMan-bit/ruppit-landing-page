import type { Metadata } from "next"
import DeliveryLanding from "./DeliveryLanding"

export const metadata: Metadata = {
  title: "Ruppit Delivery – Pide lo que quieras, a tu precio",
  description:
    "Pide comida, farmacia, mercado y paquetes en las provincias de Bolivia. Propón cuánto pagar por el envío y un repartidor verificado lo acepta. Sin tarifas sorpresa.",
  alternates: { canonical: "https://ruppit.com/delivery" },
  openGraph: {
    url: "https://ruppit.com/delivery",
    title: "Ruppit Delivery – Pide lo que quieras, a tu precio",
    description:
      "Comida, farmacia, mercado y paquetes a domicilio. Tú propones el precio del envío.",
  },
}

export default function DeliveryPage() {
  return <DeliveryLanding />
}
