import { BlogBlock } from "@components/events-and-blog-page/blog-block";
import { dataBlogs as blogs } from "@components/events-and-blog-page/data-blogs";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { fetchProducts } from "@/oneentry/fetch-products";

export function RecomendationsBlock() {
  const t = useTranslations("events-and-blogs-page.blog-page");
  return (
    <div className="container pb-[100px] pt-[90px] max-lg:pb-[50px] max-lg:pt-[50px]">
      <p className="text-center text-[1.875rem] font-bold uppercase max-lg:text-[1.25rem]">
        {t("recommendations")}
      </p>
      <div className="grid grid-cols-[minmax(0_,320px)] justify-center pt-[30px] max-lg:gap-y-[30px] max-lg:pt-[20px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] xl:grid-cols-[repeat(3,_minmax(0_,320px))] 2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
        {blogs
          .toReversed()
          .slice(0, 3)
          .map((blog, index) => {
            // if (index != 0) {
            return (
              <BlogBlock
                key={blog.image.previewLink}
                title={blog.title}
                date={blog.date}
                id={index}
                imgSrc={blog.image.previewLink}
              />
            );
            // }
          })}
      </div>
    </div>
  );
}
