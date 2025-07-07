import { unstable_setRequestLocale } from "next-intl/server";

import { DonateFormBlock, PreviewBlock } from "@/components/donation-ministry";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

export default function DonateMinistryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <PreviewBlock />
      <DonateFormBlock />
      <Footer />
    </>
  );
}
