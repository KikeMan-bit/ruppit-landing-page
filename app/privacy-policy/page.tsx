import type { Metadata } from "next";
import HomeNavbar from "@/app/components/home/HomeNavbar";
import HomeFooter from "@/app/components/home/HomeFooter";
import LegalCenter from "@/app/components/legal/LegalCenter";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo Ruppit recopila, usa y protege tu información personal. Tu privacidad es nuestra prioridad.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ruppit.com/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HomeNavbar />
      <LegalCenter family="privacy" />
      <HomeFooter />
    </div>
  );
}
