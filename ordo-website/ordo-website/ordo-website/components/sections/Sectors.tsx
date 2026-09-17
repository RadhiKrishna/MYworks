import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { sectorDetails } from "@/lib/site-data";

// Distinct gradient per tile so the grid doesn't feel like repeated placeholders.
const gradients = [
  "from-[#2a2013] to-[#151009]",
  "from-[#131c2a] to-[#0a0f16]",
  "from-[#241a2a] to-[#120d15]",
  "from-[#2a1a13] to-[#150d09]",
  "from-[#132a24] to-[#0a1512]",
  "from-[#2a1313] to-[#150909]",
  "from-[#1a2a1e] to-[#0d150f]",
];

export default function Sectors() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Building Across Every Sector"
            description="We support a diverse range of industries with reliable, high-quality technical services."
            linkHref="/sectors"
            linkLabel="View All Sectors"
            light
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {sectorDetails.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div
                className="group relative aspect-[3/4] rounded-lg border border-line2 overflow-hidden flex items-end p-4 hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent ${gradients[i % gradients.length]} opacity-80 group-hover:opacity-65 transition-opacity duration-300`}
                />
                <span className="relative z-10 text-paper text-sm font-medium leading-snug drop-shadow-sm">
                  {s.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
