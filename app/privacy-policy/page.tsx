import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PrivacyPolicy from "@/app/components/privacy-policy";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo Ruppit recopila, usa y protege tu información personal. Tu privacidad es nuestra prioridad.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ruppit.com/privacy-policy" },
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
