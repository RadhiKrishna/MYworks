import Link from "next/link";
import { site, footerLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg text-paper">
              {site.name}
              <span className="text-gold">.</span>
            </p>
            <p className="text-mute text-xs mt-1">{site.tagline}</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-paper/70 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <p className="text-mute text-xs">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p className="text-mute text-xs">
            {site.location}
            <span className="mx-2 text-line">|</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
              {site.email}
            </a>
            <span className="mx-2 text-line">|</span>
            <a
              href={`https://${site.website}`}
              className="hover:text-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
