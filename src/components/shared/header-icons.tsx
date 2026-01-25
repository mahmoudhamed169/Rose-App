import { Bell, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { Notification } from "./notification";

export default function HeaderIcons() {
  return (
    // header icons container
    <div className="flex items-center gap-2.5 text-zinc-700">
      {/* header icons will go here */}
      <Link href="/favorites">
        <Heart
          size={24}
          strokeWidth={1.8}
          className=" hover:stroke-maroon-600 transition-colors duration-200"
        />
      </Link>

      <Link href="/cart " className="relative">
        <Badge className="absolute -right-1.5 -top-1.5 h-4 w-4 items-center justify-center  text-10 p-2 text-white bg-red-600 rounded-full">
          8
        </Badge>
        <ShoppingCart
          size={24}
          strokeWidth={1.8}
          className=" hover:stroke-maroon-600 transition-colors duration-200"
        />
      </Link>
      {/* <Notification /> */}
      <div className="relative">
        <Badge className="absolute -right-1.5 -top-1.5 h-4 w-4 items-center justify-center  text-10 p-2 text-white bg-red-600 rounded-full">
          8
        </Badge>
        <Bell
          size={24}
          strokeWidth={1.8}
          className=" hover:stroke-maroon-600 transition-colors duration-200"
        />
      </div>
    </div>
  );
}
