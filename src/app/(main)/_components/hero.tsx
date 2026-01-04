import React from "react";
import bannerGift from "/public/assets/images/bannerGift.webp";
import sliderImg from "/public/assets/images/slider-image.webp";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full flex gap-6  h-[440px] ">
      {/* left side */}
      <div className="md:w-[301px]  bg-slate-300 rounded-lg relative ">
        {/*  image */}
        <Image
          src={bannerGift}
          fill
          alt="Gift"
          className="object-fill rounded-lg"
        />

        {/* content layer */}

        <div className=" flex flex-col gap-2.5 absolute left-6 bottom-6  ">
          <Badge
            variant="destructive"
            className="w-36 h-4 text-maroon-600 bg-maroon-50 shadow-none py-0.5 px-2"
          >
            Staring from 10.99 EGP
          </Badge>

          <h3 className="md:w-64 font-semibold text-2xl text-white pb-4">
            Special Gifts For The People You Love
          </h3>

          <Link
            href={"/products"}
            className=" w-32 h-9  py-2.5  bg-maroon-50 flex items-center justify-center gap-1.5 text-maroon-700 rounded-lg  transition-all duration-200  hover:bg-maroon-100  hover:text-maroon-800 "
          >
            <p>Shop Now</p>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1 w-full rounded-lg relative ms-0.5">
        {/*  image */}
        <Image
          src={sliderImg}
          fill
          alt="Gift"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/0 rounded-lg"></div>
        <div className="absolute bottom-9 left-9 w-full max-w-xl">
          <h3 className="font-semibold text-4xl text-white">
            Say It with Flowers
          </h3>
          <p className="mb-9 text-white">
            Elegant gifts for every special moment.
          </p>
          <div className="mt-4">
            <Link
              href="#"
              className=" w-32 h-9  py-2.5  bg-maroon-50 flex items-center justify-center gap-1.5 text-maroon-700 rounded-lg  transition-all duration-200  hover:bg-maroon-100  hover:text-maroon-800 "
            >
              I’m buying!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
