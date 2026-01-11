import { unstable_setRequestLocale } from "next-intl/server";

import { PreviewBlock } from "@/components/donation-ministry";
import { SuccessBlock } from "@/components/statuses-page/success-block";

export default function SuccessPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <PreviewBlock />
      <SuccessBlock />
    </>
  );
}
