import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { sectorDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sectors We Serve | Ordo Technical Services LLC",
  description:
    "Ordo supports a diverse range of industries across the UAE -- residential, commercial, hospitality, industrial, healthcare, government, and district cooling.",
};

const gradients = [
  "from-[#2a2013] to-[#151009]",
  "from-[#131c2a] to-[#0a0f16]",
  "from-[#241a2a] to-[#120d15]",
  "from-[#2a1a13] to-[#150d09]",
  "from-[#132a24] to-[#0a1512]",
  "from-[#2a1313] to-[#150909]",
  "from-[#1a2a1e] to-[#0d150f]",
];

export default function SectorsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Sectors"
        title="Building across every sector."
        description="We support a diverse range of industries with reliable, high-quality technical services -- tailored to what each sector actually needs."
      />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorDetails.map((s, i) => {
              const card = (
                <div
                  className={`h-full rounded-lg border border-line2 overflow-hidden hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group bg-cloud2 shadow-sm ${
                    s.href ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                  />
                  <div className="p-6">
                    <h2 className="font-display text-lg text-slate">
                      {s.name}
                    </h2>
                    <p className="text-slate2 text-sm leading-relaxed mt-2">
                      {s.description}
                    </p>
                    {s.href && (
                      <span className="inline-block mt-4 text-sm text-gold group-hover:text-gold2 transition-colors">
                        Learn more →
                      </span>
                    )}
                  </div>
                </div>
              );
              return (
                <Reveal key={s.name} delay={i * 80}>
                  {s.href ? <Link href={s.href}>{card}</Link> : card}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
