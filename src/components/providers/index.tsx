import React from "react";
import ReactQueryProvider from "./components/react-query";
import NextAuthProvider from "./components/next-auth-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </ReactQueryProvider>
  );
}
