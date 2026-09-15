import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceBlock from "@/components/sections/ServiceBlock";
import CTA from "@/components/sections/CTA";
import { electromechanicalDetail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Electromechanical & Engineering Services | Ordo Technical Services LLC",
  description:
    "Full electromechanical works contracting, HVAC & ventilation, and equipment installation & maintenance -- delivered end to end across the UAE.",
};

export default function ElectromechanicalEngineeringPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services / Electromechanical & Engineering"
        title="Electromechanical & Engineering Services"
        description="Full ownership of your electromechanical project -- from design coordination through to a fully tested, perfectly performing system."
      />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          {electromechanicalDetail.map((service, i) => (
            <ServiceBlock key={service.n} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
