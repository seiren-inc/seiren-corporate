import { MetadataRoute } from "next";
import { SEO_BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/business",
    "/company",
    "/contact",
    "/partner",
    "/privacy",
    "/strength",
    "/terms",
  ].map((route) => ({
    url: route === "/" ? SEO_BASE_URL : `${SEO_BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  return routes;
}
