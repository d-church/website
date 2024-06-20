import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function ShareBlock() {
  const t = useTranslations();
  return (
    <div className="relative py-[125px] xl:py-[240px]">
      <Image
        src="/static/background-share-block.webp"
        fill
        alt="Background share block"
        className="absolute -z-10 h-full w-full object-cover opacity-10"
      />
      <div className="container flex flex-col items-center justify-center space-y-10 text-center xl:space-y-[45px]">
        <p className="w-[320px] text-[1.625rem]/[2rem] font-[250] uppercase tracking-[15px] text-graphite md:w-fit md:text-5xl md:font-thin xl:ml-[1.25rem] xl:text-[70px]/[80px] xl:tracking-[40px] 2xl:ml-[1.5rem]">
          {t("main-page.share-block.title")}
        </p>
        <p className="max-w-[275px] text-lg font-medium text-[#8A8A8A] md:max-w-[578px] md:text-xl">
          {t("main-page.share-block.text")}
        </p>
        <Button
          variant="standard"
          className="invisible border-graphite uppercase text-graphite hover:bg-graphite hover:text-hover-blue"
        >
          <Link href={clientUrl.donate("")}>
            {t("main-page.share-block.button-donate")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
