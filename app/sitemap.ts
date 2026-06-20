import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://visiondream.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/method", "/pricing", "/for-coaches", "/for-teams", "/blog", "/faq", "/about"];
  // 영어·일본어는 블로그 제외(글 본문 다국어는 추후)
  const intlRoutes = ["", "/features", "/method", "/pricing", "/for-coaches", "/for-teams", "/faq", "/about"];
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

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
