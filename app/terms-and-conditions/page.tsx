import type { Metadata } from "next";
import HomeNavbar from "@/app/components/home/HomeNavbar";
import HomeFooter from "@/app/components/home/HomeFooter";
import LegalCenter from "@/app/components/legal/LegalCenter";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Lee los términos y condiciones de uso de Ruppit: transporte, delivery, locales y farmacias de turno.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ruppit.com/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HomeNavbar />
      <LegalCenter family="terms" />
      <HomeFooter />
    </div>
  );
}
