import Reveal from "@/components/ui/Reveal";
import { districtCoolingIntro } from "@/lib/site-data";

export default function DistrictCoolingIntro() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12">
        <Reveal className="space-y-4">
          {districtCoolingIntro.paragraphs.map((p, i) => (
            <p key={i} className="text-slate2 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={150} className="space-y-1 md:pt-1">
          {districtCoolingIntro.emphasis.map((line, i) => (
            <p
              key={i}
              className={`font-display leading-snug ${
                i === districtCoolingIntro.emphasis.length - 1
                  ? "text-2xl text-gold"
                  : "text-xl text-slate"
              }`}
            >
              {line}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
