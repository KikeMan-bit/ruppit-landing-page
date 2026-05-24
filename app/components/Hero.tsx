"use client"

import { motion } from "motion/react"
import { BlurFade } from "@/components/ui/blur-fade";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Android } from "@/components/ui/android";
import { WordRotate } from "@/components/ui/word-rotate";
import { Particles } from "@/components/ui/particles";

const avatars = [
  { imageUrl: "https://i.pravatar.cc/60?img=47", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/60?img=32", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/60?img=25", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/60?img=44", profileUrl: "#" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-4 sm:px-6 pt-24 pb-0 flex-1 overflow-hidden bg-black">

      {/* Radial spotlight detrás del texto */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      {/* Partículas */}
      <Particles className="absolute inset-0 pointer-events-none" quantity={90} color="#ffc300" size={0.55} />

      {/* Badge */}
      <BlurFade delay={0.1} direction="up">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/6 backdrop-blur-sm border border-primary/20 rounded-full pl-2 pr-4 sm:pr-5 py-1.5 text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg shadow-primary/15">
          <AvatarCircles
            avatarUrls={avatars}
            className="[&_img]:h-7 [&_img]:w-7 sm:[&_img]:h-8 sm:[&_img]:w-8 -space-x-3"
          />
          <span className="w-px h-4 bg-primary/60" />
          <span className="text-gray-400">
            Muchos viajeros ya eligen{" "}
            <span className="text-primary font-semibold">Ruppit</span>
          </span>
        </div>
      </BlurFade>

      {/* Heading */}
      <BlurFade delay={0.2} direction="up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-1 sm:mb-2">
          Viajar con Ruppit es
        </h1>
        <WordRotate
          words={["proponer.", "conectar.", "ahorrar.", "llegar."]}
          duration={2000}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold italic text-primary leading-[1.05] tracking-tight mb-4 sm:mb-5"
        />
      </BlurFade>

      {/* Subtext */}
      <BlurFade delay={0.4} direction="up">
        <p className="text-gray-500 text-sm md:text-base max-w-[280px] sm:max-w-md leading-relaxed mb-6 sm:mb-7">
          La app de movilidad para provincias de Bolivia. Elige cuántos pasajeros van,
          propón la tarifa y págala entre todos. Conductores verificados, precio justo.
        </p>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.5} direction="up">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full scale-110 pointer-events-none" />
          <ShimmerButton
            background="#ffc300"
            shimmerColor="#ffe066"
            className="relative text-sm font-medium px-7 sm:px-8 py-3 text-black"
          >
            Próximamente
          </ShimmerButton>
        </div>
      </BlurFade>

      {/* Phone mockup flotante */}
      <BlurFade delay={0.65} direction="up">
        <div className="mt-10 sm:mt-14 flex justify-center items-end relative">

          {/* Glow del teléfono — simula la luz de la pantalla */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-20 bg-primary/40 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-12 bg-primary/50 blur-2xl rounded-full pointer-events-none" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Android
              src="/rupi-maps-3.webp"
              className="w-[220px] sm:w-[280px] md:w-[320px] h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </BlurFade>

      {/* Fade al fondo de la sección para transición suave */}
      <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

    </section>
  );
}
