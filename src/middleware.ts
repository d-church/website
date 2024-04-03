// middleware.ts

import { ALL_LOCALES, DEFAULT_LOCALE } from "@lib/tolgee/shared";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ALL_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "as-needed",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
