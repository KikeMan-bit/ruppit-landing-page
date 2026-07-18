import type { Metadata } from "next";
import HomeNavbar from "@/app/components/home/HomeNavbar";
import HomeFooter from "@/app/components/home/HomeFooter";
import DeleteAccount from "@/app/components/delete-account";

export const metadata: Metadata = {
  title: "Eliminar cuenta",
  description:
    "Aprende cómo eliminar tu cuenta de Ruppit, qué datos se borran y cuáles son las condiciones del proceso.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ruppit.com/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HomeNavbar />
      <DeleteAccount />
      <HomeFooter />
    </div>
  );
}
