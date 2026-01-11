import { useTranslations } from "next-intl";

export function DonationHeaderBlock() {
  const t = useTranslations();
  return (
    <div className="mt-[20px] text-center text-sm font-medium max-2xl:scale-90 md:text-lg/[1.75rem] xl:mt-0 3xl:mt-[5rem] 3xl:scale-150">
      <p className="mb-[10px] font-bold uppercase">
        {t("donate-page.preview-block.button-donate")}
      </p>
      <p className="max-w-[850px] text-gray lg:text-xl/[1.875rem]">
        {t("donate-page.qr-codes-block.intro")}
      </p>
    </div>
  );
}
