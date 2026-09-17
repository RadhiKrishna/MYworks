import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { whyOrdo } from "@/lib/site-data";

export default function WhyOrdo() {
  return (
    <section className="border-b border-line2 bg-sand">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Our Advantage"
            title="Why Ordo"
            description="More than a service provider — a long-term partner."
            linkHref="/about"
            linkLabel="Learn More"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
          {whyOrdo.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="group">
                <div className="h-11 w-11 rounded-full border border-gold/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-gold">
                  <Icon name={t.icon} className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-sm text-slate mt-4 uppercase tracking-wide">
                  {t.title}
                </h3>
                <p className="text-slate2 text-sm mt-1.5 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
