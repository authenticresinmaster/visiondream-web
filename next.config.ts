import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      // www → apex 301 정규화 (검색엔진 정규 URL 통합)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.visiondream.kr" }],
        destination: "https://visiondream.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
