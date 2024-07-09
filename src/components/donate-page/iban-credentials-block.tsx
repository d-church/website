import { useTranslations } from "next-intl";

export function IbanCredentialsBlock() {
  const t = useTranslations();
  return (
    <div className="3xl:scale-150 m-auto max-2xl:scale-90">
      <p className="mb-[10px] mt-[50px] text-center text-xl/[1.5rem] font-bold">
        {t("donate-page.other-donate-methods.credentials.header")}
      </p>
      <div className="max-w-[850px] text-center text-lg/[1.75rem] font-medium lg:text-xl/[1.875rem]">
        <p className="whitespace-normal uppercase md:whitespace-pre-wrap">
          {t("donate-page.other-donate-methods.credentials.inline")}
        </p>
      </div>
    </div>
  );
}
