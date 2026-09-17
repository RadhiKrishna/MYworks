import Image from "next/image";
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
            light
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <Link
                href={s.href ?? "/services/electromechanical-engineering"}
                className="h-full rounded-lg border border-line2 overflow-hidden hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 group bg-cloud2 shadow-sm flex flex-col justify-between block"
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-ink">
                    {s.image ? (
                      <Image
                        src={s.image}
                        alt={s.imageAlt ?? `${s.title} - Ordo Technical Services`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`h-full w-full bg-gradient-to-br ${gradients[i % gradients.length]}`}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-display text-4xl text-gold/90 drop-shadow-sm">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-slate leading-snug group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate2 text-sm leading-relaxed mt-2.5">
                      {s.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {s.items.map((it) => (
                        <span key={it} className="text-xs text-slate2">
                          · {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <span className="inline-block text-sm text-gold group-hover:text-gold2 transition-colors">
                    Explore Details →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
