import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { whoWeWorkWith } from "@/lib/site-data";

export default function WhoWeWorkWith() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs text-gold tracking-wide uppercase mb-8">
            Who We Work With
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {whoWeWorkWith.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate">
                <Icon name="arrow" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
