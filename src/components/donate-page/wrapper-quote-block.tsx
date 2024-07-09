import { useTranslations } from "next-intl";

import { IbanCredentialsBlock } from "./iban-credentials-block";

export function WrapperQuoteBlock() {
  const t = useTranslations();
  return (
    <div className="container flex flex-col items-center pb-[100px] font-medium">
      <p className="mt-[50px] pb-[50px] text-center text-xl/[1.875rem] text-gray xl:w-[1070px]">
        {t("donate-page.qr-codes-block.intro")}
      </p>
      {/* <QrCodesBlock /> */}
      <IbanCredentialsBlock />
    </div>
  );
}
