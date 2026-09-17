import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DistrictCoolingIntro from "@/components/sections/DistrictCoolingIntro";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import DistrictCoolingBlock from "@/components/sections/DistrictCoolingBlock";
import CTA from "@/components/sections/CTA";
import { districtCoolingServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "District Cooling Services",
  description:
    "Specialist technical services for the UAE's district cooling operators, plant managers, and cooling networks. Central plants, distribution networks, ETS, metering, and 24/7 emergency response.",
  alternates: {
    canonical: "/district-cooling",
  },
  openGraph: {
    title: "District Cooling Services | Ordo Technical Services LLC",
    description:
      "Specialist technical services for the UAE's district cooling operators, plant managers, and cooling networks. Central plants, distribution networks, ETS, metering, and 24/7 emergency response.",
    url: "/district-cooling",
  },
  twitter: {
    card: "summary_large_image",
    title: "District Cooling Services | Ordo Technical Services LLC",
    description:
      "Specialist technical services for the UAE's district cooling operators, plant managers, and cooling networks. Central plants, distribution networks, ETS, metering, and 24/7 emergency response.",
  },
};

// District Cooling page: PageHeader (shared) -> Intro -> Who We Work With
// (light) -> eight DC-01 through DC-08 service blocks, each rendered by the
// same DistrictCoolingBlock component (data-driven from
// districtCoolingServices in lib/site-data.ts) -> shared CTA.
export default function DistrictCoolingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="District Cooling"
        title="Ordo District Cooling Services"
        description="Powering the UAE's most critical cooling infrastructure."
      />
      <DistrictCoolingIntro />
      <WhoWeWorkWith />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          {districtCoolingServices.map((service, i) => (
            <DistrictCoolingBlock key={service.code} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
