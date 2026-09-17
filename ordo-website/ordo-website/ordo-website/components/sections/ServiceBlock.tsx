import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export type ServiceDetail = {
  n: string;
  title: string;
  intro: string;
  items: string[];
  extraList?: { heading: string; items: string[] };
  closing: string;
  image?: string;
  imageAlt?: string;
};

const gradients = [
  "from-[#1a2a3d] to-[#0d1520]",
  "from-[#2a2013] to-[#151009]",
  "from-[#0f2420] to-[#0a1512]",
];

export default function ServiceBlock({
  service,
  index,
}: {
  service: ServiceDetail;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal
      className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
        index > 0 ? "mt-20 pt-20 border-t border-line2" : ""
      }`}
    >
      <div className={`${reversed ? "md:order-2" : "md:order-1"}`}>
        <div className="relative aspect-[4/3] rounded-xl border border-line2 overflow-hidden shadow-md bg-sand">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.imageAlt ?? `${service.title} - Ordo Technical Services UAE`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className={`h-full w-full bg-gradient-to-br ${gradients[index % gradients.length]} flex flex-col justify-end p-6`}
            >
              <span className="font-mono text-xs text-gold uppercase tracking-wider">
                Ordo Technical Services
              </span>
              <p className="font-display text-2xl text-paper mt-1">
                {service.title}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <span className="font-mono text-sm text-gold">{service.n}</span>
        <h2 className="font-display text-2xl md:text-3xl text-slate mt-3 leading-snug">
          {service.title}
        </h2>
        <p className="text-slate2 text-base leading-relaxed mt-4">
          {service.intro}
        </p>

        <p className="font-mono text-xs text-gold uppercase tracking-wide mt-8 mb-4">
          What We Do
        </p>
        <ul className="space-y-2.5">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate">
              <span className="text-gold shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>

        {service.extraList && (
          <div className="mt-8">
            <p className="font-mono text-xs text-gold uppercase tracking-wide mb-3">
              {service.extraList.heading}
            </p>
            <p className="text-sm text-slate2 leading-relaxed">
              {service.extraList.items.join(" · ")}
            </p>
          </div>
        )}

        <p className="font-display text-lg text-slate mt-8 leading-snug">
          {service.closing}
        </p>
      </div>
    </Reveal>
  );
}
