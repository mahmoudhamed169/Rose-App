import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

export default function SearchInputHeader() {
  return (
    // search input container
    <div className="relative flex items-center gap-3 flex-1">
      <Search className=" absolute start-4 text-zinc-400" size={18} />
      {/* search input field */}
      <Input
        placeholder="What awesome gift are you looking for?"
        className="w-full  h-12 py-1 ps-12 rounded-lg text-zinc-400 text-sm border-zinc-300 focus:outline-none focus:ring-2 focus:ring-soft-pink-300"
      />
    </div>
  );
}
