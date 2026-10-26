import { AboutTeaser } from "@/components/sections/about-teaser";
import { FlavorsCarousel } from "@/components/sections/flavors-carousel";
import { HeroHayumi } from "@/components/sections/hero-hayumi";
import { Visit } from "@/components/sections/visit";
import { JsonLd } from "@/components/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroHayumi />
      <FlavorsCarousel />
      <AboutTeaser />
      <Visit />
    </>
  );
}