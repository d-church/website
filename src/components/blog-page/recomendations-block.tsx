import { BlogBlock } from "@components/events-and-blog-page/blog-block";
import { getTranslations } from "next-intl/server";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

interface IRecomendationBlockProps {
  id: number;
  data: IProductsEntity[];

}
export async function RecomendationsBlock({ id, data: blogs }: IRecomendationBlockProps) {
  const t = await getTranslations("events-and-blogs-page.blog-page");

  return (
    <div className="container pb-[100px] pt-[90px] max-lg:pb-[50px] max-lg:pt-[50px]">
      <p className="text-center text-[1.875rem] font-bold uppercase max-lg:text-[1.25rem]">
        {t("recommendations")}
      </p>
      <div className="grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px] pt-[30px] max-lg:pt-[20px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] xl:grid-cols-[repeat(3,_minmax(0_,320px))] 2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
        {blogs.filter(item => item.id != id).slice(0, 3).map((blog) => {
          return (
            <BlogBlock
              key={blog.id}
              title={blog.attributeValues.title.value}
              date={blog.attributeValues.date.value.formattedValue
                .split("-")
                .join(".")}
              id={blog.id}
              imgSrc={blog.attributeValues.images.value[0].downloadLink}
            />
          );
        })}
      </div>
    </div>
  );
}
