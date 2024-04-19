import { unstable_setRequestLocale } from "next-intl/server";

import { DonateFormBlock, PreviewBlock } from "@/components/donation-ministry";

export default function DonateMinistryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <PreviewBlock />
      <DonateFormBlock />
    </>
  );
}
