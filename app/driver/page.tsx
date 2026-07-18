import type { Metadata } from "next";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeFooter from "../components/home/HomeFooter";
import ConductoresHero from "../components/conductores/ConductoresHero";
import ControlSection from "../components/conductores/ControlSection";
import StepsSection from "../components/conductores/StepsSection";
import RequirementsSection from "../components/conductores/RequirementsSection";
import DifferenceSection from "../components/conductores/DifferenceSection";
import ConductoresFaq from "../components/conductores/ConductoresFaq";
import ConductoresCta from "../components/conductores/ConductoresCta";

export const metadata: Metadata = {
  title: "Maneja con Ruppit – Genera ingresos a tu ritmo",
  description:
    "Únete a la red de conductores de Ruppit en las provincias de Bolivia. Tú decides qué viajes aceptar, cuándo manejar y cuánto ganar. Sin jefes ni horarios fijos.",
  alternates: { canonical: "https://ruppit.com/driver" },
  openGraph: {
    url: "https://ruppit.com/driver",
    title: "Maneja con Ruppit – Genera ingresos a tu ritmo",
    description:
      "Únete a la red de conductores independientes en Bolivia. Tú pones las reglas.",
  },
};

export default function DriverPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <HomeNavbar />
      <main>
        <ConductoresHero />
        <ControlSection />
        <StepsSection />
        <RequirementsSection />
        <DifferenceSection />
        <ConductoresFaq />
        <ConductoresCta />
      </main>
      <HomeFooter />
    </div>
  );
}
