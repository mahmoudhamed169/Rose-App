import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavBar from "@/components/shared/nav-bar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col justify-between ">
      <div>
        <Header />
        <NavBar />
      </div>
      {children}
      <Footer />
    </main>
  );
}
