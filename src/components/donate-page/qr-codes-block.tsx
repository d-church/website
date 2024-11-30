import { useTranslations } from "next-intl";
import Image from "next/image";


export function QrCodesBlock() {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center gap-[65px] lg:flex-row lg:gap-[100px] xl:justify-normal xl:gap-[305px]">
      <div className="mb-[65px] flex flex-col items-center md:w-[434px] lg:mb-0">
        <div className="mb-[45px] flex items-center justify-center gap-[95px] lg:flex-col lg:gap-0">
          <p className="text-[5rem]/[5rem] font-thin lg:mb-[18px]">UA</p>
          <Image src="/static/qr-code.webp" alt="" width={118} height={118} />
        </div>
        <p className="text-center text-xl/[1.875rem] text-gray">
          {t("donate-page.qr-codes-block.ua-qr")}
        </p>
      </div>
    </div>
  );
}
