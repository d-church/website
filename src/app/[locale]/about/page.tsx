import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from 'next/dynamic';

import {
  ChurchTeamBlock,
  DescriptionBlock,
  HeadingBlock,
  MainHeaderBlock,
} from "@/components/church-page";
import { MainChurchBlock } from "@/components/church-page/main-church";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";
import { Carousel } from "@/components/church-page/carousel";

export default function ChurchPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <Header />
      <main className="flex-[1_0_auto]">
        <MainChurchBlock />
        <DescriptionBlock />
        <Carousel/>
        <HeadingBlock />
        <ChurchTeamBlock className="pt-[30px] xl:pt-[30px]" />
      </main>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
