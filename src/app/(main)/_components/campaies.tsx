import Image from "next/image";

const logos = [
  { src: "/assets/images/campany1.webp", alt: "Company 1" },
  { src: "/assets/images/campany2.webp", alt: "Company 2" },
  { src: "/assets/images/campany3.webp", alt: "Company 3" },
  { src: "/assets/images/campany4.webp", alt: "Company 4" },
  { src: "/assets/images/campany5.webp", alt: "Company 5" },
  { src: "/assets/images/campany6.webp", alt: "Company 6" },
];
export default function Campaies() {
  return (
    <div className="h-52 bg-maroon-50 rounded-3xl md:mt-32 flex flex-col justify-center items-center gap-10">
      {/* text */}
      <h6 className="font-bold text-4xl  text-maroon-700">
        Trusted by over <span className="text-soft-pink-500">4.5k+</span>
         companies
      </h6>
      {/* logos */}
      <div className="flex gap-[71px]">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={146}
            height={51}
          />
        ))}
      </div>
    </div>
  );
}
