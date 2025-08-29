import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import {
  BlogsBlock,
  LazyLoadBlock,
  MainHeaderBlock,
  PaginationBlock,
  PreviewBlock,
} from "@/components/events-and-blog-page";
import { loadEventsAndBlogPageData } from "@/components/events-and-blog-page/loadPageData";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";

const PaginationProvider = dynamic(
  () => import("@components/events-and-blog-page/pagination-provider"),
  { ssr: false }
);

export const revalidate = 300;
export default async function EventsAndBlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const { previewBlockCarouselItems } = await loadEventsAndBlogPageData();

  return (
    <>
      <MainHeaderBlock />
      <Header />
      <div className="relative min-h-[600px] w-full max-lg:min-h-[400px]">
        <PreviewBlock carouselItems={previewBlockCarouselItems} />
      </div>
      <div className="relative min-h-[324px] w-full max-md:flex max-md:flex-col max-md:justify-center ">
        <PaginationProvider>
          <BlogsBlock />
          <PaginationBlock />
          <LazyLoadBlock />
        </PaginationProvider>
      </div>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
