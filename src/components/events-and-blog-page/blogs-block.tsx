"use client";

import Loading from "../common/loading";
import { BlogBlock } from "./blog-block";
import { dataBlogs as blogs } from "./data-blogs";
import { usePagination } from "./pagination-provider";

import { cn } from "@/lib/utils";
import { fetchProducts } from "@/oneentry/fetch-products";

export function BlogsBlock() {
  // const blogs = fetchProducts("EventsAndBlog").then((result) => result);

  const { currentPage, perPage } = usePagination();
  const currentSliceStart = (currentPage - 1) * perPage;
  const currentSliceEnd = currentSliceStart + perPage;
  //  IN CMS IT IS AUTOR NOT AUTHOR
  // const facebookURL = blog.attributeValues.autorfacebook.value;
  // const instagramURL = blog.attributeValues.autorinstagram.value;
  // const author = blog.attributeValues.autor.value;
  // const id = blog.attributeValues.id.value;

  return (
    <div className="container grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px] max-lg:min-h-[240px] max-lg:pb-[20px] max-lg:pt-[30px] md:min-h-[945px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] md:gap-y-[50px] md:py-[50px] xl:min-h-[650px] xl:grid-cols-[repeat(3,_minmax(0_,320px))] 2xl:min-h-[962px] 2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
      {blogs.slice(currentSliceStart, currentSliceEnd).map((blog, index) => {
        // if (index != 0) {
        return (
          <BlogBlock
            key={blog.image.previewLink + index}
            title={blog.title}
            date={blog.date}
            id={index}
            imgSrc={blog.image.previewLink}
          />
        );
        // }
      })}
    </div>
  );
}
