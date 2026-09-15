import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceBlock from "@/components/sections/ServiceBlock";
import CTA from "@/components/sections/CTA";
import { buildingFinishesDetail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Building Finishes & Interior Works | Ordo Technical Services LLC",
  description:
    "Floor & wall tiling, painting & protective coatings, and false ceiling & light partitions -- premium interior finishing across the UAE.",
};

export default function BuildingFinishesInteriorPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services / Building Finishes & Interior"
        title="Building Finishes & Interior Works"
        description="Technical precision paired with a genuine eye for design -- tiling, coatings and ceiling systems finished to endure."
      />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          {buildingFinishesDetail.map((service, i) => (
            <ServiceBlock key={service.n} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
