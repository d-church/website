"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/app/navigation";

export function LanguageToggle() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const newLocale = currentLocale === "uk" ? "en" : "uk";

  return (
    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-10 lg:right-10 z-20">
      <Link
        href={pathname}
        locale={newLocale}
        className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
      >
        <span
          className="text-white font-bold text-md sm:text-sm lg:text-base"
          style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
        >
          {currentLocale === "uk" ? "EN" : "UA"}
        </span>
      </Link>
    </div>
  );
}

