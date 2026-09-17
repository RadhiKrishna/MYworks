import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import WhoWeAre from "@/components/sections/WhoWeAre";
import AtAGlance from "@/components/sections/AtAGlance";
import WhatDrivesUs from "@/components/sections/WhatDrivesUs";
import WhyOrdo from "@/components/sections/WhyOrdo";
import SustainabilitySafety from "@/components/sections/SustainabilitySafety";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ordo Technical Services LLC — a UAE-based engineering and technical services company built on precision, reliability, and integrity.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Ordo Technical Services LLC",
    description:
      "Learn about Ordo Technical Services LLC — a UAE-based engineering and technical services company built on precision, reliability, and integrity.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ordo Technical Services LLC",
    description:
      "Learn about Ordo Technical Services LLC — a UAE-based engineering and technical services company built on precision, reliability, and integrity.",
  },
};

// About page: PageHeader + WhoWeAre + AtAGlance + WhatDrivesUs are page-specific
// sections. WhyOrdo, SustainabilitySafety and CTA are the SAME components used
// on the homepage (imported from components/sections/) -- reused as-is, not
// duplicated, so any future edit to those sections updates both pages.
export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Built around one idea — exceptional work for exceptional clients."
        description="Get to know the team, the values, and the standard behind every Ordo project across the UAE."
      />
      <WhoWeAre />
      <AtAGlance />
      <WhatDrivesUs />
      <WhyOrdo />
      <SustainabilitySafety />
      <CTA />
    </main>
  );
}
