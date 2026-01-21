import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sourceoflife.oneentry.cloud",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      type: "asset/resource",
    });
    return config;
  },
});

export default nextConfig;
