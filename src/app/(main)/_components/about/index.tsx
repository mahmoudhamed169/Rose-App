
import AboutImages from "./components/about-images";
import AboutContent from "./components/about-content";

export default function AboutSection() {
  return (
    <section className="min-h-[376px] flex justify-center items-center gap-20 ">
      {/* left side */}
      <AboutImages />
      {/* right side */}
      <AboutContent />
    </section>

  );
}
