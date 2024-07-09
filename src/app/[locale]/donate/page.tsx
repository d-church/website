import { unstable_setRequestLocale } from "next-intl/server";

import { MainHeaderBlock, PreviewBlock } from "@/components/donate-page";

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <PreviewBlock />
    </>
  );
}
