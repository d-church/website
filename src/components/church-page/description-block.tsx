import { useTranslations } from "next-intl";

export function DescriptionBlock() {
  const t = useTranslations("church-page");
  return (
    <div className="container mb-[0px] mt-[50px] flex flex-col md:max-w-[1200px] xl:max-w-full xl:flex-row xl:justify-center">
      <div className="flex max-w-[1200px] flex-col justify-center text-center text-xl/[1.625rem] 2xl:text-[1.375rem]/[1.875rem]">
        <p className="mb-[30px]">{t("description-block.text-1")}</p>
        <p className="mb-[0px] 2xl:mb-0">{t("description-block.text-2")}</p>
      </div>
    </div>
  );
}
