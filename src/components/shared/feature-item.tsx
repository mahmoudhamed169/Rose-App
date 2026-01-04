import { Truck } from "lucide-react";
import React from "react";

interface Iprops {
  icone: React.ReactNode;
  title: string;
  subTtile: string;
}

export default function FeatureItem({ icone, subTtile, title }: Iprops) {
  return (
    <div className="w-[300px] h-16 flex items-center justify-center gap-4  ">
      <div className="w-16 h-16 rounded-full flex items-center bg-maroon-600 justify-center text-white">
        {icone}
      </div>
      <div className="">
        <h3 className="font-semibold text-xl text-maroon-600">{title}</h3>
        <p className="text-zinc-500 text-sm mt-1">{subTtile}</p>
      </div>
    </div>
  );
}
