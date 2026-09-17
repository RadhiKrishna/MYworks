import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

const routes = [
  "/",
  "/about",
  "/services/electromechanical-engineering",
  "/services/building-finishes-interior",
  "/services/maintenance-repair",
  "/district-cooling",
  "/sectors",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${site.website}`;
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
