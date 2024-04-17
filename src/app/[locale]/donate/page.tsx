import { unstable_setRequestLocale } from "next-intl/server";

import { OtherDonateMethods } from "@/components/donate-page/other-donate-methods";
import { PreviewBlock } from "@/components/donate-page/preview-block";
import { QrCodesBlock } from "@/components/donate-page/qr-codes-block";

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <PreviewBlock />
      <QrCodesBlock />
      <OtherDonateMethods />
    </>
  );
}
