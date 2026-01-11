import EventsAndBlogPage from "@/components/main-page/events-and-blog";
import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

import {
  MainHeaderBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
  WriteUsBlock
} from "@/components/main-page";
import { AboutChurch } from "@/components/main-page/about-church-block";

export default function HomePage({
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
        <PreviewBlock />
        <AboutChurch />
        {/* <ImportantInformationBlock /> */}
        <VideoBlock />
        {/* <AboutBlock /> */}
        <EventsAndBlogPage params={{ locale }} />
        {/* <ChurchTeamBlock /> */}
        <ServeGodBlock />
        <ShareBlock />
        <WriteUsBlock />
      </main>
      <Footer />
    </>
  );
}