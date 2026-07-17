"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { PLAY_STORE_URL } from "@/lib/constants";
import { Container, Eyebrow } from "./_primitives";

export default function DownloadCta() {
  return (
    <section className="bg-ink pt-14 pb-6 sm:pt-20">
      <Container>
        <BlurFade delay={0.1} direction="up" inView>
          <div className="relative overflow-hidden rounded-3xl bg-[#e9b035]">
            <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Texto */}
              <div className="relative z-10 p-8 sm:p-12 lg:py-16 lg:pl-16 lg:pr-0">
                <Eyebrow className="text-black">Descarga Ruppit</Eyebrow>
                <h3 className="mt-4 max-w-[460px] font-heading text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1d1f20] sm:text-[36px] lg:text-[44px]">
                  Tu próximo viaje te está esperando
                </h3>
                <p className="mt-3 max-w-[520px] font-body text-[16px] leading-6 text-[#4e5355]">
                  Propón tu precio, viaja con conductores verificados y muévete
                  por tu provincia como nunca antes. Descárgala gratis.
                </p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descárgala en Google Play"
                  className="mt-6 inline-block w-fit transition-transform hover:scale-[1.03]"
                >
                  <Image
                    src="/logo-black-play-store.png"
                    alt="Disponible en Google Play"
                    width={646}
                    height={250}
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              {/* Teléfono */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]">
                <Image
                  src="/redesign/cta-phone.png"
                  alt="App de Ruppit en un teléfono"
                  fill
                  className="object-contain object-bottom lg:object-center"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
