import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/ai-work-persona-quiz",
  assetPrefix: "/ai-work-persona-quiz",
};

export default nextConfig;
