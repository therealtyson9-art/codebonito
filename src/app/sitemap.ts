import { MOCK_TEMPLATES } from "@/lib/mock-data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const templates = MOCK_TEMPLATES.map((t) => ({
    url: `https://codebonito.com/template/${t.id}`,
    lastModified: new Date(t.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://codebonito.com", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://codebonito.com/browse", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: "https://codebonito.com/pricing", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://codebonito.com/creators", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...templates,
  ];
}
