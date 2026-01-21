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
import { fetchBlogById } from "@/oneentry/fetch-products";

export const revalidate = 300;
export default async function EventsAndBlogPage({
  params: { locale, id },
}: {
  params: { locale: string; id: number };
}) {
  unstable_setRequestLocale(locale);

  const blog = await fetchBlogById(id);
  return (
    <>
      <Header />
      <Suspense fallback={<Loading className="h-full overflow-hidden top-0 bottom-0" />}>
        <PreviewBlock data={blog!} />
        <BlogBodyBlock data={blog!} />
      </Suspense>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
