import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

import { Button } from "../ui/button";
import { headersLinks } from "./links";

import { usePathname, Link as NavigationLink } from "@/app/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const newLocale = currentLocale === "uk" ? "en" : "uk";

  return (
    <>
      <div className="hidden w-[70%] items-center justify-center xl:flex">
        <nav>
          <ul className="flex space-x-10">
            {headersLinks.map(({ href, key }, i) => (
              <li key={href}>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 text-xl text-white hover:text-hover-blue hover:no-underline",
                    {
                      "text-hover-blue": pathname.includes(href),
                    }
                  )}
                  asChild
                >
                  <Link href={href}>{t(`header.links.${key}`)}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden items-center gap-4 xl:flex">
        <Button variant="standard" className="uppercase" asChild>
          <Link href="/donate">{t("header.button-donate")}</Link>
        </Button>
        <NavigationLink
          href={pathname}
          locale={newLocale}
          className={cn(
            "rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white",
            "backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
          )}
        >
          {currentLocale === "uk" ? "EN" : "UA"}
        </NavigationLink>
      </div>
    </>
  );
}
