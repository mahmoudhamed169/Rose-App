import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDown,
  LogOut,
  MapPinHouse,
  ScrollText,
  User,
} from "lucide-react";
import Link from "next/link";

const links = [
  { name: "My Profile", href: "/profile", icon: <User size={16} /> },
  { name: "My Addresses", href: "/profile", icon: <MapPinHouse size={16} /> },
  { name: "My Orders", href: "/profile", icon: <ScrollText size={16} /> },
];

export function ProfileOption() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" shadow-none font-medium text-zinc-700 flex items-center justify-center h-12 w-32 rounded-none border-e border-zinc-200 gap-1 px-4 hover:text-maroon-600 transition-colors duration-200">
          <h6 className="text-maroon-700 mt-2 font-medium relative before:content-['Hello'] before:absolute before:-top-3 before:-left-0 before:text-zinc-500 before:text-sm">
            Jonathan
          </h6>
          <ChevronDown className="mt-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-56 min-h-46 bg-white border border-zinc-100 shadow-sm rounded-lg flex flex-col">
        <h6 className="text-maroon-700 text-sm font-semibold py-1.5 px-2 mt-3 border-b border-zinc-200">
          Jonathan Adrian
        </h6>

        <div className="flex flex-col flex-1 justify-between gap-3">
          {/* Top links */}
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-zinc-700 font-medium text-sm hover:bg-zinc-200 h-8 px-2 transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logout pinned to bottom */}
          <Link
            href="/profile"
            className="flex items-center gap-2 hover:bg-zinc-200 h-8 px-2 transition-colors text-maroon-700 font-medium hover:text-red-700"
          >
            <LogOut size={16} />
            Log out
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
