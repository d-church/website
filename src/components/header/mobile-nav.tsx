"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { headersLinks } from "./links";

import { usePathname } from "@/app/navigation";
import { cn } from "@/lib/utils";
import { clientUrl } from "@/utils/clientUrl";

export function MobileNav() {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <div className=" text-white xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="z-10 flex h-6 w-6 cursor-pointer flex-col flex-wrap justify-around bg-transparent p-0">
            <div
              className={`"rotate-0" block h-[2px] w-full origin-[1px] rounded bg-white transition-all duration-500
              `}
            />
            <div
              className={`"translate-x-0" block h-[2px] w-full origin-[1px] rounded bg-white transition-all  duration-500
              `}
            />
            <div
              className={`"rotate-0" block h-[2px] w-full origin-[1px] rounded bg-white transition-all  duration-500
              `}
            />
          </Button>
        </SheetTrigger>
        <SheetContent className="container flex w-full flex-col border-none bg-[#232323] p-0 pb-12">
          <SheetHeader className="border-b border-hover-blue py-4">
            <div className="container flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/static/logo-header.webp"
                  alt="Logo of the church"
                  width={187.33}
                  height={80}
                  priority={true}
                  loading="eager"
                  className="w-[93px] xl:w-[187.33px]"
                />
              </Link>
              <SheetClose className="">
                <X className="h-8 w-8" color="white" />
              </SheetClose>
            </div>
          </SheetHeader>
          <div className="container flex flex-grow flex-col justify-between pt-12">
            <div className="space-y-12 text-xl text-white">
              {headersLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn("block", {
                    "text-hover-blue": href === pathname
                  })}
                >
                  {t(`header.links.${key}`)}
                </Link>
              ))}
            </div>
            <Button variant="standard" asChild>
              <Link href={clientUrl.donate("8")}>
                {t("header.button-donate")}
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
