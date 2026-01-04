import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function MainImage() {
  return (
    <div
      className={cn(
        "w-[329.49px] h-[376.95px] relative ",
        // pseudo element as border
        " before:absolute before:left-0  before:top-0 before:content-['']",
        "before:w-72 before:h-[363px]",
        "before:border-maroon-600 before:border-4 ",

        // corners of  pseudo elemen border
        "before:rounded-tl-[50px] before:rounded-tr-[120px] before:rounded-br-[120px] before:rounded-bl-[120px]",
        "before:rotate-3"
      )}
    >
      <Image
        src="/assets/images/gift1.webp "
        width={302}
        height={344}
        alt="Gift image"
        className="absolute object-cover w-[302px] h-[344px] top-6 left-7 rounded-tl-[50px] rounded-tr-[120px] rounded-br-[120px] rounded-bl-[120px]"
      />
    </div>
  );
}
