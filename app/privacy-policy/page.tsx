import type { Metadata } from "next";
import HomeNavbar from "@/app/components/home/HomeNavbar";
import HomeFooter from "@/app/components/home/HomeFooter";
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
      <HomeNavbar />
      <PrivacyPolicy />
      <HomeFooter />
    </div>
  );
}
