import { useTranslations } from "next-intl";
import Image from "next/image";

export function DescriptionBlock() {
  const t = useTranslations("church-page");
  return (
    <div className="container mb-[100px] mt-[100px] flex flex-col md:max-w-[795px] xl:max-w-full xl:flex-row xl:justify-center">
      <div className="flex max-w-[795px] flex-col justify-center text-[20px]/[26px] 2xl:text-[22px]/[30px]">
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
