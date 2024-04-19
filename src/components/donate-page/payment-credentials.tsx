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
    <div className="text-center text-[20px]/[30px] h-[300px] lg:h-[200px]">
      {currentPaymentMethod === payments[0].name ? (
        <>
          <p className="mb-[20px] text-[20px]/[24px] font-bold">
            {payments[0].text}
          </p>
          <div className="text-[18px]/[30px] lg:text-[20px]/[30px]">
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
