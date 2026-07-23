"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TermsAndConditions from "@/app/components/terms-and-conditions";
import PrivacyPolicy from "@/app/components/privacy-policy";
import PasajerosTerms from "./docs/terms/pasajeros";
import ConductoresTerms from "./docs/terms/conductores";
import LocalesTerms from "./docs/terms/locales";
import DeliveryTerms from "./docs/terms/delivery";
import FarmaciasTerms from "./docs/terms/farmacias";
import PasajerosPrivacy from "./docs/privacy/pasajeros";
import ConductoresPrivacy from "./docs/privacy/conductores";
import LocalesPrivacy from "./docs/privacy/locales";
import DeliveryPrivacy from "./docs/privacy/delivery";
import FarmaciasPrivacy from "./docs/privacy/farmacias";

export type LegalFamily = "terms" | "privacy";

type DocEntry = { id: string; label: string; Doc: ComponentType };

/**
 * Cada ruta tiene su propia familia de documentos y su propio sidebar.
 * No hay cruce: /terms-and-conditions nunca muestra privacidad y viceversa.
 */
const FAMILIES: Record<LegalFamily, { crossLabel: string; crossHref: string; docs: DocEntry[] }> = {
  terms: {
    crossLabel: "Política de Privacidad →",
    crossHref: "/privacy-policy",
    docs: [
      { id: "general", label: "Términos generales", Doc: TermsAndConditions },
      { id: "pasajeros", label: "Pasajeros", Doc: PasajerosTerms },
      { id: "conductores", label: "Conductores", Doc: ConductoresTerms },
      { id: "locales", label: "Locales y negocios", Doc: LocalesTerms },
      { id: "delivery", label: "Delivery", Doc: DeliveryTerms },
      { id: "farmacias", label: "Farmacias de turno", Doc: FarmaciasTerms },
    ],
  },
  privacy: {
    crossLabel: "Términos y Condiciones →",
    crossHref: "/terms-and-conditions",
    docs: [
      { id: "general", label: "Política general", Doc: PrivacyPolicy },
      { id: "pasajeros", label: "Datos de pasajeros", Doc: PasajerosPrivacy },
      { id: "conductores", label: "Datos de conductores", Doc: ConductoresPrivacy },
      { id: "locales", label: "Datos de locales", Doc: LocalesPrivacy },
      { id: "delivery", label: "Datos en delivery", Doc: DeliveryPrivacy },
      { id: "farmacias", label: "Datos en farmacias", Doc: FarmaciasPrivacy },
    ],
  },
};

export default function LegalCenter({ family }: { family: LegalFamily }) {
  const { docs, crossLabel, crossHref } = FAMILIES[family];
  const [active, setActive] = useState(docs[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  // Evita hacer scroll en el primer render (deep link); solo al cambiar de sección.
  const hasInteracted = useRef(false);

  const isValid = useCallback((id: string) => docs.some((d) => d.id === id), [docs]);

  // Deep link: /privacy-policy#locales abre directamente esa sección.
  useEffect(() => {
    const apply = () => {
      const fromHash = window.location.hash.slice(1);
      if (fromHash && isValid(fromHash)) setActive(fromHash);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [isValid]);

  const select = useCallback(
    (id: string) => {
      if (!isValid(id)) return;
      hasInteracted.current = true;
      setActive(id);
      // Cambia el hash sin navegar ni recargar: la ruta se mantiene intacta.
      window.history.replaceState(
        null,
        "",
        id === docs[0].id ? window.location.pathname : `#${id}`
      );
    },
    [docs, isValid]
  );

  useEffect(() => {
    if (!hasInteracted.current) return;
    contentRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [active]);

  const ActiveDoc = (docs.find((d) => d.id === active) ?? docs[0]).Doc;

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-8 px-6 pb-10 pt-8 md:px-11 lg:flex-row lg:gap-14">
      {/* Móvil: chips con scroll horizontal */}
      <nav aria-label="Secciones del documento" className="-mx-6 border-b border-border px-6 pb-4 lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {docs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => select(doc.id)}
              aria-current={active === doc.id ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                active === doc.id
                  ? "border-primary bg-primary/10 text-foreground font-medium"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {doc.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Escritorio: sidebar fijo */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav aria-label="Secciones del documento" className="sticky top-[74px] flex flex-col gap-1">
          <span className="text-muted-foreground mb-1 px-3 text-[11px] font-medium uppercase tracking-[0.08em]">
            {family === "terms" ? "Términos" : "Privacidad"}
          </span>
          {docs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => select(doc.id)}
              aria-current={active === doc.id ? "true" : undefined}
              className={cn(
                "rounded-md border-l-2 px-3 py-1.5 text-left text-sm transition-colors",
                active === doc.id
                  ? "border-primary bg-primary/5 text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {doc.label}
            </button>
          ))}

          <div className="mt-5 flex flex-col gap-2 border-t border-border px-3 pt-4">
            <Link href={crossHref} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {crossLabel}
            </Link>
            <Link
              href="/delete-account"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Eliminar cuenta →
            </Link>
          </div>
        </nav>
      </aside>

      <div ref={contentRef} className="min-w-0 flex-1 scroll-mt-24">
        <ActiveDoc />
      </div>
    </div>
  );
}
