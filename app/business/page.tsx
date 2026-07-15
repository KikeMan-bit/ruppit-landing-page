import type { Metadata } from "next"
import BusinessLanding from "./BusinessLanding"

export const metadata: Metadata = {
  title: "Vende con Ruppit – Haz crecer tu negocio",
  description:
    "Registra tu negocio o local en Ruppit y recibe pedidos de toda tu ciudad. Nuestros repartidores entregan por ti. Comisiones justas y transparentes en las provincias de Bolivia.",
  alternates: { canonical: "https://ruppit.com/business" },
  openGraph: {
    url: "https://ruppit.com/business",
    title: "Vende con Ruppit – Haz crecer tu negocio",
    description:
      "Recibe pedidos, llega a más clientes y deja la entrega a Ruppit. Comisiones justas.",
  },
}

export default function BusinessPage() {
  return <BusinessLanding />
}
