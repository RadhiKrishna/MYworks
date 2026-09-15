import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/site-data";

const gradients = [
  "from-[#1a2a3d] to-[#0d1520]",
  "from-[#2a2013] to-[#151009]",
  "from-[#0f2420] to-[#0a1512]",
];

export default function WhatWeDo() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="What We Do"
            description="We deliver end-to-end technical solutions that keep buildings, communities and critical infrastructure running at their best."
            linkHref="/services"
            linkLabel="View All Services"
            light
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-lg border border-line2 overflow-hidden hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 group bg-cloud2 shadow-sm">
                <div
                  className={`h-40 bg-gradient-to-br ${gradients[i]} flex items-end p-5`}
                >
                  <span className="font-display text-4xl text-gold/80">
                    {s.n}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-slate leading-snug">
                    {s.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {s.items.map((it) => (
                      <span key={it} className="text-xs text-slate2">
                        · {it}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="inline-block mt-5 text-sm text-gold group-hover:text-gold2 transition-colors"
                  >
                    Explore Services →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
