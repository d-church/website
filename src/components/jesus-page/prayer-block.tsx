import { useTranslations } from "next-intl";

export function PrayerBlock() {
  const t = useTranslations();
  return (
    <div className="whitespace-pre-wrap text-center text-[2rem]/[2.375rem]">
      <div className="container flex justify-center py-[160px]">
        <p className="w-[795px]">{t("jesus-page.prayer-1")}</p>
      </div>
      <div className="bg-graphite-hsl/10 py-[140px]">
        <div className="container flex justify-center">
          <p className="w-[795px]">{t("jesus-page.prayer-2")}</p>
        </div>
      </div>
      <div className="container flex justify-center py-[140px]">
        <p className="w-[795px]">{t("jesus-page.prayer-3")}</p>
      </div>
      <div className="bg-graphite-hsl/10 py-[160px]">
        <div className="container flex justify-center">
          <p className="w-[795px]">{t("jesus-page.prayer-4")}</p>
        </div>
      </div>
      <div className="container flex justify-center py-[120px]">
        <p className="w-[795px]">{t("jesus-page.prayer-5")}</p>
      </div>
      <div className="container flex justify-center pb-[530px]">
        <p className="w-[795px]">{t("jesus-page.prayer-name")}</p>
      </div>
    </div>
  );
}
