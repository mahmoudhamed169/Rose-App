import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div className="w-[302px]">
      <Link href={"/products"} className="hover:scale-150 ">
        <Image
          src="/assets/images/product1.webp"
          alt="Image One"
          width={302}
          height={272}
          className=" w-[302px] h-[272px] object-cover rounded-2xl mb-0.5"
        />
        <div className="product-details mt-3">
          <h3 className="text-maroon-700 font-semibold text-lg">
            Dreamy White Roses Bouquet
          </h3>
          <div className="actions mt-3 flex justify-between items-center">
            <div>
              {/* stars */}
              <div className="flex gap-1 stroke-[#FBA707]">
                <Star className="text-[#FBA707] fill-[#FBA707] " />
                <Star className="text-[#FBA707] fill-[#FBA707] " />
                <Star className="text-[#FBA707] fill-[#FBA707] " />
                <Star className="text-[#FBA707] fill-[#FBA707] " />
              </div>
              <div className="mt-2">
                <span className="text-maroon-700">250.00 EGP </span>
                <span className="text-zinc-400 line-through">350.00 EGP</span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-full flex items-center bg-maroon-600 justify-center text-white">
              <ShoppingCart size={24} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
