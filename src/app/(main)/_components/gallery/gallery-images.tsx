import Image from "next/image";

export default function GalleryImages() {
  return (
    <div className=" grid grid-cols-3  mt-[45px] gap-2 w-full">
      {/* Left side Images*/}
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/images/bannerGift.webp"
          alt="Image One"
          width={418}
          height={617}
          className=" w-[418px] h-[617px] object-cover"
        />
        <Image
          src="/assets/images/gallary-choclate.webp"
          alt="Image 2"
          width={418}
          height={411}
          className="w-[418px] h-[411px]  object-cover"
        />
      </div>
      {/* middle side Images*/}
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/images/gallary-gift.webp"
          alt="Image One"
          width={418}
          height={411}
          className=" w-[418px] h-[411px] object-cover"
        />
        <Image
          src="/assets/images/ring.webp"
          alt="Image 2"
          width={418}
          height={617}
          className="w-[418px] h-[617px] mt-0.5 object-cover"
        />
      </div>
      {/* Right side Images*/}
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/images/ring1.webp"
          alt="Image One"
          width={418}
          height={411}
          className=" w-[418px] h-[411px] object-cover"
        />
        <Image
          src="/assets/images/gallary-gift2.webp"
          alt="Image 2"
          width={418}
          height={617}
          className="w-[418px] h-[617px] mt-0.5 object-cover"
        />
      </div>
    </div>
  );
}
