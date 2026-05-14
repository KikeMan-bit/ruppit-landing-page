import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TermsAndConditions from "@/app/components/terms-and-conditions";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Ruppit",
  description: "Términos y Condiciones de uso de Ruppit",
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
