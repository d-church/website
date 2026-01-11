import { useTranslations } from "next-intl";

export function IbanCredentialsBlock() {
  const t = useTranslations();
  return (
    <div className="m-auto max-2xl:scale-90 3xl:scale-150">
      <p className="mb-[10px] mt-[25px] text-center text-xl/[1.5rem] font-bold md:mt-[50px]">
        {t("donate-page.other-donate-methods.credentials.header")}
      </p>
      <div className="max-w-[850px] text-center text-sm font-medium md:text-lg/[1.75rem] lg:text-xl/[1.875rem]">
        <p className="hidden whitespace-pre-wrap uppercase md:block">
          {t("donate-page.other-donate-methods.credentials.inline")}
        </p>
        <p className="whitespace-pre-wrap text-sm uppercase md:hidden">
          {t("donate-page.other-donate-methods.credentials.inline-mobile")}
        </p>
      </div>
    </div>
  );
}
