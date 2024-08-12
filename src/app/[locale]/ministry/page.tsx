import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import Loading from "@/components/common/loading";
import { LoadingBackdrop } from "@/components/common/loading-backdrop";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";
import {
  MainHeaderBlock,
  MinistryTypesBlock,
  PreviewBlock,
} from "@/components/ministry-page";

export default function MinistryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <Header />
      <Suspense fallback={<Loading />}>
        {/* <LoadingBackdrop /> */}
        <PreviewBlock />
      </Suspense>
      <MinistryTypesBlock />
      <WriteUsBlock />
      <Footer />
    </>
  );
}
