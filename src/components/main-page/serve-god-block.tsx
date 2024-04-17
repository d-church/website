import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function ServeGodBlock() {
  const t = useTranslations();
  return (
    <div className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full after:bg-black/70">
      <Image
        src="/static/background-serve-god-block.webp"
        fill
        alt="Serve God"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <div className="container flex min-h-screen max-w-[670px] flex-col items-center justify-between space-y-[30px] py-[104px] text-center text-white xl:min-h-full xl:max-w-[1070px] xl:justify-center xl:py-[175px]">
        <h2 className="text-3xl font-bold">
          {t("main-page.serving-god-block.title")}
        </h2>
        <p className="hidden text-xl md:block">
          {t("main-page.serving-god-block.text")}
        </p>
        <Button variant="standard">
          <Link href={clientUrl.ministry}>
            {t("main-page.serving-god-block.button-details")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
