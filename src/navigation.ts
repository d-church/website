import { ALL_LOCALES } from "@lib/tolgee/shared";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

// read more about next-intl library
// https://next-intl-docs.vercel.app
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: ALL_LOCALES });
