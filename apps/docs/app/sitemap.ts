import type { MetadataRoute } from "next";

const siteUrl = "https://consent-cuisine.vercel.app";
const pages = ["", "/about", "/playground", "/privacy", "/docs", "/docs/getting-started", "/docs/cuisines", "/docs/storage-and-policy", "/docs/custom-categories", "/docs/api"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/docs") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/docs" ? .9 : .7
  }));
}
