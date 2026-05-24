"use client";

import { motion } from "motion/react";
import { Android } from "@/components/ui/android";
import type { Feature } from "./features";
import { cn } from "@/lib/utils";

type Props = {
  features: Feature[];
  className?: string;
};

function FeatureItem({
  feature,
  align,
  delay,
}: {
  feature: Feature;
  align: "left" | "right";
  delay: number;
}) {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 30 : -30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={cn(
        "flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-200",
        isRight ? "flex-row" : "flex-row-reverse",
      )}
    >
      <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-primary shrink-0">
        {feature.icon}
      </div>
      <div className={cn(isRight ? "text-left" : "text-right")}>
        <p className="font-semibold text-sm text-gray-900 leading-snug mb-1">{feature.title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesPhone({ features, className }: Props) {
  const left = features.slice(0, 2);
  const right = features.slice(2, 4);

  return (
    <div className={cn("w-full max-w-5xl", className)}>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12">
        {/* Left features */}
        <div className="flex flex-col gap-4 items-stretch">
          {left.map((f, i) => (
            <FeatureItem key={f.title} feature={f} align="left" delay={i * 0.1} />
          ))}
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-75 pointer-events-none" />
          <Android
            src="/rupi-maps-3.webp"
            className="relative w-[180px] lg:w-[210px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Right features */}
        <div className="flex flex-col gap-4 items-stretch">
          {right.map((f, i) => (
            <FeatureItem key={f.title} feature={f} align="right" delay={i * 0.1 + 0.15} />
          ))}
        </div>
      </div>
    </div>
  );
}
