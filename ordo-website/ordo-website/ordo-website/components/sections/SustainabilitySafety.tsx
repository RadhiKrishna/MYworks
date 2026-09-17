import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { sustainability, safety, images } from "@/lib/site-data";

export default function SustainabilitySafety() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {/* Sustainability Block — Image Left, Content Right */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl border border-line2 overflow-hidden shadow-md bg-sand group">
                  <Image
                    src={images.sustainability}
                    alt="Sustainable building engineering solutions and energy efficiency management"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="font-mono text-xs text-gold tracking-widest uppercase mb-3 font-medium">
                  Sustainability
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate leading-tight font-semibold">
                  Our Sustainability Commitment
                </h2>
                <p className="text-slate2 text-sm sm:text-base leading-relaxed mt-4">
                  {sustainability.intro}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {sustainability.items.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-sand flex items-center justify-center shrink-0 mt-0.5 border border-line2 text-gold">
                        <Icon name="chart" className="w-3 h-3" />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Subtle section divider */}
          <div className="border-t border-line2/60" />

          {/* Safety Block — Content Left, Image Right */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
                <p className="font-mono text-xs text-gold tracking-widest uppercase mb-3 font-medium">
                  Safety First
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-slate leading-tight font-semibold">
                  Safety — Our Non-Negotiable
                </h2>
                <p className="text-slate2 text-sm sm:text-base leading-relaxed mt-4">
                  {safety.intro}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {safety.items.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-sand flex items-center justify-center shrink-0 mt-0.5 border border-line2 text-gold">
                        <Icon name="shield" className="w-3 h-3" />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-2xl border border-line2 overflow-hidden shadow-md bg-sand group">
                  <Image
                    src={images.safety}
                    alt="Workplace safety and zero harm engineering technical operations in the UAE"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
