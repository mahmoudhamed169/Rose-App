import SubTitle from "@/components/shared/sub-title";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import AboutFeatures from "./about-features";

export default function AboutContent() {
  return (
    <div className="w-[530px] h-[376px]  my-5 py-0.5  me-9 flex-1">
      <SubTitle text="about" />
      <h3 className="mt-6 text-maroon-700 font-bold text-3xl">
        Delivering the <span className="text-soft-pink-500">Finest</span> Gift
        Boxes for Your <span className="text-soft-pink-500">special</span>{" "}
        Moments
      </h3>
      <p className="mt-2 text-zinc-500 tracking-normal leading-none">
        Make every moment memorable with our premium gift boxes. Carefully
        curated and beautifully packaged, each box is filled with handpicked
        items designed to impress. Whether it's for a birthday, wedding, or a
        simple “thank you,” our gift boxes are crafted to leave a lasting
        impression — because thoughtful gifting starts here.
      </p>
      <Link
        href="/"
        className="
    bg-maroon-600 text-white
    w-32 h-9
    flex items-center justify-center gap-2.5
    rounded-lg mt-8
    transition-all duration-300 ease-out
    hover:bg-maroon-700
    hover:scale-105
    group
  "
      >
        Discover
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
      <AboutFeatures />
    </div>
  );
}
