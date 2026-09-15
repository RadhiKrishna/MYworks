import Link from "next/link";
import Icon from "./Icon";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line2 bg-cloud">
      <div className="absolute inset-0 bg-grid-dark bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div className="max-w-content mx-auto px-6 md:px-10 pt-36 pb-14 md:pt-40 md:pb-16 relative">
        <div className="flex items-center gap-2 text-xs text-slate2 mb-6 animate-rise">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <Icon name="arrow" className="w-3 h-3 rotate-0" />
          <span className="text-slate">{eyebrow}</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl text-slate leading-tight max-w-xl animate-rise [animation-delay:80ms]">
          {title}
        </h1>
        {description && (
          <p className="text-slate2 text-base leading-relaxed mt-4 max-w-lg animate-rise [animation-delay:160ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
