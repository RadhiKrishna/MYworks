import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";
import { contactChannels } from "@/lib/site-data";

export default function ContactInfo() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        <Reveal>
          <p className="font-mono text-xs text-gold tracking-wide uppercase mb-6">
            Get in Touch
          </p>
          <div className="space-y-6">
            {contactChannels.map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center">
                  <Icon name={c.icon} className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate2 uppercase tracking-wide">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-slate text-sm mt-1 inline-block hover:text-gold transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-slate text-sm mt-1">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="border border-line2 rounded-lg p-7 md:p-9 bg-cloud2 shadow-sm">
          <h2 className="font-display text-xl text-slate mb-6">
            Send us a message
          </h2>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
