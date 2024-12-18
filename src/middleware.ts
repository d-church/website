import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "./app/navigation";

export default createMiddleware({
  locales,
  defaultLocale: "uk",
  localePrefix,
});

export const config = {
  matcher: ["/", "/(en|uk)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
