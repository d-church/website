import { useTranslations } from "next-intl";

export function PrayerBlock() {
  const t = useTranslations();
  return (
    <div className="text-center text-[32px]/[38px]">
      <div className="container max-w-[795px] py-[160px]">
        <p>{t("jesus-page.prayer-1")}</p>
      </div>
      <div className="bg-graphite/10 py-[140px]">
        <div className="container flex w-full justify-center">
          <p className="w-[795px]">{t("jesus-page.prayer-2")}</p>
        </div>
      </div>
      <div className="container max-w-[795px] py-[140px]">
        <p>{t("jesus-page.prayer-3")}</p>
      </div>
      <div className="bg-graphite/10 py-[160px]">
        <div className="container flex w-full justify-center">
          <p className="w-[795px]">{t("jesus-page.prayer-4")}</p>
        </div>
      </div>
      <div className="container max-w-[795px] py-[120px]">
        <p>{t("jesus-page.prayer-5")}</p>
      </div>
      <div className="container max-w-[795px] pb-[530px]">
        <p>{t("jesus-page.prayer-name")}</p>
      </div>
    </div>
  );
}
