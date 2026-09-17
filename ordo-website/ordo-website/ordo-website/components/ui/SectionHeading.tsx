import Link from "next/link";
import Icon from "./Icon";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  linkHref,
  linkLabel,
  light = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
  /** The site is light by default now — set light={false} only for the rare
   * dark sections (footer / final CTA band) so text switches to paper-on-dark
   * instead of slate-on-light. */
  light?: boolean;
}) {
  const heading = light ? "text-slate" : "text-paper";
  const body = light ? "text-slate2" : "text-mute";

  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs text-gold tracking-wide uppercase mb-3">
          {eyebrow}
        </p>
        <h2 className={`font-display text-2xl md:text-3xl leading-snug max-w-md ${heading}`}>
          {title}
        </h2>
      </div>
      {description && (
        <p className={`text-sm leading-relaxed max-w-sm ${body}`}>{description}</p>
      )}
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold2 transition-colors shrink-0"
        >
          {linkLabel}
          <Icon name="arrow" className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
