import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://visiondream.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/method", "/pricing", "/for-coaches", "/for-teams", "/blog", "/faq", "/about"];
  const intlRoutes = ["", "/features", "/method", "/pricing", "/for-coaches", "/for-teams", "/blog", "/faq", "/about"];
  const entry = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE}${path}`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  });
  const staticEntries: MetadataRoute.Sitemap = [
    ...routes.map((p) => entry(p)),
    ...intlRoutes.map((p) => entry(`/en${p}`)),
    ...intlRoutes.map((p) => entry(`/ja${p}`)),
  ];

  const postEntry = (prefix: string) => (p: { slug: string; date: string }): MetadataRoute.Sitemap[number] => ({
    url: `${SITE}${prefix}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  });
  const postEntries: MetadataRoute.Sitemap = [
    ...getAllPosts("ko").map(postEntry("")),
    ...getAllPosts("en").map(postEntry("/en")),
    ...getAllPosts("ja").map(postEntry("/ja")),
  ];

  return [...staticEntries, ...postEntries];
}
