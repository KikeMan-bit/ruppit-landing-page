# Rediseño Landing Home — Plan de trabajo

> **Estado:** en progreso · **Rama:** `redesign/landing-home` · **Última actualización:** 2026-07-16
>
> Este archivo es la **fuente de verdad** para continuar el rediseño en próximas sesiones.
> Marca cada paso: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho.

---

## 1. Objetivo

Recodear la landing **Home** desde el diseño de Figma (tema oscuro + amarillo, ilustraciones flat),
responsive desktop-first, sin romper las demás rutas del sitio.

- **Figma file key:** `o5t5XBhht3ZbkUsSigwn0h`
- **Frame raíz (Home - Desktop):** node `2:6115` (1905 × 6785)
- **URL:** https://www.figma.com/design/o5t5XBhht3ZbkUsSigwn0h/Untitled?node-id=2-6115
- Las **variables de Figma están vacías** (`get_variable_defs` → `{}`): los tokens están hardcodeados
  por sección. Extraer con `get_design_context` nodo por nodo.

---

## 2. Sistema de diseño (extraído del Hero real, node 2:6119)

### Tipografías
| Uso | Fuente | Tamaño / interlínea / tracking |
|-----|--------|-------------------------------|
| Títulos (H1/H2/H3) | **Geist Medium** (ya cargada) | H1 58px / 75.4px / -1.74px (`-0.03em`) |
| Cuerpo / párrafos | **Inter** (Regular 430, Medium) — **AÑADIR** | 18px / 27px |
| Eyebrows / labels | **IBM Plex Mono Medium** — **AÑADIR** | 15px / uppercase / tracking 0.3px |
| Texto de botón | Inter Medium | 16px / 24px |

### Colores
| Token | Valor | Uso |
|-------|-------|-----|
| Marca / primary | `#ffc400` | botones, acentos (Figma usa `#ffc400`; el token actual era `#ffc300`) |
| Ink / fondo oscuro | `#0f0f10` | Hero, secciones oscuras, footer |
| Texto oscuro | `#171717` | texto sobre amarillo/blanco |
| Texto claro | `#ffffff` | sobre oscuro |
| Cuerpo sobre oscuro | `white / 60%` opacity | subtítulos |
| Fondos claros | `#ffffff` / gris muy claro | Servicios, Bento, FAQ |

### Layout / contenedor
- Contenedor: `mx-auto w-full max-w-[1536px] px-[44px]` → contenido útil **1448px**.
- Secciones alternan fondo **oscuro (`#0f0f10`)** ↔ **claro (blanco/gris)**.
- Botón base: `bg-[#ffc400] text-[#171717] rounded-[8px] px-4 py-2 text-16 font-medium` (Inter).

---

## 3. Arquitectura de archivos (decisión)

- **Componentes nuevos** en `app/components/home/` (no tocar los compartidos todavía).
- **Motivo:** `Navbar` y `Footer` los usan también `privacy-policy`, `terms-and-conditions`,
  `delete-account`, `driver/DriverLanding`, `AudienceLanding`. Rediseñarlos in-place rompería esas rutas.
- `Hero` y `FAQ` sólo los usa `app/page.tsx` (se pueden reemplazar sin riesgo, pero por consistencia
  también van como componentes nuevos en `home/`).
- `app/page.tsx` se reescribe para componer las nuevas secciones.
- **Paso futuro (fuera de este alcance):** promover `HomeNavbar`/`HomeFooter` a global y migrar el resto de rutas.

### Archivos a crear
```
app/components/home/
  _primitives.tsx     → Container, Eyebrow, SectionHeading, CtaButton (tokens compartidos)
  HomeNavbar.tsx      → node 2:6370
  HomeHero.tsx        → node 2:6119
  TrustSection.tsx    → node 2:6133  ("Viaja con gente en quien confiar")
  ServicesSection.tsx → node 2:6148  ("Nuestros servicios" — 3 cards)
  SafetySection.tsx   → node 2:6179  ("Tu seguridad es lo primero")
  ProcessSection.tsx  → node 2:6203  ("La forma más justa de moverte. Punto." — 3 bento)
  HomeFaq.tsx         → node 2:6242  ("Lo que más nos preguntan")
  DownloadCta.tsx     → node 2:6313/2:6315 ("Tu próximo viaje te está esperando")
  HomeFooter.tsx      → node 2:6335 + 2:6365
```
- Reutilizar: `lib/constants.ts` (`PLAY_STORE_URL`), `lib/utils.ts` (`cn`),
  UI existentes en `components/ui/` (`BlurFade`, `Magnetic`, etc.) y `motion/react`.

---

## 4. Secciones (mapa de nodos + contenido + assets)

> Orden vertical del diseño. Cada sección: extraer tokens con `get_design_context <node>`,
> exportar assets, construir componente, marcar `[x]`.

### [x] 4.0 Navbar — node `2:6370` ✅
- Logo (`logo-sec 1` 2:6373 → usar `public/logo-sec.webp`).
- Links: **Pasajeros → /customer · Conductores → /driver · Locales → /business · Repartidor → /delivery · FAQs → /#faq**.
- Selector idioma "Español ▾" (2:6389) + botón "Descarga la App" (2:6395, amarillo).
- Alto 58px, fondo oscuro.

### [x] 4.1 Hero — node `2:6119` ✅
- Eyebrow "TAXI PARA LAS PROVINCIAS" (IBM Plex Mono).
- H1 "Tú propones el precio de tu viaje" (Geist 58px).
- Sub "La app de taxi para las provincias. Elige cuántos van y propón tu tarifa. Conductores verificados, sin sorpresas." (Inter 18px, opacity 60).
- Botón "Descarga la App".
- **Asset:** ilustración derecha `Vector 3` (2:6132, 731×619) → `public/redesign/hero-illustration.*`.

### [ ] 4.2 TrustSection — node `2:6133`
- Eyebrow "CONDUCTORES VERIFICADOS" (centrado).
- H2 "Viaja con gente en quien confiar" + subtítulo + botón "Descarga la App".
- **Asset:** ilustración grande taxi (2:6145, 1448×622) → `public/redesign/trust-taxi.*`.

### [ ] 4.3 ServicesSection — node `2:6148` (fondo claro)
- Eyebrow "UNA PLATAFORMA" · H2 "Nuestros servicios" · sub "Una sola app para moverte, pedir y resolver…".
- 3 cards (imagen 466×466 + título + desc):
  1. **Viajes dentro de la ciudad** (2:6156)
  2. **Delivery** (2:6164)
  3. **Farmacias de turno** (2:6172)
- **Assets:** 3 ilustraciones → `public/redesign/service-{ciudad,delivery,farmacia}.*`.

### [ ] 4.4 SafetySection — node `2:6179` (fondo oscuro)
- Eyebrow "SEGURIDAD" · H2 "Tu seguridad es lo primero".
- Card "Viaja tranquilo con Ruppit" + lista + link "Conoce más" + foto persona + icono escudo.
- **Assets:** foto (2:6188, 696×520) → `public/redesign/safety-person.*`; escudo (2:6197, 188×188) → `public/redesign/shield.svg`.

### [ ] 4.5 ProcessSection — node `2:6203` (fondo claro)
- H2 "La forma más justa de moverte. Punto." + párrafo.
- 3 bento cards (screenshot app 400×399 + título + desc):
  1. **Ingresa cuántos van** (2:6221)
  2. **Propón tu precio** (2:6231)
  3. **Elige con confianza** (2:6241)
- **Assets:** 3 screenshots → `public/redesign/process-{1,2,3}.*`.
- Nota: los textos de descripción en Figma son placeholder (inglés "Plane AI…"); redactar copy real ES.

### [ ] 4.6 HomeFaq — node `2:6242` (fondo claro)
- Eyebrow "FAQ" · H2 "Lo que más nos preguntan".
- Acordeón. **Reusar el array `faqs`** del `app/components/FAQ.tsx` actual (copy ya en español).
- Varias filas del diseño son placeholder ("Will Plane integrate…"): usar las preguntas reales existentes.

### [ ] 4.7 DownloadCta — node `2:6313` / `2:6315` (bloque amarillo)
- Eyebrow "DESCARGA RUPPIT" · H3 "Tu próximo viaje te está esperando" + sub.
- Botón Google Play (2:6325) → usar `public/logo-black-play-store.png` o badge oficial.
- **Asset:** mockup teléfono (2:6334, 507×909) → `public/redesign/cta-phone.*`.

### [ ] 4.8 HomeFooter — node `2:6335` + `2:6365`
- Logo + tagline "Viajes seguros y baratos para camiri." 
- Columna **Learn**: Pasajeros, Conductores, Locales, Repartidores.
- Columna **Company**: Términos y Condiciones, Políticas de privacidad.
- Texto legal/copyright completo (2:6369): "© 2026 Ruppit. Todos los derechos reservados. Ruppit es una plataforma tecnológica…".

---

## 5. Assets a exportar de Figma
Guardar en `public/redesign/`. Obtener URLs vía `get_design_context` de cada sección (campo `img*`)
o `download_assets` / `export_nodes`, luego descargar con `curl`.

- [x] `hero-illustration` (2:6132) → `public/redesign/hero-illustration.png`
- [ ] `trust-taxi` (2:6145)
- [ ] `service-ciudad` (2:6156), `service-delivery` (2:6164), `service-farmacia` (2:6172)
- [ ] `safety-person` (2:6188), `shield` (2:6197)
- [ ] `process-1` (2:6221), `process-2` (2:6231), `process-3` (2:6241)
- [ ] `cta-phone` (2:6334)

Formato: preferir SVG para ilustraciones vectoriales/iconos; PNG/WebP para fotos y mockups.

---

## 6. Checklist ordenado de ejecución

- [x] **P0. Setup fuentes + tokens** — `Inter` + `IBM_Plex_Mono` en `layout.tsx` (vars `--font-inter`, `--font-ibm-mono`);
      en `globals.css`: utilidades `font-heading`/`font-body`/`font-eyebrow`, `--color-ink`, `--primary: #ffc400`, `--ink: #0f0f10`.
- [x] **P1. Primitivos** — `app/components/home/_primitives.tsx` (`Container`, `Eyebrow`, `SectionHeading`, `CtaButton`). ✅
- [x] **P2. Assets** — `public/redesign/` con todos los assets descargados (§5). ✅
- [x] **P3. Navbar** (4.0) — `HomeNavbar.tsx` ✅
- [x] **P4. Hero** (4.1) — `HomeHero.tsx` ✅
- [x] **P5. TrustSection** (4.2) — `TrustSection.tsx` ✅ (fondo blanco, botón oscuro)
- [x] **P6. ServicesSection** (4.3) — `ServicesSection.tsx` ✅ (fondo **oscuro**, header izq, 3 cards)
- [x] **P7. SafetySection** (4.4) — `SafetySection.tsx` ✅ (oscuro, card off-white + foto + escudo)
- [x] **P8. ProcessSection** (4.5) — `ProcessSection.tsx` ✅ (blanco, 3 bento, `mix-blend-darken`)
- [x] **P9. HomeFaq** (4.6) — `HomeFaq.tsx` ✅ (blanco, acordeón, copy real ES)
- [x] **P10. DownloadCta** (4.7) — `DownloadCta.tsx` ✅ (card amarilla `#e9b035` sobre bloque oscuro del footer)
- [x] **P11. HomeFooter** (4.8) — `HomeFooter.tsx` ✅ (oscuro, columnas Explora/Legal + legal completo)
- [x] **P12. Componer** `app/page.tsx` con las 9 secciones nuevas (JSON-LD + metadata intactos). ✅
- [~] **P13. Responsive** — clases base puestas (grids 1→3 col, flex col→row, tipografía `clamp`).
      **Falta QA visual** en móvil/tablet: revisar `SafetySection` (foto+escudo), `DownloadCta` (teléfono) y bento.
- [x] **P14. Verificar build** — `pnpm build` OK (13 rutas prerenderizadas). **Falta** revisión visual (`pnpm dev`).

### Pendientes (próxima sesión)
- [ ] QA visual responsive (`pnpm dev`) y ajustes finos por breakpoint (P13).
- [ ] Optimizar assets pesados (`hero-illustration.png` 2.7 MB, `cta-phone.png` 2.6 MB, `safety-person.jpg` 2.5 MB) → WebP.
- [ ] Limpiar componentes viejos ya no usados por Home (`Hero.tsx`, `HowItWorks.tsx`, `Features`, `FAQ.tsx`, `AppShowcase`, `Safety`) si no se usan en otras rutas.
- [ ] (Opcional) Promover `HomeNavbar`/`HomeFooter` a global y migrar el resto de rutas.
- [ ] Funcionalidad real del selector de idioma (hoy es estático).

---

## 7. Cómo retomar en la próxima sesión

1. `git checkout redesign/landing-home`
2. Abrir este archivo y mirar el primer `[ ]` sin marcar en §6.
3. Para la sección en curso: `get_design_context` con `fileKey=o5t5XBhht3ZbkUsSigwn0h` y el `node` de §4
   para recuperar tokens exactos + URLs de assets. Las URLs de assets de Figma **expiran a los 7 días**.
4. Descargar assets a `public/redesign/` con `curl`.
5. Construir el componente siguiendo los primitivos de `_primitives.tsx` y las convenciones del repo
   (`"use client"`, `motion/react`, `BlurFade`, `next/image`, `cn`).
6. Marcar el paso como `[x]` en §6 y anotar cualquier decisión nueva.

### Convenciones del repo (recordatorio)
- Next.js 16 + React 19, App Router. Tailwind v4 (config en `app/globals.css` con `@theme`).
- Import alias: `@/` = raíz. UI en `components/ui/`, secciones en `app/components/`.
- Animaciones: `motion/react` + `BlurFade` (fade-in on view). `Magnetic` para hover.
- `PLAY_STORE_URL` desde `@/lib/constants`. `cn()` desde `@/lib/utils`.
- `AGENTS.md` menciona docs en `node_modules/next/dist/docs/` pero **esa carpeta no existe** →
  guiarse por el código existente del repo.

---

## 8. Notas / decisiones
- El diseño mezcla copy real en español con placeholder en inglés (plantilla "Plane"). Usar siempre
  copy español real de Ruppit (ver `FAQ.tsx`, `page.tsx` JSON-LD, componentes actuales).
- Amarillo del diseño `#ffc400` vs token previo `#ffc300` → se estandariza en **`#ffc400`**.
- Mantener SEO: conservar `jsonLd` (Organization/WebSite/FAQPage) y `metadata` de `page.tsx`.
