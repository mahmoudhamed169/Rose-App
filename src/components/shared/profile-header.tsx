import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ProfileOption } from "./profile-option";

export default function ProfileHeader() {
  const isLoggedIn = true; // Replace with actual authentication logic

  return (
    <div className="">{isLoggedIn ? <ProfileOption /> : <LoginLink />}</div>
  );
}

export function LoginLink() {
  return (
    <Link
      href="/login"
      className="font-medium text-zinc-700 flex items-center justify-center h-12 w-24 gap-1.5 border-e border-zinc-200  px-4 hover:text-maroon-600 transition-colors duration-200"
    >
      <User size={20} />
      Login
    </Link>
  );
}
