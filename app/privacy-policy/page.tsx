import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PrivacyPolicy from "@/app/components/privacy-policy";

export const metadata: Metadata = {
  title: "Política de Privacidad - Ruppit",
  description: "Política de Privacidad de Ruppit",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
