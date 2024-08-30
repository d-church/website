import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import {
  BlogBodyBlock,
  PreviewBlock,
  RecomendationsBlock,
} from "@/components/blog-page";
import Loading from "@/components/common/loading";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { WriteUsBlock } from "@/components/main-page";
import { fetchProducts } from "@/oneentry/fetch-products";

export const revalidate = 300;
export default async function EventsAndBlogPage({
  params: { locale, id },
}: {
  params: { locale: string; id: number };
}) {
  unstable_setRequestLocale(locale);
  const response = await fetchProducts("Blogs");
  return (
    <>
      <Header />
      <Suspense fallback={<Loading className="h-full overflow-hidden top-0 bottom-0" />}>
        <PreviewBlock id={id} data={response} />
        <BlogBodyBlock id={id} data={response} />
        <RecomendationsBlock id={id} data={response} />
      </Suspense>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
