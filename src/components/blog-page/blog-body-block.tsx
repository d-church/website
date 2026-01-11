"use client";

import parse, {
  attributesToProps,
  HTMLReactParserOptions,
} from "html-react-parser";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { Post } from "@/types/posts.types";

interface BlogBodyBlockProps {
  data: Post;
}

export function BlogBodyBlock({ data: post }: BlogBodyBlockProps) {
  const t = useTranslations();

  const parsedHtml = useMemo(
    () => parse(post.html || "", options),
    [post]
  );

  return (
    <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-6 py-6 sm:px-8 sm:py-8 md:px-6 md:py-12">
      <div className="flex w-full flex-col gap-6 text-base leading-relaxed sm:text-lg md:gap-10 md:text-[1.25rem]">
        {parsedHtml}
      </div>
    </div>
  );
}

const options: HTMLReactParserOptions = {
  replace(domNode) {
    if (domNode.type === "text" && domNode.data.trim() === "") return null;

    // @ts-ignore
    if (domNode.name === "p") {
      // @ts-ignore
      const hasImages = domNode.children.some((child) => child.name === "img");
      if (hasImages) {
        // @ts-ignore
        domNode.name = "div";
        // @ts-ignore
        domNode.attribs = attributesToProps({
          className: "flex flex-wrap md:flex-nowrap w-full",
        });
      }
    }
    // @ts-ignore
    if (domNode.name === "img") {
      return (
        <Image
          width={800}
          height={300}
          alt="Post image"
          className="h-auto w-full max-w-full object-contain md:object-cover"
          // @ts-ignore
          src={domNode.attribs.src}
        />
      );
    }
  },
};
