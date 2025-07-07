import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

import { MainHeaderBlock, PreviewBlock } from "@/components/donate-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

export const metadata: Metadata = {
  title: "Церква - Джерело життя | Публічна оферта",
  description: "Публічна оферта",
};

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <Header />
      <PreviewBlock />
      <Footer />
    </>
  );
}
