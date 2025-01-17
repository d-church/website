"use client";

import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";

import { SkeletonCard } from "../common/skeleton-loader";
import { BlogBlock } from "./blog-block";
import { usePagination } from "./pagination-provider";

import { fetchProducts } from "@/oneentry/fetch-products";

export function BlogsBlock() {
  const [blogs, setBlogs] = useState<IProductsEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts("Blogs");
        setBlogs(response);
      } catch (error) {
        console.error("Failed to fetch products in blogs-block:", error);
      }
    };
    fetchData();
  }, []);

  const { currentPage, perPage } = usePagination();

  const currentSliceStart = (currentPage - 1) * perPage;
  const currentSliceEnd = currentSliceStart + perPage;

  if (blogs.length === 0) {
    return <SkeletonCard />;
  } else {
    return (
      <div className="container grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px]  max-lg:pb-[0px] max-lg:pt-[30px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] md:gap-y-[50px] md:py-[50px] xl:grid-cols-[repeat(3,_minmax(0_,320px))]  2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
        {blogs.slice(currentSliceStart, currentSliceEnd).map((blog) => (
            <BlogBlock
              key={blog.id}
              title={blog.attributeValues.title.value}
              date={blog.attributeValues.date.value.formattedValue
                .split("-")
                .join(".")}
              id={blog.id}
              imgSrc={blog.attributeValues.images.value[0].downloadLink}
            />
          ))};
      </div>
    );
  }
}
