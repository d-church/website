"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { PaymentCredentials } from "./payment-credentials";
import { PaymentMethods } from "./payment-methods";

export function OtherDonateMethods() {
  const t = useTranslations();
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState("default");

  return (
    <div className="bg-graphite">
      <div
        id="other-payment-methods"
        className="container flex w-full flex-col items-center pb-[50px] pt-[40px] text-white lg:pb-[100px] lg:pt-[50px]"
      >
        <p className="mb-[30px] text-center text-3xl font-bold uppercase lg:text-[2.5rem]/[3rem]">
          {t("donate-page.other-donate-methods.header")}
        </p>
        <PaymentMethods
          currentPaymentMethod={currentPaymentMethod}
          setCurrentPaymentMethod={setCurrentPaymentMethod}
        />
        <PaymentCredentials currentPaymentMethod={currentPaymentMethod} />
      </div>
    </div>
  );
}
