import { seoDefaults } from "@/data/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoDefaults.siteUrl}/sitemap.xml`,
    host: seoDefaults.siteUrl,
  };
}
