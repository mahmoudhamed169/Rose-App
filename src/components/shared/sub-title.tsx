import React from "react";

export default function SubTitle({ text }: { text: string }) {
  return <h2 className="font-bold text-soft-pink-500 uppercase  tracking-[0.25em] font-sarabun">
    {text}
  </h2>;
  
}
