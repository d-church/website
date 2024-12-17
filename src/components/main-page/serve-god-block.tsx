import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function ServeGodBlock() {
  const t = useTranslations();
  return (
    <div className="relative py-[25px] after:absolute after:top-0 after:-z-[1] after:h-full after:w-full after:bg-black/70">
      <Image
        src="/static/background-serve-god-block.webp"
        fill
        alt="Serve God"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <div className="container flex max-h-[750px] min-h-[500px] w-full flex-col items-center justify-center space-y-4 py-[30px] text-center text-white sm:min-h-[600px] sm:space-y-8 xl:max-w-[1070px]">
        <h2 className="font-roboto text-[32px] font-bold font-thin uppercase tracking-[5px] text-white sm:text-[58px] sm:tracking-[15px] lg:text-[78.4px] lg:tracking-[28px]">
          {t("main-page.serving-god-block.title")}
        </h2>
        <p className="font-montserrat mx-auto mt-4 max-w-[90%] text-[12px] leading-[1.6] text-white sm:mt-6 sm:max-w-[980px] sm:text-[18px] lg:text-[20px]">
          {t("main-page.serving-god-block.text")}
        </p>
        <Button
          variant="standard"
          className="px-4 py-2 text-sm uppercase sm:px-6 sm:py-3 sm:text-base"
        >
          <Link href={clientUrl.ministry}>
            {t("main-page.serving-god-block.button-details")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
