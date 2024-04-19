import { useTranslations } from "next-intl";
import Image from "next/image";

import { Icons } from "../ui/icons";

export function QrCodesBlock() {
  const t = useTranslations();
  return (
    <div className="container flex flex-col items-center pb-[100px]">
      <p className="mt-[50px] w-[90%] text-center text-[20px]/[30px] font-medium text-gray xl:w-[1070px]">
        {t("donate-page.qr-codes-block.intro")}
      </p>
      <div className="mt-[65px] flex flex-col justify-center gap-[65px] lg:flex-row lg:gap-[100px] xl:mt-[100px] xl:justify-normal xl:gap-[305px]">
        <div className="mb-[65px] flex flex-col items-center md:w-[434px] lg:mb-0">
          <div className="mb-[45px] flex items-center justify-center gap-[95px] lg:flex-col lg:gap-0">
            <Icons.textUA className="lg:mb-[18px]" />
            <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
          </div>
          <p className="text-center text-[20px]/[30px] text-gray">
            {t("donate-page.qr-codes-block.ua-qr")}
          </p>
        </div>
        <div className="flex flex-col items-center md:w-[434px] lg:mb-0">
          <div className="mb-[45px] flex items-center justify-center gap-[45px] lg:flex-col lg:gap-0">
            <Icons.textUSA className="lg:mb-[18px]" />
            <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
          </div>
          <p className="text-center text-[20px]/[30px] text-gray">
            {t("donate-page.qr-codes-block.usa-qr")}
          </p>
        </div>
      </div>
    </div>
  );
}
