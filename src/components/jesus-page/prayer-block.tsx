import { useTranslations } from "next-intl";

export function PrayerBlock() {
  const t = useTranslations();
  return (
    <div className="whitespace-pre-wrap text-center xl:text-[28px]/[34px] md:text-[22px]/[28px] text-[18px]/[24px]">
      <div className="container flex justify-center xl:py-[60px] py-[40px]">
        <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-1")}</p>
      </div>
      <div className="bg-graphite-hsl/10 xl:py-[60px] py-[40px]">
        <div className="container flex justify-center">
          <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-2")}</p>
        </div>
      </div>
      <div className="container flex justify-center xl:py-[60px] py-[40px]">
        <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-3")}</p>
      </div>
      <div className="bg-graphite-hsl/10 xl:py-[60px] py-[40px]">
        <div className="container flex justify-center">
          <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-4")}</p>
        </div>
      </div>
      <div className="container flex justify-center xl:py-[60px] py-[40px]">
        <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-5")}</p>
      </div>
      <div className="bg-graphite-hsl/10 py-[0px]">
        <div className="container flex justify-center xl:py-[60px] py-[40px]">
          <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-6")}</p>
        </div>
      </div>
      <div className="container flex justify-center xl:py-[60px] py-[40px]">
        <p className="w-[795px] pr-10 pl-10">{t("jesus-page.prayer-7")}</p>
      </div>
    </div>
  );
}