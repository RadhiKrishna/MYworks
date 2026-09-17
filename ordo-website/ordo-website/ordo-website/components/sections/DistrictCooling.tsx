import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { districtCoolingStats, images } from "@/lib/site-data";

export default function DistrictCooling() {
  return (
    <section className="relative border-b border-line overflow-hidden">
      <div className="relative min-h-[420px]">
        <Image
          src={images.districtCoolingPipes}
          alt="Industrial cooling plant piping"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/85" />

        <div className="relative max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal>
            <p className="font-mono text-xs text-gold tracking-wide mb-4 uppercase">
              Specialist Division
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-paper leading-snug max-w-lg">
              Powering the UAE&apos;s Most Critical Cooling Infrastructure
            </h2>
            <p className="text-paper/70 text-sm leading-relaxed mt-4 max-w-md">
              From central plants to distribution networks, ETS and smart
              metering, we provide complete district cooling solutions with
              24/7 support.
            </p>
            <Button href="/district-cooling" variant="gold" className="mt-7">
              Explore District Cooling
            </Button>
          </Reveal>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {districtCoolingStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="rounded-lg bg-ink/60 border border-paper/10 backdrop-blur-sm px-3 sm:px-4 py-4 sm:py-5 text-center hover:border-gold/40 transition-colors">
                  <p className="font-display text-2xl sm:text-3xl text-gold font-semibold">{s.value}</p>
                  <p className="text-paper/80 text-[11px] sm:text-xs mt-1.5 leading-snug">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
