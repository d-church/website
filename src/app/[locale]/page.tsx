import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import {
  AboutBlock,
  ChurchTeamBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
  WriteUsBlock,
} from "@/components/main-page";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <main className="flex-[1_0_auto]">
        <PreviewBlock />
        <VideoBlock />
        <AboutBlock />
        <ChurchTeamBlock />
        <ServeGodBlock />
        <ShareBlock />
        <WriteUsBlock />
      </main>
      <Footer />
    </>
  );
}
