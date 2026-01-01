import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/logo.webp";
import SearchInputHeader from "./search-input";
import HeaderIcons from "./header-icons";
import ProfileHeader from "./profile-header";

export default function Header() {
  return (
    // header container
    <header className="h-[88px] py-9 px-4 flex items-center gap-4 me-2">
      {/* header image logo */}
      <Image alt="logo" src={logo} width={85} height={80} />
      {/* search input component */}
      <SearchInputHeader />
      {/* profile header component */}
      <div className="ml-auto flex items-center gap-4 ">
        <ProfileHeader />
        {/* header icons component */}
        <HeaderIcons />
      </div>
    </header>
  );
}
