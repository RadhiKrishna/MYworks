"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-data";
import Icon from "@/components/ui/Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services/electromechanical-engineering",
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
  const pathname = usePathname();

  // Close menus on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route navigation
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

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
                key={l.label}
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
                  className={`flex items-center gap-1 text-sm transition-colors focus-ring rounded py-1 ${
                    isServicesActive ? "text-gold font-medium" : "text-slate2 hover:text-slate"
                  }`}
                >
                  {l.label}
                  <Icon name="arrow" className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "-rotate-90" : "rotate-90"}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-cloud2 border border-line2 rounded-lg overflow-hidden shadow-xl py-1">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                          className={`block px-4 py-2.5 text-sm transition-colors border-b border-line2 last:border-0 ${
                            pathname === c.href
                              ? "bg-sand text-gold font-medium"
                              : "text-slate hover:bg-cloud hover:text-gold"
                          }`}
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
                aria-current={pathname === l.href ? "page" : undefined}
                className={`text-sm transition-colors focus-ring rounded py-1 ${
                  pathname === l.href ? "text-gold font-medium" : "text-slate2 hover:text-slate"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <a
          href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
          className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-slate border border-gold/40 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors focus-ring"
        >
          <Icon name="phone" className="w-3.5 h-3.5 text-gold" />
          24/7 Emergency
        </a>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="lg:hidden text-slate focus-ring rounded p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
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
        <nav aria-label="Mobile navigation" className="lg:hidden border-t border-line2 bg-cloud px-6 py-5 flex flex-col gap-1 max-h-[85vh] overflow-y-auto shadow-2xl">
          {links.map((l) => (
            <div key={l.label}>
              {l.children ? (
                <div className="py-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-gold mb-1">
                    {l.label}
                  </span>
                  <div className="pl-3 flex flex-col border-l border-line2 ml-1">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        aria-current={pathname === c.href ? "page" : undefined}
                        className={`py-2 text-sm transition-colors ${
                          pathname === c.href ? "text-gold font-medium" : "text-slate"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`block py-2.5 text-base ${
                    pathname === l.href ? "text-gold font-semibold" : "text-slate"
                  }`}
                >
                  {l.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
            className="mt-4 pt-4 border-t border-line2 text-sm font-mono text-gold flex items-center gap-2"
          >
            <Icon name="phone" className="w-4 h-4 text-gold" />
            <span>24/7 Emergency — {site.emergencyPhone}</span>
          </a>
        </nav>
      )}
    </header>
  );
}
