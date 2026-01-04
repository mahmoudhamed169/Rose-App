import React from "react";

export default function TitleDescription({ text }: { text: string }) {
  return (
    <div className="relative ">
      <h3
        className="  before:absolute 
        before:content-[''] 
        before:w-[425px]
        before:h-[17px]
        before:-bottom-1
      before:bg-soft-pink-100 
        before:rounded-tr-[20px]
        before:rounded-br-[20px]
        font-bold 
        text-4xl
        before:-z-10
        after:content-[''] 
        after:absolute
        after:w-[157px]
        after:h-0.5
        after:-bottom-1
        after:left-0
      after:bg-soft-pink-600 
      text-maroon-700 mt-2 "
      >
        {text}
      </h3>
    </div>
  );
}
