import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Android } from "@/components/ui/android";

const avatars = [
  { imageUrl: "https://i.pravatar.cc/150?img=47", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=32", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=25", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=44", profileUrl: "#" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 pt-10 pb-0 flex-1">
      {/* Badge */}
      <BlurFade delay={0.1} direction="up">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/70 backdrop-blur-sm border border-white/60 rounded-full pl-2 pr-4 sm:pr-5 py-1.5 text-xs sm:text-sm mb-6 sm:mb-8 shadow-sm">
          <AvatarCircles
            avatarUrls={avatars}
            className="[&_img]:h-7 [&_img]:w-7 sm:[&_img]:h-8 sm:[&_img]:w-8 -space-x-3"
          />
          <span className="w-px h-4 bg-gray-200" />
          <span className="text-gray-600">
            Miles de viajeros ya eligen{" "}
            <span className="text-violet-600 font-semibold">Ruppit</span>
          </span>
        </div>
      </BlurFade>

      {/* Heading */}
      <BlurFade delay={0.2} direction="up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-4 sm:mb-5">
          Tu grupo, tu precio,
          <br />
          <span className="text-violet-600 italic">tu viaje.</span>
        </h1>
      </BlurFade>

      {/* Subtext */}
      <BlurFade delay={0.3} direction="up">
        <p className="text-gray-500 text-sm md:text-base max-w-[280px] sm:max-w-xs leading-6 mb-6 sm:mb-7">
          Elige cuántos pasajeros viajan contigo, propón la tarifa y conecta con
          conductores que aceptan tu oferta. Sin precios impuestos, sin sorpresas.
        </p>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.4} direction="up">
        <ShimmerButton
          background="rgb(124 58 237)"
          shimmerColor="#c4b5fd"
          className="text-sm font-medium px-7 sm:px-8 py-3"
        >
          Próximamente
        </ShimmerButton>
      </BlurFade>

      {/* Phone mockup */}
      <div className="mt-10 sm:mt-12 w-full flex justify-center items-center">
        {/* <Image
          src="/app-image-1.png"
          alt="App Ruppit en celular"
          width={320}
          height={469}
          priority
          className="w-[220px] sm:w-[280px] md:w-[320px] h-auto"
        /> */}
        <Android src="/rupi-maps-3.png" className="w-[220px] sm:w-[280px] md:w-[320px] h-auto" />

      </div>
    </section>
  );
}
