import { Check } from "lucide-react";
import React from "react";

export default function AboutFeatures() {
    const FEATURES = ["Competitive Prices & Easy Shopping","Competitive Prices & Easy Shopping","Competitive Prices & Easy Shopping","Competitive Prices & Easy Shopping"];

    return (
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
                <AboutFeatuerItem key={feature} title={feature} />
            ))}
        </div>
    )


}

function AboutFeatuerItem({ title }: { title: string }) {
  return (
    
    <div className="flex items-center gap-5">
      <Check className="stroke-[#741C21] text-sm dark:stroke-[#FF85A2]" />
      <span className="text-zinc-800 dark:text-zinc-50">{title}</span>
    </div>
  );
}
