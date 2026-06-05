import { FeaturesCarousel } from "./features-carousel";
import { FeaturesPhone } from "./features-phone";
import { Badge } from "@/components/ui/badge";
import { UsersIcon, HandshakeIcon, MapPinIcon, HistoryIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <UsersIcon size={20} />,
    title: "Elige cuántos viajan",
    description:
      "Selecciona el número de pasajeros antes de solicitar tu viaje. Perfecta para salidas en grupo, familia o amigos.",
    image: "/function/1.png",
  },
  {
    icon: <HandshakeIcon size={20} />,
    title: "Negocia tu tarifa",
    description:
      "Tú propones el precio y el conductor acepta. Sin tarifas fijas ni algoritmos ocultos. Justo para ambos.",
    image: "/function/2.png",
  },
  {
    icon: <MapPinIcon size={20} />,
    title: "Guarda tus lugares",
    description:
      "Guarda tu casa, trabajo y lugares favoritos para solicitar viajes en segundos sin escribir la dirección cada vez.",
    image: "/function/3.png",
  },
  {
    icon: <HistoryIcon size={20} />,
    title: "Historial de viajes",
    description:
      "Consulta todos tus viajes anteriores: ruta, precio, conductor y fecha. Repite un viaje con un solo toque.",
    image: "/function/4.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25 bg-black">
      <BlurFade inView delay={0} direction="up">
        <Badge className="uppercase bg-primary text-black border-transparent hover:bg-primary/90">
          Funciones
        </Badge>
      </BlurFade>
      <BlurFade inView delay={0.1} direction="up">
        <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl text-white">
          Todo lo que necesitas
          <div className="text-primary">en un solo viaje</div>
        </h2>
      </BlurFade>
      <BlurFade inView delay={0.2} direction="up">
        <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8 text-gray-200">
          Rupi te da el control total: elige tu grupo, negocia el precio y guarda tus rutas favoritas. Viajar nunca fue
          tan fácil.
        </p>
      </BlurFade>
      <BlurFade inView delay={0.3} direction="up" className="flex w-full flex-col items-center">
        <FeaturesCarousel features={features} className="block lg:hidden" />
        <FeaturesPhone features={features} className="hidden lg:block" />
      </BlurFade>
    </div>
  );
}
