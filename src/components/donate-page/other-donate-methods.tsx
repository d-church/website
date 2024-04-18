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
        className="container flex w-full flex-col items-center pt-[50px] text-white"
      >
        <p className="mb-[30px] text-[40px]/[49px] uppercase">
          {t("donate-page.other-donate-methods.header")}
        </p>
        <PaymentMethods
          currentPaymentMethod={currentPaymentMethod}
          setCurrentPaymentMethod={setCurrentPaymentMethod}
        />
        <PaymentCredentials
          currentPaymentMethod={currentPaymentMethod}
        />
      </div>
    </div>
  );
}
