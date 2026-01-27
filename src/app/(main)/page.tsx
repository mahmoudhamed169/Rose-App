import React from "react";
import Hero from "./_components/hero";
import Occasions from "./_components/occasions";
import Features from "./_components/features";
import { Truck } from "lucide-react";
import AboutSection from "./_components/about";

import Gallery from "./_components/gallery/gallery";
import Campaies from "./_components/campaies";
import BestSelling from "./_components/best-selling";

export default function page() {
  return (
    <main className=" text-maroon-500 w-[1280px]  m-auto my-11 flex flex-col gap-6  ">
      <Hero />
      <Occasions />
      <Features />
      <BestSelling />
      <AboutSection />
      <Gallery />
      <Campaies/>
    </main>
  );
}
