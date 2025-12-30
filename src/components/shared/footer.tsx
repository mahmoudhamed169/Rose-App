import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/logo.webp";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const links = [
  "Home",
  "Products",
  "Categories",
  "Occasions",
  "About Us",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
  "FAQs",
];

export default function Footer() {
  return (
    <footer className="h-96 bg-zinc-800 py-10 px-20 flex">
      {/* left side */}
      <div className="flex flex-col justify-center items-center w-64">
        <Image
          src={logo}
          alt="Rose"
          width={240}
          height={225}
          className="mb-1.5"
        />
        <div className="flex flex-col gap-1.5 mt-4 justify-center items-center">
          <h3 className="text-soft-pink-300 font-semibold text-lg ">
            Rose E-Commerce App
          </h3>
          <h6 className="text-zinc-100 font-normal text-sm">
            All rights reserved | 2025
          </h6>
        </div>
      </div>

      {/* middle section */}
      <div className="w-[623px] px-4">
        <h3 className="text-soft-pink-300 font-semibold text-lg">
          Discover our website
        </h3>
        <ul className=" flex flex-col">
          {links.map((link) => (
            <li
              key={link}
              className="font-medium text-zinc-100 hover:text-soft-pink-300 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* right side */}

      <div className="w-96">
        <h2 className="text-soft-pink-300 font-semibold text-xl">Get <span className="text-zinc-100">20% </span>Off Discount Coupon</h2>
        <p className="text-zinc-500 font-normal text-sm">By subscribing to our newsletter</p>

        <div className="mt-4 relative">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full h-10 rounded-full bg-zinc-600 text-zinc-400 border-zinc-600  focus:outline-none focus:ring-2 focus:ring-soft-pink-300"
          />
          <Button className=" flex gap-2.5 items-center absolute right-0 top-0 w-28 p-2.5 h-10 rounded-full bg-maroon-50 text-maroon-700 font-medium text-sm hover:bg-maroon-100 focus:ring-4 focus:ring-maroon-200">
            Subscribe
            <ArrowRight />
          </Button>
        </div>
      </div>
    </footer>
  );
}
 