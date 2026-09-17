import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark" | "gold";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";
  
  let styles = "bg-ink text-cloud hover:bg-panel border border-transparent";
  if (variant === "secondary") {
    styles = "border border-line2 text-slate hover:border-gold/70 hover:text-ink bg-transparent";
  } else if (variant === "secondary-dark") {
    styles = "border border-paper/30 text-paper hover:border-gold hover:text-gold bg-transparent";
  } else if (variant === "gold") {
    styles = "bg-gold text-ink font-medium hover:bg-gold2 border border-transparent shadow-sm";
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
