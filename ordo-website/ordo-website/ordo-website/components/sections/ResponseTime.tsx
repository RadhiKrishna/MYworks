import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { responseTimeCommitment } from "@/lib/site-data";

export default function ResponseTime() {
  return (
    <section className="border-b border-line2 bg-cloud">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What to Expect"
            title="Our Response Time Commitment"
            light
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 border border-line2 rounded-lg overflow-hidden bg-cloud2">
            <div className="grid grid-cols-3 bg-cloud text-xs font-mono uppercase tracking-wide text-slate2 px-6 py-3">
              <span>Priority</span>
              <span>Response Time</span>
              <span className="hidden sm:block">Situation</span>
            </div>
            {responseTimeCommitment.map((r) => (
              <div
                key={r.priority}
                className="grid grid-cols-3 items-center px-6 py-4 border-t border-line2"
              >
                <span className="font-display text-slate text-sm">
                  {r.priority}
                </span>
                <span className="text-gold text-sm font-medium">{r.time}</span>
                <span className="hidden sm:block text-slate2 text-sm">
                  {r.situation}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
