import { useTranslations } from "next-intl";
import Image from "next/image";

import { Icons } from "../ui/icons";

export function QrCodesBlock() {
  const t = useTranslations();
  return (
    <div className="container flex flex-col items-center pb-[100px] font-medium">
      <p className="mt-[50px] text-center text-xl/[1.875rem] text-gray xl:w-[1070px]">
        {t("donate-page.qr-codes-block.intro")}
      </p>
      <div className="mt-[65px] flex flex-col justify-center gap-[65px] lg:flex-row lg:gap-[100px] xl:mt-[100px] xl:justify-normal xl:gap-[305px]">
        <div className="mb-[65px] flex flex-col items-center md:w-[434px] lg:mb-0">
          <div className="mb-[45px] flex items-center justify-center gap-[95px] lg:flex-col lg:gap-0">
            <p className="text-[5rem]/[5rem] font-thin lg:mb-[18px]">UA</p>
            <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
          </div>
          <p className="text-center text-xl/[1.875rem] text-gray">
            {t("donate-page.qr-codes-block.ua-qr")}
          </p>
        </div>
        <div className="flex flex-col items-center md:w-[434px] lg:mb-0">
          <div className="mb-[45px] flex items-center justify-center gap-[45px] lg:flex-col lg:gap-0">
            <p className="text-[5rem]/[5rem] font-thin lg:mb-[18px]">USA</p>
            <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
          </div>
          <p className="text-center text-xl/[1.875rem] text-gray">
            {t("donate-page.qr-codes-block.usa-qr")}
          </p>
        </div>
      </div>
    </div>
  );
}
