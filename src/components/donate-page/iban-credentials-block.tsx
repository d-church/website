import { useTranslations } from "next-intl";

export function IbanCredentialsBlock() {
  const t = useTranslations();
  return (
    <>
      <p className="mb-[20px] text-xl/[1.5rem] font-bold">
        {t("donate-page.other-donate-methods.credentials.header")}
      </p>
      <div className="text-center text-lg/[1.75rem] lg:text-xl/[1.875rem]">
        <p>{t("donate-page.other-donate-methods.credentials.org-name")}</p>
        <p>{t("donate-page.other-donate-methods.credentials.edrpou")}</p>
        <p>{t("donate-page.other-donate-methods.credentials.bank-name")}</p>
        <p>{t("donate-page.other-donate-methods.credentials.iban")}</p>
        <p>
          {t("donate-page.other-donate-methods.credentials.payment-purpose")}
        </p>
      </div>
    </>
  );
}
