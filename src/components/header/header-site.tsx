"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

import { Link as NavigationLink, usePathname } from "@/app/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();
  const newLocale = currentLocale === "uk" ? "en" : "uk";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 w-full border-b-[1px] border-transparent bg-[#E8E8E8] bg-black bg-opacity-60 shadow-md backdrop-blur transition-all duration-300",
        isScrolled ? "py-2 xl:py-3 2xl:py-4" : "py-2.5 xl:py-6 2xl:py-[1.25rem]"
      )}
    >
      <div className="container flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/static/logo-header.webp"
            alt="Logo of the church"
            width={187.33}
            height={80}
            priority={true}
            loading="eager"
            className={cn(
              "transition-all duration-300",
              isScrolled
                ? "w-[60px] xl:w-[90px] 2xl:w-[110px]"
                : "w-[93px] xl:w-[147px] 2xl:w-[187.33px]"
            )}
          />
        </Link>
        <div className="flex items-center gap-4">
          <NavigationLink
            href={pathname}
            locale={newLocale}
            className={cn(
              "rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white",
              "backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20",
              "sm:hidden"
            )}
          >
            {currentLocale === "uk" ? "EN" : "UA"}
          </NavigationLink>
          <MobileNav />
        </div>
        <MainNav />
      </div>
    </header>
  );
}
