import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function ShareBlock() {
  const t = useTranslations();
  return (
    <div className="relative py-[125px] xl:py-[230px]">
      <Image
        src="/static/background-share-block.webp"
        fill
        alt="Background share block"
        className="absolute -z-10 h-full w-full object-cover opacity-10"
      />
      <div className="container flex flex-col items-center justify-center space-y-10 text-center xl:space-y-[45px]">
        <h2 className="text-[26px] font-thin text-graphite md:text-5xl xl:text-7xl">
          {t("main-page.share-block.title")}
        </h2>
        <p className="max-w-[275px] text-lg font-medium text-[#8A8A8A] md:max-w-[578px] md:text-xl">
          {t("main-page.share-block.text")}
        </p>
        <Button
          variant="standard"
          className="border-graphite uppercase text-graphite hover:bg-graphite hover:text-white"
        >
          <Link href={clientUrl.donate("")}>
            {t("main-page.share-block.button-donate")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
