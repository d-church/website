import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";
import {
  MainHeaderBlock,
  MinistryTypesBlock,
  PreviewBlock,
} from "@/components/ministry-page";
import { loadMinistryPageData } from "@/components/ministry-page/loadMinistryPageData";

export const revalidate = 300;

export default async function MinistryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const { previewBlockData, ministryCards } = await loadMinistryPageData();

  return (
    <>
      <MainHeaderBlock />
      <Header />
      <PreviewBlock {...previewBlockData} />
      <MinistryTypesBlock ministryCards={ministryCards} />
      <WriteUsBlock />
      <Footer />
    </>
  );
}
