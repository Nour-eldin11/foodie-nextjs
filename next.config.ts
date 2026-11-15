import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/foodie-nextjs" : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: true },
};

export default nextConfig;