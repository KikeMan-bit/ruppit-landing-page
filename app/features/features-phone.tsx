"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  isActive,
  onClick,
}: {
  feature: Feature;
  align: "left" | "right";
  delay: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const isRight = align === "right";
  return (
    <motion.button
      initial={{ opacity: 0, x: isRight ? 30 : -30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "flex gap-3 rounded-2xl border p-4 transition-all duration-200 text-left w-full cursor-pointer",
        isActive
          ? "border-primary/60 bg-primary/10 shadow-md scale-[1.02]"
          : "border-white/8 bg-white/5 hover:border-primary/30 hover:shadow-sm hover:scale-[1.01]",
        isRight ? "flex-row" : "flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200",
          isActive ? "bg-primary text-black" : "bg-black text-primary",
        )}
      >
        {feature.icon}
      </div>
      <div className={cn(isRight ? "text-left" : "text-right")}>
        <p
          className={cn(
            "font-semibold text-sm leading-snug mb-1 transition-colors duration-200",
            isActive ? "text-white" : "text-gray-300",
          )}
        >
          {feature.title}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
      </div>
    </motion.button>
  );
}

export function FeaturesPhone({ features, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const left = features.slice(0, 2);
  const right = features.slice(2, 4);

  return (
    <div className={cn("w-full max-w-5xl", className)}>
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12">
        {/* Left features */}
        <div className="flex flex-col gap-4 items-stretch">
          {left.map((f, i) => (
            <FeatureItem
              key={f.title}
              feature={f}
              align="left"
              delay={i * 0.1}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind phone */}
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-3xl scale-125 pointer-events-none" />

          {/* Phone frame with animated screen */}
          <div className="relative w-[240px] lg:w-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="w-full"
              >
                <Android
                  src={features[activeIndex].image}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "rounded-full transition-all duration-200",
                    activeIndex === i
                      ? "w-4 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400",
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right features */}
        <div className="flex flex-col gap-4 items-stretch">
          {right.map((f, i) => (
            <FeatureItem
              key={f.title}
              feature={f}
              align="right"
              delay={i * 0.1 + 0.15}
              isActive={activeIndex === i + 2}
              onClick={() => setActiveIndex(i + 2)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
