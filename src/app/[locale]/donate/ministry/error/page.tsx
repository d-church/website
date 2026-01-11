import { unstable_setRequestLocale } from "next-intl/server";

import { PreviewBlock } from "@/components/donation-ministry";
import { ErrorBlock } from "@/components/statuses-page/error-block";

export default function ErrorPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <PreviewBlock />
      <ErrorBlock />
    </>
  );
}
