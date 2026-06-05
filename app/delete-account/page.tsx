import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
      <Navbar />
      <DeleteAccount />
      <Footer />
    </div>
  );
}
