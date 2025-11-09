import { Metadata } from "next";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

import { ClientSideOnlyRender } from "@/components/common/client-side-only-render";
import { BuildingCredentialsBlock } from "./building-credentials-block";
import { BuildingPreviewBlock } from "./building-preview-block";
import { MainHeaderBlock } from "./main-header-block";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "head" });
  return {
    title: t("titles.donate-building"),
    description: t("meta.donate-building"),
  };
}

export default function DonateBuildingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <Header />
      <BuildingPreviewBlock />
      <ClientSideOnlyRender>
        <BuildingCredentialsBlock />
      </ClientSideOnlyRender>
      <Footer />
    </>
  );
}

