import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ruppit – Viaja a tu precio en las provincias de Bolivia",
    short_name: "Ruppit",
    description:
      "La app de movilidad compartida donde tú propones el precio de tu viaje. Conductores verificados en las provincias de Bolivia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f10",
    theme_color: "#ffc400",
    lang: "es",
    categories: ["travel", "navigation", "lifestyle"],
    icons: [
      {
        src: "/logo-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
