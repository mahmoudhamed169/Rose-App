import SubTitle from "@/components/shared/sub-title";
import TitleDescription from "@/components/shared/title-desc";

import GalleryImages from "./gallery-images";

export default function Gallery() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center h-[1147px]">
      {/* subtitle */}
      <SubTitle text="gallery" />
      {/* title decription */}
      <TitleDescription text="Check Out our Wonderful Gallery" />
      {/* grid Gallary */}
      <GalleryImages />
    </section>
  );
}
