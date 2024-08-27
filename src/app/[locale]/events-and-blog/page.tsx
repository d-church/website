import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import {
  BlogsBlock,
  LazyLoadBlock,
  MainHeaderBlock,
  PaginationBlock,
  PreviewBlock,
} from "@/components/events-and-blog-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";

const PaginationProvider = dynamic(
  () => import("@components/events-and-blog-page/pagination-provider"),
  { ssr: false }
);

export const revalidate = 300;
export default function EventsAndBlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainHeaderBlock />
      <Header />
      <div className="relative min-h-[600px] w-full max-lg:min-h-[400px]">
        <PreviewBlock />
      </div>
      <div className="relative min-h-[504px] w-full max-md:flex max-md:flex-col max-md:justify-center lg:h-[1085px] xl:h-[840px] 2xl:h-[1152px]">
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
