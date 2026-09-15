import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { heroStats, images } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line2">
      <div className="relative h-[640px] md:h-[720px]">
        <Image
          src={images.heroSkyline}
          alt="Dubai skyline at dusk, featuring the Burj Khalifa"
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

        <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-center pt-16">
          <div className="bg-cloud/60 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-xl">
            <p className="font-mono text-xs text-gold tracking-wide mb-5 uppercase leading-relaxed animate-rise">
              Engineering Today
              <br />
              for a Better Tomorrow
            </p>
            <h1 className="font-display text-[2.5rem] leading-[1.08] md:text-6xl md:leading-[1.06] font-semibold text-slate max-w-xl animate-rise [animation-delay:100ms]">
              Where Precision
              <br />
              <span className="text-gold">Meets Excellence</span>
            </h1>
            <p className="mt-6 text-slate2 text-lg leading-relaxed max-w-md animate-rise [animation-delay:200ms]">
              Integrated technical services across the UAE — from electromechanical
              systems and building finishes to maintenance and specialist district
              cooling solutions.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-rise [animation-delay:300ms]">
              <Button href="/services">Explore Our Services</Button>
              <Button href="/contact" variant="secondary">
                Talk to Ordo
              </Button>
            </div>
          </div>
        </div>

        {/* stats overlay, anchored to the bottom edge of the photo (not a separate section) */}
        <div className="absolute bottom-0 inset-x-0 border-t border-line2 bg-cloud/70 backdrop-blur-sm">
          <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-x-10 gap-y-3">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-slate2">
                <Icon name={s.icon} className="w-4 h-4 text-gold" />
                <span className="text-xs font-mono uppercase tracking-wide">
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