import type { NextConfig } from "next";

const securityHeaders = [
  // 1. Prevent Clickjacking: deny rendering inside any <iframe> on another domain
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // 2. Prevent MIME-sniffing: forces browser to follow the Content-Type header
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 3. Referrer Policy: sends full URL only to same-origin, domain-only to cross-origin HTTPS, none to HTTP
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 4. Permissions Policy: restricts device sensors and privacy-invasive features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  },
  // 5. Strict Transport Security: enforce HTTPS for 2 years including subdomains and preloading
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 6. X-DNS-Prefetch-Control: control DNS prefetching to reduce latency securely
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // 7. X-Permitted-Cross-Domain-Policies: blocks Adobe Flash / PDF cross-domain access
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
  // 8. Content Security Policy (CSP): Prevents XSS, code injection, and external embedding
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https:",
      "style-src 'self' 'unsafe-inline' https:",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Hide framework identity from scanners and bot probes (removes X-Powered-By)
  poweredByHeader: false,

  // Disallow source maps in production so dev source code & comments are never visible in DevTools
  productionBrowserSourceMaps: false,

  // Performance optimizations
  cacheComponents: true,
  partialPrefetching: true,

  // Security response headers on all routes
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  // Fail-proof release downloads and blocking scanner probes
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
      // Immediately block bot probing for dotfiles, environment files, and credentials
      {
        source: "/.env",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.env.local",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.env.production",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.git",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.git/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/api/secret",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
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
