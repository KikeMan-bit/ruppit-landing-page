"use client";

import { FeatureDetails } from "./feature-details";
import type { Feature } from "./features";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  features: Feature[];
  className?: string;
};

export function FeaturesTabs({ features, className }: Props) {
  const [activeTab, setActiveTab] = useState(features[0].title);
  const activeFeature = features.find((f) => f.title === activeTab) ?? features[0];

  return (
    <Tabs className={cn("w-full max-w-6xl", className)} value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid h-auto w-full grid-cols-4 gap-6">
        {features.map((feature) => (
          <TabsTrigger
            key={feature.title}
            value={feature.title}
            className="flex cursor-pointer flex-col items-center justify-start gap-5 px-2 py-6"
          >
            <FeatureDetails feature={feature} isActive={activeTab === feature.title} />
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="bg-card mt-2 flex w-full justify-center rounded-lg border p-8 pb-0"
        >
          <Image src={activeFeature.image} alt="App Image" width={304} height={445} />
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
