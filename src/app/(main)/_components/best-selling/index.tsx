import SubTitle from "@/components/shared/sub-title";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import BestSellingDesc from "./best-selling-desc";
import BestSellingSlider from "./best-selling-slider";

export default function BestSelling() {
  return (
    <section className="min-h-[359px] w-full mt-28 mb-36 flex gap-9">
      <BestSellingDesc />
      <BestSellingSlider />
     
    </section>
  );
}
