# Rediseño Landing Conductores — Plan de trabajo

> **Estado:** ✅ TODAS las secciones codeadas + `pnpm build` OK · **Rama:** `redesign/landing-home` · **Inicio:** 2026-07-17
>
> Fuente de verdad para continuar por partes (por si se agotan tokens).
> `[ ]` pendiente · `[~]` en progreso · `[x]` hecho.
>
> **HECHO:** Hero, Control (4 features), Steps (3 bento), Requirements (checklist+mockup),
> Difference (tabla), FAQ (6 Q), CTA (auto). `app/driver/page.tsx` compone todo con
> `HomeNavbar` + `HomeFooter`. Assets en `public/redesign/conductores/`.
> **Pendiente:** QA visual responsive (`pnpm dev`), optimizar assets a WebP, iconos control (usé lucide, no export Figma).

---

## 1. Objetivo
Codear la landing **Conductores** desde Figma, responsive desktop-first, reutilizando el sistema
de diseño del rediseño Home. Ruta destino: **`/driver`** (el nav "Conductores" ya apunta ahí).

- **Figma file key:** `NZ66gSKC9e9mJ0DHcd6Bqu`
- **Frame raíz:** node `1:2` "conductores" (1905 × 5518)
- Variables de Figma vacías → tokens hardcodeados (mismos que Home). Assets expiran a 7 días.

## 2. Sistema de diseño (idéntico a Home — ya implementado)
- Tokens/fuentes ya existen: `--ink #0f0f10`, `--primary #ffc400`, `font-heading` (Geist),
  `font-body` (Inter), `font-eyebrow` (IBM Plex Mono). Eyebrow ámbar `#d99b14` sobre claro / blanco sobre oscuro.
- **Reutilizar:** `app/components/home/_primitives.tsx` (`Container`, `Eyebrow`, `SectionHeading`, `CtaButton`),
  `app/components/home/HomeNavbar.tsx`, `app/components/home/HomeFooter.tsx`.

## 3. Arquitectura
- Componentes nuevos en **`app/components/conductores/`**.
- Reescribir **`app/driver/page.tsx`** para componer las secciones nuevas (preservar metadata/SEO existente).
- Dejar `app/driver/DriverLanding.tsx` sin usar (no borrar aún).

### Archivos a crear
```
app/components/conductores/
  ConductoresHero.tsx      → node 1:6
  ControlSection.tsx       → node 1:25   ("Tú tienes el control, en cada viaje" — 4 features)
  StepsSection.tsx         → node 1:64   ("Regístrate…" — 3 bento con flechas)
  RequirementsSection.tsx  → node 1:111  ("¿Calificas para manejar?" — checklist + mockup)
  DifferenceSection.tsx    → node 1:161  ("Manejar con Ruppit es distinto" — tabla comparativa)
  ConductoresFaq.tsx       → node 1:230  ("Preguntas de conductores")
  ConductoresCta.tsx       → node 1:276  ("Convierte tu auto en tu negocio" + imagen auto)
```

## 4. Secciones (nodos + copy real + assets)

### [ ] P1. Hero — node `1:6` (fondo oscuro)  ✅ copy extraído
- Eyebrow "para conductores".
- H1: "Tu auto es tu **negocio**. Maneja con Ruppit." ("negocio" en `#ffc400`).
- Sub: "Gana dinero extra en Camiri con tus propios horarios. Ve el destino y la tarifa antes de aceptar, y toma solo los viajes que te convienen."
- Botón "Descarga la App".
- **Asset:** ilustración compuesta (conductor + card app) node `1:19` → exportar como 1 PNG (`public/redesign/conductores/hero.png`).

### [ ] P2. ControlSection — node `1:25` (fondo BLANCO)
- Eyebrow "maneja a tu ritmo" (centrado) · Heading "Tú tienes el control, en cada viaje".
- 4 columnas (icono amarillo 58px + título + desc). Títulos reales:
  1. "Tú eliges los viajes"
  2. "Tú decides cuándo"
  3. "Ganas más, sin sorpresas"
  4. "Pagos claros"
- Descripciones: obtener copy real con `get_design_context 1:25` (metadata trae placeholder EN).
- Iconos: exportar (nodes 1:37,1:44,1:51,1:58) o usar lucide equivalentes.

### [ ] P3. StepsSection — node `1:64` (fondo claro)
- Heading izq (real vía get_design_context, layer dice placeholder) + subtítulo der.
- 3 bento (card gris) con ilustración + flecha `ep:right` entre ellas:
  1. "Regístrate"  (screenshot 1:82)
  2. "Verifica tus datos" (screenshot 1:92)
  3. "Empieza a ganar" (screenshot 1:102)
- Copys de descripción: get_design_context. **Assets:** 3 imágenes.

### [ ] P4. RequirementsSection — node `1:111` (fondo claro)
- Izq: eyebrow "Lo que necesitas" · Heading "¿Calificas para manejar?" · subtítulo · checklist (5 ítems, icono check) · botón "Empezar a ganar".
  - Ítem real conocido: "Licencia de conducir vigente" (resto placeholder → get_design_context).
- Der: imagen conductor + mockup iPhone (nodes 1:158 + 1:160). **Asset:** exportar node 1:157 como 1 PNG.

### [ ] P5. DifferenceSection — node `1:161` (fondo claro)
- Eyebrow "La diferencia" · Heading centrado "Manejar con Ruppit es distinto" (confirmar vía get_design_context).
- 2 columnas comparativa:
  - "Otras apps": "El algoritmo asigna el viaje", + (placeholder → copy real).
  - "Ruppit": "Ves destino y tarifa antes de aceptar", "Rechaza sin penalización", "Manejas cuando quieras", + 1.
- Iconos check/cross (nodes 1:178 etc.) → lucide (Check / X).

### [ ] P6. ConductoresFaq — node `1:230` (fondo claro)
- Eyebrow "Antes de empezar" · Heading "Preguntas de conductores". Acordeón (reusar patrón `HomeFaq`).
- Preguntas reales conocidas: "¿Qué necesito para ser conductor de Ruppit?", "¿Cuánto cobra Ruppit de comisión?", "¿Puedo elegir qué viajes aceptar?" + resto (placeholder → get_design_context). Respuestas: redactar copy ES real.

### [ ] P7. ConductoresCta — node `1:276` (card amarilla en bloque oscuro)
- Eyebrow "DESCARGA RUPPIT" · Heading "Convierte tu auto en tu negocio" · subtítulo · botón Google Play.
- **Asset:** imagen auto con branding Ruppit (node 1:282) → `public/redesign/conductores/cta-car.png`.

### [ ] P8. Footer — reutilizar `HomeFooter` (idéntico al de Home). ✅ sin trabajo nuevo.

### [ ] P9. Componer `app/driver/page.tsx` (Navbar + secciones + Footer). Preservar metadata SEO.
### [ ] P10. Verificar `pnpm build` + revisión visual.

## 5. Assets a exportar → `public/redesign/conductores/`
- [ ] `hero.png` (node 1:19, screenshot compuesto)
- [ ] iconos control x4 (1:37,1:44,1:51,1:58) o lucide
- [ ] `step-1/2/3` (1:82,1:92,1:102)
- [ ] `requisitos.png` (node 1:157, conductor + iPhone)
- [ ] `cta-car.png` (node 1:282)

## 6. Cómo retomar
1. `git checkout redesign/landing-home`, abrir este archivo, ir al primer `[ ]`.
2. `get_design_context` con `fileKey=NZ66gSKC9e9mJ0DHcd6Bqu` + node de §4 para copy real + URLs de assets (expiran 7 días).
3. Descargar assets a `public/redesign/conductores/`, construir componente, marcar `[x]`.
4. Convenciones: `"use client"`, `motion/react`, `BlurFade`, `next/image`, `cn`, primitivos de `home/_primitives`.

## 7. Notas
- La metadata trae **nombres de capa placeholder en inglés** ("Plane…", "Two Fortune 10…"); el copy real
  sólo aparece con `get_design_context`. Redactar en español real de Ruppit siempre.
- Contexto Bolivia/Camiri, Google Play (Android). Amarillo `#ffc400`.
