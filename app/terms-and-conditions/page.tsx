import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}
