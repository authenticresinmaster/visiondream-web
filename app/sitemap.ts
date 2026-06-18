import type { MetadataRoute } from "next";

const SITE = "https://visiondream.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/method", "/ebook", "/pricing", "/download", "/for-coaches", "/for-teams", "/privacy", "/terms"];
  return routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
