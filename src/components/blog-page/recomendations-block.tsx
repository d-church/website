import { BlogBlock } from "@components/events-and-blog-page/blog-block";
import { getTranslations } from "next-intl/server";

import { fetchProducts } from "@/oneentry/fetch-products";

export async function RecomendationsBlock() {
  const t = await getTranslations("events-and-blogs-page.blog-page");
  const blogs = await fetchProducts("Blogs");
  return (
    <div className="container pb-[100px] pt-[90px] max-lg:pb-[50px] max-lg:pt-[50px]">
      <p className="text-center text-[1.875rem] font-bold uppercase max-lg:text-[1.25rem]">
        {t("recommendations")}
      </p>
      <div className="grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px] pt-[30px] max-lg:pt-[20px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] xl:grid-cols-[repeat(3,_minmax(0_,320px))] 2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
        {blogs.slice(0, 3).map((blog, index) => {
          return (
            <BlogBlock
              key={blog.attributeValues.images.value[0].downloadLink + index}
              title={blog.attributeValues.title.value}
              date={blog.attributeValues.date.value.formattedValue
                .split("-")
                .join(".")}
              id={index}
              imgSrc={blog.attributeValues.images.value[0].downloadLink}
            />
          );
        })}
      </div>
    </div>
  );
}
