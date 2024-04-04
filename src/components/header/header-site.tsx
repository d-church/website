import Image from "next/image";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

import { getTranslate } from "@/lib/tolgee/server";
import { Link } from "@/navigation";

export async function Header() {
  const t = await getTranslate();
  return (
    <header className="fixed w-full bg-black py-4 backdrop-blur xl:py-9">
      <div className="container flex w-full items-center justify-between">
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
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
}
