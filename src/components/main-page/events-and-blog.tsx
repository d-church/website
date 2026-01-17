"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Post } from "@/types/posts.types";
import { SkeletonCard } from "../common/skeleton-loader";
import { Button } from "../ui/button";

import { fetchPosts } from "@/api/fetch-posts";
import { BlogsBlock } from "@/components/events-and-blog-page";

export default function EventsAndBlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts({ offset: 0, limit: 3 }, locale);
        setPosts(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, [locale]);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <div className="relative min-h-[324px] w-full max-md:flex max-md:flex-col max-md:justify-center">
        <BlogsBlock posts={posts} />
      </div>
      <div className="mb-16 flex justify-center">
        <Button
          variant="standard"
          className="scale-115 max-2lx:rounded-[20px] group flex transform items-center justify-center rounded-[22px] border border-graphite bg-white px-[10px] py-[10px] text-[1rem] uppercase text-black hover:bg-graphite hover:text-hover-blue peer-hover:bg-graphite peer-hover:text-hover-blue 2xl:px-[20px] 2xl:text-[1.25rem]"
        >
          <Link href="/events-and-blog">
            {t("events-and-blogs-page.button.button-main-page")}
          </Link>
        </Button>
      </div>
    </>
  );
}
