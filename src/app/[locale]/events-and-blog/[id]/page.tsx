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

export const revalidate = 300;
export default function EventsAndBlogPage({
  params: { locale, id },
}: {
  params: { locale: string; id: number };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <PreviewBlock id={id} />
        <BlogBodyBlock id={id} />
        <RecomendationsBlock />
      </Suspense>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
