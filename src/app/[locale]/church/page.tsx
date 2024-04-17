import { unstable_setRequestLocale } from "next-intl/server";

import {
  DescriptionBlock,
  HeadingBlock,
  PreviewBlock,
} from "@/components/church-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { ChurchTeamBlock, WriteUsBlock } from "@/components/main-page";

export default function ChurchPage({
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
        <DescriptionBlock />
        <HeadingBlock />
        <ChurchTeamBlock className="pt-[30px] xl:pt-[30px]" />
      </main>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
