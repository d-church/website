import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";

import {
  MainHeaderBlock,
  PreviewBlock,
  MinistryTypesBlock,
} from "./components";

export default async function MinistryPage({
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
      <MinistryTypesBlock />
      <WriteUsBlock />
      <Footer />
    </>
  );
}
