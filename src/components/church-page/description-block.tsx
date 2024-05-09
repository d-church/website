import { useTranslations } from "next-intl";
import Image from "next/image";

export function DescriptionBlock() {
  const t = useTranslations("church-page");
  return (
    <div className="container mb-[100px] mt-[100px] flex flex-col md:max-w-[795px] xl:max-w-full xl:flex-row xl:justify-center">
      <div className="flex max-w-[795px] flex-col justify-center text-xl/[1.625rem] 2xl:text-[1.375rem]/[1.875rem]">
        <p className="mb-[30px]">{t("description-block.text-1")}</p>
        <p className="mb-[30px] 2xl:mb-0">{t("description-block.text-2")}</p>
      </div>
      <Image
        className="h-[418px] w-[795px] object-cover xl:ml-[30px]"
        src="/static/background-write-us-block.webp"
        alt="An Image"
        width={795}
        height={418}
      />
    </div>
  );
}
