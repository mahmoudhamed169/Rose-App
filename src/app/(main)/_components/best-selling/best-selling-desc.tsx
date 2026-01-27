import SubTitle from "@/components/shared/sub-title";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BestSellingDesc() {
  return (
    <div className="desc w-[291px] h-full ">
      <SubTitle text="best selling" />
      <h2 className="font-bold text-3xl  text-maroon-700 mt-2.5">
        <span className="text-soft-pink-500">Check Out</span> What Everyone’s{" "}
        <span className="text-soft-pink-500">Buying</span> Right Now
      </h2>

      <p className="text-zinc-600 mt-2 tracking-normal leading-none">
        Not sure what to choose? <br /> Start with our best sellers, these are
        the gifts our customers keep coming back for. Whether you're celebrating
        a birthday, anniversary or wedding, our top picks are guaranteed to
        leave a lasting impression.
      </p>

      <Link
        href="/"
        className="
    bg-maroon-600 text-white
    w-32 h-9
    flex items-center justify-center gap-2.5
    rounded-lg mt-16
    transition-all duration-300 ease-out
    hover:bg-maroon-700
    hover:scale-105
    group

  "
      >
        Explore gifts
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
