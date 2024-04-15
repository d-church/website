"use client";

import { useTranslate } from "@tolgee/react";
import Link from "next/link";

import { Button } from "../ui/button";
import { headersLinks } from "./links";

import { cn } from "@/lib/utils";
import { Link as LinkNav, usePathname } from "@/navigation";
import { clientUrl } from "@/utils/clientUrl";

export function MainNav() {
  const { t } = useTranslate();
  const pathName = usePathname();

  return (
    <div className="hidden w-[70%] items-center justify-between xl:flex">
      <nav>
        <ul className="flex space-x-10">
          {headersLinks.map(({ href, key }, i) => {
            return key !== "video-and-stream" ? (
              <li key={`${href}_${i}`}>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 text-xl text-white hover:text-hover-blue",
                    {
                      "text-hover-blue": pathName === href,
                    }
                  )}
                  asChild
                >
                  <LinkNav href={href}>{t(`header.links.${key}`)}</LinkNav>
                </Button>
              </li>
            ) : (
              <li key={`${href}_${i}`}>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 text-xl text-white hover:text-hover-blue",
                    {
                      "text-hover-blue": pathName === href,
                    }
                  )}
                  asChild
                >
                  <a href={href}>{t(`header.links.${key}`)}</a>
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
