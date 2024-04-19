import { useTranslations } from "next-intl";

import { DonationForm } from "./donation-form";

export function DonateFormBlock() {
  const t = useTranslations("donate-ministry-page.form-payment-block");
  return (
    <div className="container flex flex-col items-center justify-center space-y-[50px] pb-[78px] pt-[100px]">
      <h2 className="text-center text-[30px] font-bold uppercase text-[#232323] xl:text-[40px]">
        {t("title")}
      </h2>
      <DonationForm />
    </div>
  );
}
