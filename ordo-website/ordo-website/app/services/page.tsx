import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services | Ordo Technical Services LLC",
  description:
    "Three integrated service areas -- electromechanical & engineering, building finishes & interior works, and maintenance, repair & specialist services -- delivered across the UAE.",
};

// Maps each entry in the `services` overview array (lib/site-data.ts) to its
// full detail page route. Keep this in sync if a services[] entry is added
// or a detail page route changes.
const serviceLinks = [
  "/services/electromechanical-engineering",
  "/services/building-finishes-interior",
  "/services/maintenance-repair",
];

const gradients = [
  "from-[#1a2a3d] to-[#0d1520]",
  "from-[#2a2013] to-[#151009]",
  "from-[#0f2420] to-[#0a1512]",
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Three service areas. One trusted name."
        description="Complete, integrated technical solutions across the UAE's built environment -- explore each service area in detail below."
      />

      <section className="border-b border-line2 bg-cloud">
        <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <Link
                  href={serviceLinks[i]}
                  className="rounded-lg border border-line2 overflow-hidden hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group block bg-cloud2 shadow-sm"
                >
                <div
                  className={`h-44 bg-gradient-to-br ${gradients[i]} flex items-end p-5`}
                >
                  <span className="font-display text-4xl text-gold/80">
                    {s.n}
                  </span>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl text-slate leading-snug">
                    {s.title}
                  </h2>
                  <p className="text-slate2 text-sm leading-relaxed mt-3">
                    {s.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {s.items.map((it) => (
                      <span key={it} className="text-xs text-slate2">
                        · {it}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block mt-6 text-sm text-gold group-hover:text-gold2 transition-colors">
                    View full details →
                  </span>
                </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
