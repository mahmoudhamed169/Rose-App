import FeatureItem from "@/components/shared/feature-item";
import { Headset, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const featuresList = [
  {
    id: 1,
    icone: <Truck size={40} strokeWidth={1} />,
    title: "Free Delivery",
    subTitle: "For orders above 120 EGP",
  },
  {
    id: 2,
    icone: <RefreshCcw size={40} strokeWidth={1} />,
    title: "Get Refund",
    subTitle: "Refunds within 30 days",
  },
  {
    id: 3,
    icone: <ShieldCheck size={40} strokeWidth={1} />,
    title: "Safe Payment",
    subTitle: "100% Secure Payment",
  },
  {
    id: 4,
    icone: <Headset size={40} strokeWidth={1} />,
    title: "24/7 Support",
    subTitle: "Contact us at any time",
  },
];

export default function Features() {
  return (
    <section className=" h-36 bg-maroon-50 rounded-lg px-10 flex items-center ">
      {featuresList.map((feature) => (
        <FeatureItem
          key={feature.id}
          icone={feature.icone}
          subTtile={feature.subTitle}
          title={feature.title}
        />
      ))}
    </section>
  );
}
