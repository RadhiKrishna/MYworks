import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { values } from "@/lib/site-data";

export default function WhatDrivesUs() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Our Values" title="What Drives Us" />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-px bg-line2 rounded-lg overflow-hidden">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 100} className="bg-cloud2 p-8">
              <span className="font-mono text-sm text-gold">{v.n}</span>
              <h3 className="font-display text-xl text-slate mt-3">{v.title}</h3>
              <p className="text-slate2 text-sm leading-relaxed mt-3">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
