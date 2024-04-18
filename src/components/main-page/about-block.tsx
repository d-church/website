import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function AboutBlock() {
  const t = useTranslations();
  return (
    <div className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full after:bg-black/70">
      <Image
        src="/static/background-about-block.webp"
        alt="Background about block"
        width={1920}
        height={750}
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover"
      />
      <div className="container flex flex-col items-center justify-center space-y-[50px] py-[35px] xl:flex-row xl:space-x-[160px] xl:space-y-0 xl:py-[135px] 2xl:space-x-[200px]">
        <Image
          src="/static/logo-about-block.webp"
          alt="Background about block"
          width={230}
          height={230}
          className="size-[180px] object-cover xl:size-[230px]"
        />
        <div className="text-center text-[30px] font-thin uppercase text-white xl:text-6xl">
          <p>{t("main-page.about-block.text-1")}</p>
          <p>{t("main-page.about-block.text-2")}</p>
          <p>{t("main-page.about-block.text-3")}</p>
        </div>
        <Button variant="standard">
          <Link href={clientUrl.church}>
            {t("main-page.about-block.button-details")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
