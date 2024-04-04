import { X } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { headersLinks } from "./links";

import { getTranslate } from "@/lib/tolgee/server";
import { Link } from "@/navigation";

export async function MobileNav() {
  const t = await getTranslate();
  return (
    <div className=" text-white xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="z-10 flex h-6 w-6 cursor-pointer flex-col flex-wrap justify-around bg-transparent p-0 lg:hidden">
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
        <SheetContent className="bg-graphite container flex w-full flex-col border-none p-0 pb-12">
          <SheetHeader className="border-hover-blue border-b py-4">
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
                <Link key={href} href={href} className="block">
                  {t(`header.links.${key}`)}
                </Link>
              ))}
            </div>
            <Button className="rounded-[22px] border border-white bg-inherit text-xl text-white hover:bg-white hover:text-black">
              {t("header.button-donate")}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
