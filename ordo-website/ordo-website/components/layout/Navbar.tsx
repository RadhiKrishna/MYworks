"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site-data";
import Icon from "@/components/ui/Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/electromechanical-engineering", label: "Electromechanical & Engineering" },
      { href: "/services/building-finishes-interior", label: "Building Finishes & Interior" },
      { href: "/services/maintenance-repair", label: "Maintenance & Repair" },
    ],
  },
  { href: "/district-cooling", label: "District Cooling" },
  { href: "/sectors", label: "Sectors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line2 bg-cloud/90 backdrop-blur-md">
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 focus-ring rounded">
          <span className="font-display font-semibold tracking-tight text-lg text-slate">
            {site.name}
          </span>
          <span className="hidden sm:inline font-mono text-[9px] tracking-[0.2em] text-slate2 uppercase">
            Technical Services
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setServicesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm text-slate2 hover:text-slate transition-colors focus-ring rounded"
                >
                  {l.label}
                  <Icon name="arrow" className="w-3.5 h-3.5 rotate-90" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-3 w-64">
                    <div className="bg-cloud2 border border-line2 rounded-lg overflow-hidden shadow-xl">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-3 text-sm text-slate hover:bg-cloud hover:text-gold transition-colors border-b border-line2 last:border-0"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate2 hover:text-slate transition-colors focus-ring rounded"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <a
          href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
          className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-slate border border-gold/40 rounded-full px-4 py-2 hover:border-gold transition-colors focus-ring"
        >
          <Icon name="phone" className="w-3.5 h-3.5 text-gold" />
          24/7 Emergency
        </a>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="lg:hidden text-slate focus-ring rounded p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 6H20M2 11H20M2 16H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="lg:hidden border-t border-line2 bg-cloud px-6 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {links.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base text-slate"
              >
                {l.label}
              </Link>
              {l.children && (
                <div className="pl-4 flex flex-col border-l border-line2 ml-1 mb-1">
                  {l.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm text-slate2"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
            className="mt-3 text-sm font-mono text-gold"
          >
            24/7 Emergency — {site.emergencyPhone}
          </a>
        </nav>
      )}
    </header>
  );
}
