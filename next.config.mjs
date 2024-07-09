import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  output: "standalone",
  async rewrites() {
    return [
      {
        has: [{ type: "host", value: "donate.localhost" }],
        source: "/:locale/:path*",
        destination: "/:locale/donate/:path*",
      },
      {
        has: [{ type: "host", value: "donate.dchurch.lviv.ua" }],
        source: "/:locale/:path*",
        destination: "/:locale/donate/:path*",
      },
    ];
  },
});

export default nextConfig;
