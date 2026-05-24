"use client";

import type { Feature } from "./features";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type FeatureDetailsProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureDetails({ feature, isActive }: FeatureDetailsProps) {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={cn(
          "bg-secondary text-foreground w-fit rounded-sm p-3 transition-colors duration-200",
          isActive && "bg-primary text-black",
        )}
      >
        {icon}
      </motion.div>
      <div className="text-center">
        <p className="mb-2 text-base font-medium">{title}</p>
        <p className="text-muted-foreground text-sm text-wrap">{description}</p>
      </div>
    </>
  );
}
