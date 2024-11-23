"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed z-50 w-full border-b-[1px] bg-[#E8E8E8] bg-black bg-opacity-60 backdrop-blur ${isScrolled
        ? "py-0.5 xl:py-1.5 2xl:py-2"
        : "py-2.5 xl:py-6 2xl:py-[1.25rem]"
        } transition-all duration-300`}
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
            className={`${isScrolled
              ? "w-[50px] xl:w-[80px] 2xl:w-[100px]"
              : "w-[93px] xl:w-[147px] 2xl:w-[187.33px]"
              } transition-all duration-300`}
          />
        </Link>
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
}