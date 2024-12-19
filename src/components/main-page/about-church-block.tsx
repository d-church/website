import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { clientUrl } from "@/utils/clientUrl";

export function AboutChurch() {
  const t = useTranslations();
  return (
    <div className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full">
      <Image
        src="/static/background-church.jpg"
        alt="Background for About Church"
        fill
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover"
      />

      <div className="container flex flex-col items-center justify-center space-y-[20px] py-[11px] xl:flex-row xl:gap-[160px] xl:space-y-0 xl:py-[61px]">
        <div className="px-4 py-[30px] text-center sm:px-7 sm:py-[50px]">
          <div className="mb-5 sm:mb-5">
            <h1 className="font-roboto text-[40px] font-thin tracking-[10px] text-white sm:text-[78.4px] sm:tracking-[28px]">
              {t("main-page.about-church-block.church")}
            </h1>
            <p className="font-montserrat mx-auto mt-5 max-w-[90%] text-[18px] leading-[1.6] text-black sm:mt-7 sm:max-w-[980px] sm:text-[25.2px]">
              {t("main-page.about-church-block.description")}
              &emsp;
            </p>
          </div>
          <Button
            variant="standard"
            className="border-gray-600 px-4 py-2 text-sm uppercase text-gray-600 hover:bg-gray sm:px-6 sm:py-3 sm:text-base"
          >
            <Link href={clientUrl.about}>
              {t("main-page.serving-god-block.button-details")}
            </Link>
          </Button>
          <div>
            <h2 className="font-roboto mb-5 mt-10 text-[20px] font-light text-white sm:mb-7 sm:text-[28px]">
              {t("main-page.about-church-block.potoks")}
            </h2>
            <div className="flex flex-col justify-center gap-[15px] sm:flex-row sm:gap-[42px]">
              <div className="font-roboto rounded-[15px] bg-white/40 px-[20px] py-[15px] text-black transition-transform sm:rounded-[21px] sm:px-[42px] sm:py-[21px]">
                <span className="text-[20px] text-black sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-1")}
                </span>
                <br />
                <span className="mt-[5px] block text-[14px] text-black sm:mt-[8.2px] sm:text-[16.6px]">
                  {t("main-page.about-church-block.morning")}
                </span>
              </div>
              <div className="font-roboto rounded-[15px] bg-white/40 px-[20px] py-[15px] text-black transition-transform sm:rounded-[21px] sm:px-[42px] sm:py-[21px]">
                <span className="text-[20px] text-black sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-2")}
                </span>
                <br />
                <span className="mt-[5px] block text-[14px] text-black sm:mt-[8.2px] sm:text-[16.6px]">
                  {t("main-page.about-church-block.day")}
                </span>
              </div>
              <div className="font-roboto rounded-[15px] bg-white/40 px-[20px] py-[15px] text-black transition-transform sm:rounded-[21px] sm:px-[42px] sm:py-[21px]">
                <span className="text-[20px] text-black sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-3")}
                </span>
                <br />
                <span className="mt-[5px] block text-[14px] text-black sm:mt-[8.2px] sm:text-[16.6px]">
                  {t("main-page.about-church-block.youth")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
