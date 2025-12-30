import { ClipboardList, Gift, Headset, Home, Info, PartyPopper } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  { name: "home", href: "/", icone: <Home /> },
  { name: "products", href: "/", icone: <Gift /> },
  { name: "categories", href: "/", icone: <ClipboardList /> },
  { name: "occasions", href: "/", icone: <PartyPopper /> },
  { name: "contact", href: "/", icone: <Headset /> },
  { name: "about ", href: "/", icone: <Info /> },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-maroon-700 p-3 h-12 flex justify-center items-center">
      <ul className="flex gap-4">
        {links.map((link, index) => (
          <li className="text-white px-3 py-1.5 border-b-2 border-transparent hover:border-soft-pink-300 hover:text-soft-pink-300 transition-all" key={index}>
            <Link href={link.href} className="flex items-center gap-1">
              {link.icone}
              <span className="ml-2 capitalize">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
