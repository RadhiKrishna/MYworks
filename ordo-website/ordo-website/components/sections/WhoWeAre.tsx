import Reveal from "@/components/ui/Reveal";
import { whoWeAre } from "@/lib/site-data";

export default function WhoWeAre() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[1fr_0.8fr] gap-14">
        <Reveal>
          <p className="font-mono text-xs text-gold tracking-wide uppercase mb-4">
            Who We Are
          </p>
          <div className="space-y-5">
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="text-slate2 text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 space-y-1">
            {whoWeAre.closing.map((line, i) => (
              <p key={i} className="text-slate font-display text-lg leading-snug">
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="md:border-l md:border-line2 md:pl-10 flex items-center">
          <blockquote>
            <p className="font-display text-xl md:text-2xl leading-snug text-slate">
              &ldquo;{whoWeAre.quote}&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
