"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "../ui/button";
import { headersLinks } from "./links";

import { usePathname } from "@/app/navigation";
import { cn } from "@/lib/utils";
import { clientUrl } from "@/utils/clientUrl";

export function MainNav() {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <div className="hidden w-[70%] items-center justify-between xl:flex">
      <nav>
        <ul className="flex space-x-10">
          {headersLinks.map(({ href, key }, i) => {
            return (
              <li key={`${href}_${i}`}>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 text-xl text-white hover:text-hover-blue",
                    {
                      "text-hover-blue": pathname === href,
                    }
                  )}
                  asChild
                >
                  <Link href={href}>{t(`header.links.${key}`)}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button variant="standard" asChild>
        <Link href={clientUrl.donate("")}>{t("header.button-donate")}</Link>
      </Button>
    </div>
  );
}
