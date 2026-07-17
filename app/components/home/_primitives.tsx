"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PLAY_STORE_URL } from "@/lib/constants";

/**
 * Primitivos compartidos del rediseño Home.
 * Tokens extraídos del diseño de Figma (frame 2:6115):
 *  - Contenedor: max-w-[1536px] con 44px (px-11) de padding interno.
 *  - Eyebrow: IBM Plex Mono, uppercase, tracking 0.3px.
 *  - Heading: Geist Medium, tracking -0.03em.
 *  - Marca: #ffc400 (token `primary`).
 */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1536px] px-6 md:px-11", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "font-eyebrow text-[13px] sm:text-[15px] uppercase tracking-[0.3px]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-heading font-medium tracking-[-0.03em] leading-[1.1] text-[clamp(2rem,1.2rem+2.6vw,3rem)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Botón/enlace de descarga con brillo animado. Apunta a Google Play por defecto.
 * - `variant="primary"` (default): amarillo marca, para fondos oscuros.
 * - `variant="dark"`: casi-negro (#090b0c) con texto blanco, para fondos claros.
 */
export function CtaButton({
  href = PLAY_STORE_URL,
  children = "Descarga la App",
  className,
  external = true,
  variant = "primary",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: "primary" | "dark";
}) {
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_0_0_0_rgba(255,196,0,0.5)] hover:shadow-[0_0_28px_0_rgba(255,196,0,0.45)]",
    dark: "bg-[#090b0c] text-white hover:shadow-[0_14px_34px_-12px_rgba(0,0,0,0.55)]",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      aria-label={typeof children === "string" ? children : "Descarga la App"}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-5 py-2.5",
        "font-body text-[16px] font-medium transition-shadow",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {/* Brillo que cruza el botón */}
      <motion.span
        className={cn(
          "absolute top-0 bottom-0 w-12 -skew-x-12 blur-md",
          variant === "primary" ? "bg-white/40" : "bg-white/20"
        )}
        initial={{ left: "-30%" }}
        animate={{ left: ["-30%", "130%"] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.8,
        }}
      />
    </motion.a>
  );
}
