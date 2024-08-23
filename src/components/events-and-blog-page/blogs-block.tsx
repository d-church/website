"use client";

import { Suspense, useEffect, useState } from "react";

import Loading from "../common/loading";
import { BlogBlock } from "./blog-block";
import { dataBlogs as blogs } from "./data-blogs";
import { usePagination } from "./pagination-provider";

import { cn } from "@/lib/utils";
import { fetchProducts } from "@/oneentry/fetch-products";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function suspensify(promise: Promise<any>) {
  let status = "pending";
  let result: any;

  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender; // Throw the promise to trigger Suspense
      } else if (status === "error") {
        throw result; // Throw the error to handle it in the ErrorBoundary
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const delayedBlogsResource = suspensify(delay(2000).then(() => blogs));

export function BlogsBlock() {
  const blogs = fetchProducts("EventsAndBlog").then((result) => {
    console.log(result);
    return result;
  });

  const { currentPage, perPage } = usePagination();
  const currentSliceStart = (currentPage - 1) * perPage;
  const currentSliceEnd = currentSliceStart + perPage;

  const delayedBlogs = delayedBlogsResource.read();

  return (
    <div className="container grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px] max-lg:min-h-[240px] max-lg:pb-[20px] max-lg:pt-[30px] md:min-h-[945px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] md:gap-y-[50px] md:py-[50px] xl:min-h-[650px] xl:grid-cols-[repeat(3,_minmax(0_,320px))] 2xl:min-h-[962px] 2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
      {delayedBlogs
        .slice(currentSliceStart, currentSliceEnd)
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
  );
}
