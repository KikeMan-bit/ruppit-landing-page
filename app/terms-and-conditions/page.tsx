import type { Metadata } from "next";
import HomeNavbar from "@/app/components/home/HomeNavbar";
import HomeFooter from "@/app/components/home/HomeFooter";
import TermsAndConditions from "@/app/components/terms-and-conditions";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Lee los términos y condiciones de uso de Ruppit, la app de movilidad compartida en Bolivia.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ruppit.com/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HomeNavbar />
      <TermsAndConditions />
      <HomeFooter />
    </div>
  );
}
