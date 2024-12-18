import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "../ui/button";
import { headersLinks } from "./links";

import { usePathname } from "@/app/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const t = useTranslations();
  const pathname = usePathname();

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
      <Button variant="standard" className="hidden uppercase xl:flex" asChild>
        <Link href="/donate">{t("header.button-donate")}</Link>
      </Button>
    </>
  );
}
