"use client";

import { useTranslations } from "next-intl";

import { payments } from "./payments";

interface IPaymentCredentialsProps {
  currentPaymentMethod: string;
}

export function PaymentCredentials({
  currentPaymentMethod,
}: IPaymentCredentialsProps) {
  const t = useTranslations();

  return (
    <div className="h-[300px] text-center text-xl/[1.875rem] lg:h-[200px]">
      {currentPaymentMethod === payments[0].name ? (
        <>
          <p className="mb-[20px] text-xl/[1.5rem] font-bold">
            {payments[0].text}
          </p>
          <div className="text-lg/[1.75rem] lg:text-xl/[1.875rem]">
            <p>{t("donate-page.other-donate-methods.credentials.org-name")}</p>
            <p>{t("donate-page.other-donate-methods.credentials.edrpou")}</p>
            <p>{t("donate-page.other-donate-methods.credentials.bank-name")}</p>
            <p>{t("donate-page.other-donate-methods.credentials.iban")}</p>
            <p>
              {t(
                "donate-page.other-donate-methods.credentials.payment-purpose"
              )}
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
