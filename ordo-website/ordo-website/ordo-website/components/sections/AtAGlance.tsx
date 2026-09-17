import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { atAGlance } from "@/lib/site-data";

export default function AtAGlance() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="At a Glance" title="Ordo, in brief" light />
        </Reveal>

        <Reveal delay={100}>
          <dl className="mt-12 divide-y divide-line2 border-t border-b border-line2">
            {atAGlance.map((row) => (
              <div
                key={row.label}
                className="py-5 grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8"
              >
                <dt className="font-mono text-xs text-slate2 uppercase tracking-wide">
                  {row.label}
                </dt>
                <dd className="text-slate text-sm leading-relaxed">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
