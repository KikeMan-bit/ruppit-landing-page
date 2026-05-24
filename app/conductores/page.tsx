import type { Metadata } from "next"
import Link from "next/link"
import { CarFront } from "lucide-react"
import Navbar from "../components/Navbar"
import DriverRegisterForm from "./DriverRegisterForm"

export const metadata: Metadata = {
  title: "Quiero ser conductor",
  description: "Regístrate como conductor en Ruppit y empieza a generar ingresos manejando en tus propios términos.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ruppit.com/conductores" },
}

export default function ConductoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#011827] via-[#023047] to-[#012030] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-lg">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="bg-gradient-to-r from-[#ffc300] to-[#e6a800] px-8 py-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#023047]/20 flex items-center justify-center">
                  <CarFront size={20} className="text-[#023047]" />
                </div>
                <span className="text-[#023047]/70 text-sm font-medium">Pre-registro de conductores</span>
              </div>
              <h1 className="text-2xl font-bold text-[#023047] leading-tight">
                Únete a Ruppit
              </h1>
              <p className="text-[#023047]/70 text-sm mt-1.5 leading-relaxed">
                Completa el formulario y te avisamos cuando la app esté disponible en tu ciudad.
              </p>
            </div>

            <div className="px-8 py-8">
              <DriverRegisterForm />
            </div>

          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            ¿Eres pasajero?{" "}
            <Link href="/" className="text-[#ffc300] hover:underline">
              Vuelve al inicio
            </Link>
          </p>
        </div>
      </main>

    </div>
  )
}
