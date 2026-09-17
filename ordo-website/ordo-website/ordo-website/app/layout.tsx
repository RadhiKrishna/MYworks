import type { Metadata, Viewport } from "next";
import { Jost, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site-data";

const display = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// NOTE: site.website is currently a placeholder domain
// (www.ordotechnical.com) pending the client's real production domain.
// Update lib/site-data.ts once the real domain is confirmed -- this powers
// metadataBase, canonical URLs, Open Graph, sitemap.ts and robots.ts.
const siteUrl = `https://${site.website}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.fullName} | UAE Technical Services`,
    template: `%s | ${site.fullName}`,
  },
  description:
    "Ordo Technical Services LLC provides integrated electromechanical, building finishing, maintenance, repair, and specialist district cooling services across the UAE.",
  applicationName: site.fullName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: site.fullName,
    title: `${site.fullName} | UAE Technical Services`,
    description:
      "Integrated technical services, maintenance, engineering, interior works, and district cooling support across the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | UAE Technical Services`,
    description:
      "Integrated technical services, maintenance, engineering, interior works, and district cooling support across the UAE.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F1",
  colorScheme: "light",
};

// Organization structured data -- only fields we actually know are included.
// Do not add sameAs (social profiles), aggregateRating, or founders unless
// the client confirms them.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.fullName,
  url: siteUrl,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-cloud text-slate antialiased min-h-screen flex flex-col selection:bg-gold selection:text-ink`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-ink focus:text-gold focus:font-medium focus:rounded-md focus:shadow-2xl focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Navbar + Footer render once here, so every page under app/
            automatically gets the same nav and footer */}
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
