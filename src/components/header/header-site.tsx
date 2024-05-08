import Image from "next/image";
import Link from "next/link";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="fixed z-50 w-full border-b-[1px] border-hover-blue bg-black bg-opacity-10 py-2.5 backdrop-blur xl:py-6 2xl:py-[1.25rem]">
      <div className="container flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/static/logo-header.webp"
            alt="Logo of the church"
            width={187.33}
            height={80}
            priority={true}
            loading="eager"
            className="w-[93px] xl:w-[147px] 2xl:w-[187.33px]"
          />
        </Link>
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
}
