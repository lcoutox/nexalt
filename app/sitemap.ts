import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://nexalt.com.br", changeFrequency: "monthly", priority: 1 },
    {
      url: "https://nexalt.com.br/privacidade",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
