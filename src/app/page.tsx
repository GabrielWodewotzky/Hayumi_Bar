import { FlavorsCarousel } from "@/components/sections/flavors-carousel";
import { HeroHayumi } from "@/components/sections/hero-hayumi";

export default function HomePage() {
  return (
    <>
      <HeroHayumi />
      <FlavorsCarousel />
      <section className="px-4 py-32 sm:px-8">
        <p className="font-display text-5xl tracking-tighter">próxima seção</p>
      </section>
    </>
  );
}