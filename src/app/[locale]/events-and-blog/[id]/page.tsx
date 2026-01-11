import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import {
  BlogBodyBlock,
  PreviewBlock
} from "@/components/blog-page";
import Loading from "@/components/common/loading";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";
import { fetchPostById } from "@/api/fetch-posts";

export const revalidate = 300;
export default async function EventsAndBlogPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);

  const post = await fetchPostById(id, locale);
  if (!post) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <p>Post not found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Suspense fallback={<Loading className="h-full overflow-hidden top-0 bottom-0" />}>
        <PreviewBlock data={post} />
        <BlogBodyBlock data={post} />
      </Suspense>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
