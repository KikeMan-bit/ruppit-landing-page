import { FeatureDetails } from "./feature-details";
import type { Feature } from "./features";
import { Android } from "@/components/ui/android";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureCard({ feature, isActive }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex w-[var(--carousel-item-width)] flex-col items-center gap-5 px-2 py-6 transition-all duration-300",
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95",
      )}
    >
      <FeatureDetails feature={feature} isActive={isActive} />
      <div className="w-full flex justify-center">
        <Android src={feature.image} className="w-[150px] h-auto drop-shadow-xl" />
      </div>
    </div>
  );
}
