import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import DriverLanding from "./DriverLanding"

export const metadata: Metadata = {
  title: "Maneja con Ruppit – Genera ingresos a tu ritmo",
  description:
    "Únete a la red de conductores de Ruppit en las provincias de Bolivia. Tú decides qué viajes aceptar, cuándo manejar y cuánto ganar. Sin jefes ni horarios fijos.",
  alternates: { canonical: "https://ruppit.com/driver" },
  openGraph: {
    url: "https://ruppit.com/driver",
    title: "Maneja con Ruppit – Genera ingresos a tu ritmo",
    description: "Únete a la red de conductores independientes en Bolivia. Tú pones las reglas.",
  },
}

export default function DriverPage() {
  return <DriverLanding />
}
