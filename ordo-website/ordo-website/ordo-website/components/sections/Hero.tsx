import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { heroStats, images } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line2">
      <div className="relative min-h-[660px] sm:min-h-[700px] md:h-[740px] lg:h-[780px] flex flex-col justify-between">
        <Image
          src={images.heroSkyline}
          alt="Dubai skyline at dusk with modern architectural landmarks"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* top-right corner tagline, overlaid on the photo */}
        <p className="hidden md:block absolute top-24 right-6 md:right-10 text-right font-mono text-xs text-white/90 tracking-wide leading-relaxed uppercase [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
          Building
          <br />
          Sustainable
          <br />
          Spaces
          <br />
          Across the UAE
        </p>

        <div className="relative max-w-content mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-center pt-24 pb-32 sm:pb-28 md:pt-28 md:pb-24 w-full my-auto">
          <div className="bg-cloud/80 backdrop-blur-md rounded-2xl p-5 sm:p-7 md:p-8 max-w-xl shadow-lg border border-line2/50">
            <p className="font-mono text-[11px] sm:text-xs text-gold tracking-wide mb-3 sm:mb-4 uppercase leading-relaxed animate-rise">
              Engineering Today
              <br />
              for a Better Tomorrow
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] font-semibold text-slate max-w-xl animate-rise [animation-delay:100ms]">
              Where Precision
              <br />
              <span className="text-gold">Meets Excellence</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-slate2 text-sm sm:text-base md:text-lg leading-relaxed max-w-md animate-rise [animation-delay:200ms]">
              Integrated technical services across the UAE — from electromechanical
              systems and building finishes to maintenance and specialist district
              cooling solutions.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-rise [animation-delay:300ms]">
              <Button href="/services/electromechanical-engineering">Explore Our Services</Button>
              <Button href="/contact" variant="secondary">
                Talk to Ordo
              </Button>
            </div>
          </div>
        </div>

        {/* stats overlay, anchored to the bottom edge of the photo */}
        <div className="absolute bottom-0 inset-x-0 border-t border-line2 bg-cloud/85 backdrop-blur-md">
          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-5 flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2.5">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 sm:gap-2.5 text-slate2">
                <Icon name={s.icon} className="w-4 h-4 text-gold shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wide whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}