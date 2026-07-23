// Enlaces y configuración compartida de la app.

// Dominio canónico del sitio (sin barra final).
export const SITE_URL = "https://ruppit.com"

// Disponible en Google Play. Lanzada el 1 de julio de 2026.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ruppit"

// App Store aún no disponible.
export const APP_STORE_URL = ""

// Perfiles oficiales de Ruppit.
// 👉 Pega aquí las URLs reales. Las que queden vacías se ignoran en el SEO
//    y no se muestran en el footer (no rompen nada).
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ruppit_oficial",
  facebook: "", // Ruppit aún no tiene página de Facebook.
  tiktok: "https://www.tiktok.com/@ruppit_oficial",
}

// `sameAs` para datos estructurados (Schema.org): perfiles oficiales + tienda.
// Se filtran los vacíos para no emitir enlaces rotos.
export const SAME_AS = [
  PLAY_STORE_URL,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.facebook,
  SOCIAL_LINKS.tiktok,
].filter(Boolean)

// Token de verificación de Google Search Console (método "etiqueta HTML").
// 👉 Opcional: solo necesario si NO verificaste el dominio por DNS.
//    Pégalo aquí y se añadirá <meta name="google-site-verification" ...>.
export const GOOGLE_SITE_VERIFICATION = ""
