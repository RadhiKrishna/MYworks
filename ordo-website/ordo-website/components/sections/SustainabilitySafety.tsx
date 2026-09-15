import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { sustainability, safety } from "@/lib/site-data";

export default function SustainabilitySafety() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-6">
        {/* Sustainability block: image + content */}
        <Reveal className="grid grid-cols-[0.7fr_1.3fr] gap-5 items-start">
          <div className="rounded-lg bg-gradient-to-br from-[#e8ede9] to-[#c9d6cd] border border-line2 min-h-[200px]" />
          <div>
            <p className="font-mono text-xs text-gold tracking-wide uppercase mb-2">
              Sustainability
            </p>
            <h3 className="font-display text-xl text-slate leading-snug">
              Our Sustainability Commitment
            </h3>
            <p className="text-slate2 text-sm leading-relaxed mt-2">
              {sustainability.intro}
            </p>
            <ul className="mt-5 space-y-2.5">
              {sustainability.items.map((s) => (
                <li key={s} className="flex gap-2.5 text-sm text-slate">
                  <Icon name="chart" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Safety block: image + content */}
        <Reveal className="grid grid-cols-[0.7fr_1.3fr] gap-5 items-start" delay={150}>
          <div className="rounded-lg bg-gradient-to-br from-[#efe9dd] to-[#d8cdb4] border border-line2 min-h-[200px]" />
          <div>
            <p className="font-mono text-xs text-gold tracking-wide uppercase mb-2">
              Safety First
            </p>
            <h3 className="font-display text-xl text-slate leading-snug">
              Safety — Our Non-Negotiable
            </h3>
            <p className="text-slate2 text-sm leading-relaxed mt-2">
              {safety.intro}
            </p>
            <ul className="mt-5 space-y-2.5">
              {safety.items.map((s) => (
                <li key={s} className="flex gap-2.5 text-sm text-slate">
                  <Icon name="shield" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
