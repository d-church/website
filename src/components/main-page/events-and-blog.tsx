import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Button } from "../ui/button";

import {
  BlogsBlock,
  LazyLoadBlock,
  PaginationBlock,
} from "@/components/events-and-blog-page";

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
  const t = useTranslations();
  return (
    <>
      <div className="relative min-h-[324px] w-full max-md:flex max-md:flex-col max-md:justify-center">
        <PaginationProvider>
          <BlogsBlock />
          <PaginationBlock />
          <LazyLoadBlock />
        </PaginationProvider>
      </div>
      <div className="mb-16 flex justify-center">
        <Button
          variant="standard"
          className="transform scale-115 max-2lx:rounded-[20px] group flex items-center justify-center rounded-[22px] border border-graphite bg-white px-[10px] py-[10px] text-[1rem] uppercase text-black hover:bg-graphite hover:text-hover-blue peer-hover:bg-graphite peer-hover:text-hover-blue 2xl:px-[20px] 2xl:text-[1.25rem]"
        >
          <Link href="/events-and-blog">
            {t("events-and-blogs-page.button.button-main-page")}
          </Link>
        </Button>
      </div>
    </>
  );
}
