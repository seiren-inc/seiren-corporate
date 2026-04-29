import { MetadataRoute } from "next";
import { SEO_BASE_URL, isProductionEnvironment } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const isProduction = isProductionEnvironment();

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${SEO_BASE_URL}/sitemap.xml`,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/aftercare/", "/api/aftercare/"],
      },
      // AI検索エンジン — GEO/AEO対応
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${SEO_BASE_URL}/sitemap.xml`,
  };
}
