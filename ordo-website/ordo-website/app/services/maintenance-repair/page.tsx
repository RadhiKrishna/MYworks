import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceBlock from "@/components/sections/ServiceBlock";
import CTA from "@/components/sections/CTA";
import { maintenanceDetail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Maintenance, Repair & Specialist Services | Ordo Technical Services LLC",
  description:
    "Building maintenance, electrical fittings & fixtures repair, and sanitary installation & pipe repairs -- proactive, reliable maintenance across the UAE.",
};

export default function MaintenanceRepairPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services / Maintenance, Repair & Specialist Services"
        title="Maintenance, Repair & Specialist Services"
        description="Proactive, professional maintenance that protects property value and eliminates costly failures before they happen."
      />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          {maintenanceDetail.map((service, i) => (
            <ServiceBlock key={service.n} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
