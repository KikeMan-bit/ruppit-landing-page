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
    <section className="relative flex flex-col items-center text-center px-4 sm:px-6 pt-10 pb-0 flex-1 overflow-hidden">
      <Particles className="absolute inset-0 pointer-events-none" quantity={60} color="#ffc300" size={0.5} />
      {/* Badge */}
      <BlurFade delay={0.1} direction="up">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border border-primary/30 rounded-full pl-2 pr-4 sm:pr-5 py-1.5 text-xs sm:text-sm mb-6 sm:mb-8 shadow-md shadow-primary/10">
          <AvatarCircles
            avatarUrls={avatars}
            className="[&_img]:h-7 [&_img]:w-7 sm:[&_img]:h-8 sm:[&_img]:w-8 -space-x-3"
          />
          <span className="w-px h-4 bg-primary" />
          <span className="text-gray-600">
            Muchos viajeros ya eligen{" "}
            <span className="text-primary font-semibold">Ruppit</span>
          </span>
        </div>
      </BlurFade>

      {/* Heading */}
      <BlurFade delay={0.2} direction="up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-1 sm:mb-2">
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
        <ShimmerButton
          background="#ffc300"
          shimmerColor="#ffe066"
          className="text-sm font-medium px-7 sm:px-8 py-3 text-black"
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
        <Android src="/rupi-maps-3.webp" className="w-[220px] sm:w-[280px] md:w-[320px] h-auto drop-shadow-2xl" />

      </div>
    </section>
  );
}
