import { unstable_setRequestLocale } from "next-intl/server";
import EventsAndBlogPage from "@/components/main-page/events-and-blog";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { LazyLoadBlock } from "@/components/events-and-blog-page/lazy-load-block";
import {
  AboutBlock,
  ChurchTeamBlock,
  MainHeaderBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
  WriteUsBlock,
} from "@/components/main-page";
import { AboutChurch } from "@/components/main-page/about-church-block";
import { PaginationBlock } from "@/components/events-and-blog-page/pagination-block";
import PaginationProvider from "@/components/events-and-blog-page/pagination-provider";

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