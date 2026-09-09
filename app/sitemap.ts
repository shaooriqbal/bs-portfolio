import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/industries",
    "/about-us",
    "/contact-us",
    "/privacy",
    "/terms",
    ...services.map((s) => s.href),
    ...industries.map((ind) => ind.href),
  ];

  return paths.map((path) => ({
    url: `https://burjsoft.com${path}`,
    lastModified: new Date(),
  }));
}
