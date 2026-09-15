import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyOrdo from "@/components/sections/WhyOrdo";
import DistrictCooling from "@/components/sections/DistrictCooling";
import Sectors from "@/components/sections/Sectors";
import SustainabilitySafety from "@/components/sections/SustainabilitySafety";
import CTA from "@/components/sections/CTA";

// Homepage: each section is its own component under components/sections/.
// Navbar and Footer are NOT here -- they live in app/layout.tsx and wrap
// every page automatically, so future pages (about, services, contact...)
// only need to export their own content, same as this file does.
export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhyOrdo />
      <DistrictCooling />
      <Sectors />
      <SustainabilitySafety />
      <CTA />
    </main>
  );
}
