import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me-website-chi.vercel.app";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#store-catalog`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#releases-section`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#phone-simulator`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

