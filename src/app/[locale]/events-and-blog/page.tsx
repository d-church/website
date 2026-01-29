import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { fetchPosts } from "@/api/fetch-posts";
import {
  BlogsBlock,
  MainHeaderBlock,
  PaginationBlock,
} from "@/components/events-and-blog-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";

export const revalidate = 300;

const PER_PAGE = 6;
const MAX_COUNT_LIMIT = 1000;

const HERO_IMAGE_URL = "/static/post-page-hero.webp";

export default async function EventsAndBlogPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) {
  unstable_setRequestLocale(locale);

  const currentPage = Math.max(1, Number(searchParams?.page ?? "1") || 1);
  const offset = (currentPage - 1) * PER_PAGE;

  const [pagePosts, allPostsForCount] = await Promise.all([
    fetchPosts({ offset, limit: PER_PAGE }, locale),
    fetchPosts({ offset: 0, limit: MAX_COUNT_LIMIT }, locale),
  ]);

  const lastPage = Math.max(1, Math.ceil(allPostsForCount.length / PER_PAGE));

  return (
    <>
      <MainHeaderBlock />
      <Header />
      <div className="relative min-h-[600px] w-full max-lg:min-h-[400px]">
        <Image
          src={HERO_IMAGE_URL}
          alt="Latest post image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative min-h-[324px] w-full max-md:flex max-md:flex-col max-md:justify-center ">
        <BlogsBlock posts={pagePosts} />
        <PaginationBlock currentPage={currentPage} lastPage={lastPage} />
      </div>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
