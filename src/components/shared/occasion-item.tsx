import Image from "next/image";
import React from "react";

import img1 from "/public/assets/images/occasion1.webp";
import { Badge } from "../ui/badge";

interface Iprops {
  img: string;
  badge: string;

  decs: string;
}

export default function OccasionItem({ img, badge, decs }: Iprops) {
  return (
    <div className="relative w-full h-72">
      <Image
        src={img}
        fill
        className=" object-cover rounded-lg"
        alt="Occaion widding"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0 rounded-lg"></div>

      <div className=" flex flex-col gap-2.5 absolute left-6 bottom-6  ">
        <Badge
          variant="destructive"
          className="  w-fit  h-4 text-maroon-600 bg-maroon-50 shadow-none py-0.5 px-2"
        >
          {badge}
        </Badge>

        <h3 className="w-full  font-semibold text-2xl text-white ">{decs}</h3>
      </div>
    </div>
  );
}
