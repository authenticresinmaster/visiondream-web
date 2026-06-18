import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://visiondream.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/method", "/pricing", "/for-coaches", "/for-teams", "/blog", "/faq", "/about"];
  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
