"use client";

import { useTranslations } from "next-intl";

import { TPayments } from "@/types/payments.types";

interface IPaymentCredentialsProps {
  currentPaymentMethod: TPayments;
}

export function PaymentCredentials({
  currentPaymentMethod,
}: IPaymentCredentialsProps) {
  const t = useTranslations();

  return (
    <div className="mb-[100px] h-[200px] text-center text-[20px]/[30px]">
      <p className="mb-[20px] text-[20px]/[24px] font-bold">
        {currentPaymentMethod}
      </p>
      {currentPaymentMethod === "РЕКВІЗИТИ В UAH" ? (
        <>
          <p>{t("donate-page.other-donate-methods.credentials.org-name")}</p>
          <p>{t("donate-page.other-donate-methods.credentials.edrpou")}</p>
          <p>{t("donate-page.other-donate-methods.credentials.bank-name")}</p>
          <p>{t("donate-page.other-donate-methods.credentials.iban")}</p>
          <p>
            {t("donate-page.other-donate-methods.credentials.payment-purpose")}
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
