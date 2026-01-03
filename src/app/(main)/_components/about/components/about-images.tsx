import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import MainImage from "./main-image";

const roundedStyling ="rounded-tl-[50px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[50px]"

export default function AboutImages() {
  return (
    <div className="w-[530px] h-[376px]  flex gap-2">
      {/* Main Image */}
      <MainImage />
      {/* Right side Images */}
      <div className="flex flex-col gap-2 w-48 h-[345px] my-4">
        <Image
          src="/assets/images/gift2.webp"
          alt="Gift Image "
          width={193}
          height={193}
          className="w-[193px] h-[193px] rounded-full object-cover"
        />
        <Image
          src="/assets/images/gift3.webp"
          alt="Gift Image "
          width={193}
          height={193}
          className={cn("w-[193px] h-[144px]   object-fill",roundedStyling)}
        />
      </div>
    </div>
  );
}
