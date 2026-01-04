import OccasionItem from "@/components/shared/occasion-item";
import React from "react";

const OccaionsList = [
  {
    id: 1,
    img: "/assets/images/occasion1.webp",
    badge: "Wedding",
    
    desc: "Celebrate Her Forever with a Gift She’ll Always Remember",
  },
  {
    id: 2,
    img: "/assets/images/occasion2.webp",
    badge: "Engagement",
    desc: "Honor the Beginning of a Beautiful Journey Together",
  },
  {
    id: 3,
    img: "/assets/images/occasion3.webp",
    badge: "Anniversary",
    desc: "Mark Every Year of Love with a Meaningful Surprise",
  },
];

export default function Occasions() {
  return (
    <section className="flex items-center justify-between gap-6">
      {OccaionsList.map((occasion) => (
        <OccasionItem
          key={occasion.id}
          img={occasion.img}
          badge={occasion.badge}
          decs={occasion.desc}
        />
      ))}
    </section>
  );
}
