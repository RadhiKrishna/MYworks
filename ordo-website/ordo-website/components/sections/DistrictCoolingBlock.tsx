import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import {
  districtCoolingWhatIsCovered,
  districtCoolingWhatYouGet,
  responseTimeCommitment,
} from "@/lib/site-data";

export type DCGroup = {
  heading?: string;
  items: string[];
  note?: string;
};

export type DCService = {
  code: string;
  title: string;
  intro?: string[];
  groups?: DCGroup[];
  coverageTable?: boolean;
  extraList?: boolean;
  responseTable?: boolean;
};

export default function DistrictCoolingBlock({
  service,
  index,
}: {
  service: DCService;
  index: number;
}) {
  return (
    <Reveal className={index > 0 ? "mt-20 pt-20 border-t border-line2" : ""}>
      {/* Image placeholder banner -- swap for real photography of this
          sub-service later (plant, pipework, ETS room, control panel etc). */}
      <div className="aspect-[21/9] rounded-lg border border-line2 bg-gradient-to-br from-[#152234] to-[#0a1018] flex flex-col items-center justify-center gap-2 mb-8">
        <Icon name="layers" className="w-7 h-7 text-slate2/30" />
        <span className="text-slate2/30 text-xs font-mono uppercase tracking-wide">
          Image placeholder — {service.title}
        </span>
      </div>

      <span className="font-mono text-sm text-gold">{service.code}</span>
      <h2 className="font-display text-2xl md:text-3xl text-slate mt-2 leading-snug">
        {service.title}
      </h2>

      {service.intro && (
        <div className="mt-4 space-y-1.5 max-w-2xl">
          {service.intro.map((line, i) => (
            <p key={i} className="text-slate2 text-base leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      )}

      {service.groups && (
        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {service.groups.map((g, i) => (
            <div key={g.heading ?? i}>
              {g.heading && (
                <p className="font-mono text-xs text-gold uppercase tracking-wide mb-4">
                  {g.heading}
                </p>
              )}
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate">
                    <span className="text-gold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              {g.note && (
                <p className="text-xs text-slate2 mt-4 leading-relaxed">
                  {g.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {service.coverageTable && (
        <div className="mt-12">
          <p className="font-mono text-xs text-gold uppercase tracking-wide mb-4">
            What Is Covered
          </p>
          <div className="border border-line2 rounded-lg overflow-hidden">
            {districtCoolingWhatIsCovered.map((row, i) => (
              <div
                key={row.label}
                className={`grid sm:grid-cols-2 gap-2 px-5 py-4 ${
                  i > 0 ? "border-t border-line2" : ""
                }`}
              >
                <span className="text-slate text-sm">{row.label}</span>
                <span className="text-gold text-sm">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {service.extraList && (
        <div className="mt-12">
          <p className="font-mono text-xs text-gold uppercase tracking-wide mb-4">
            What You Get
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {districtCoolingWhatYouGet.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate">
                <span className="text-gold shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.responseTable && (
        <div className="mt-12">
          <p className="font-mono text-xs text-gold uppercase tracking-wide mb-4">
            Our Response Time Commitment
          </p>
          <div className="border border-line2 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-sand text-xs font-mono uppercase tracking-wide text-slate2 px-5 py-3">
              <span>Priority</span>
              <span>Response Time</span>
              <span className="hidden sm:block">Situation</span>
            </div>
            {responseTimeCommitment.map((r) => (
              <div
                key={r.priority}
                className="grid grid-cols-3 items-center px-5 py-3.5 border-t border-line2"
              >
                <span className="text-slate text-sm">{r.priority}</span>
                <span className="text-gold text-sm">{r.time}</span>
                <span className="hidden sm:block text-slate2 text-sm">
                  {r.situation}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Reveal>
  );
}
