import React from "react";
import ReactQueryProvider from "./components/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>
    
    
    {children}</ReactQueryProvider>;
}
