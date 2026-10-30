import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/release/v1.0.0/Marketplace-v1.0.0.apk",
        destination: "https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0.apk",
        permanent: false,
      },
      {
        source: "/release/Marketplace-v1.0.0-release.zip",
        destination: "https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0-release.zip",
        permanent: false,
      },
      {
        source: "/download/apk",
        destination: "https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0.apk",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
