import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cuerpo del rediseño Home
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Eyebrows / labels del rediseño Home
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruppit.com"),
  title: {
    default: "Ruppit – Viaja a tu precio en las provincias de Bolivia",
    template: "%s | Ruppit",
  },
  description:
    "Ruppit es la app de movilidad compartida donde tú propones el precio de tu viaje. Conecta con conductores verificados en las provincias de Bolivia. Sin precios impuestos, sin sorpresas.",
  keywords: [
    "Ruppit",
    "app de transporte Bolivia",
    "movilidad compartida provincias Bolivia",
    "viaje compartido Bolivia",
    "taxi app Bolivia",
    "conductor verificado",
    "proponer precio viaje",
    "transporte alternativo Bolivia",
    "carpooling Bolivia",
    "ride sharing Bolivia",
    "provincias Bolivia transporte",
    "app movilidad Bolivia",
  ],
  authors: [{ name: "Ruppit", url: "https://ruppit.com" }],
  creator: "Ruppit",
  publisher: "Ruppit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    siteName: "Ruppit",
    title: "Ruppit – Viaja a tu precio en las provincias de Bolivia",
    description:
      "La app de movilidad compartida donde tú propones el precio. Conductores verificados, sin sorpresas.",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Ruppit – App de movilidad compartida en Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ruppit – Viaja a tu precio en las provincias de Bolivia",
    description:
      "La app de movilidad compartida donde tú propones el precio. Conductores verificados, sin sorpresas.",
    images: ["/logo-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
