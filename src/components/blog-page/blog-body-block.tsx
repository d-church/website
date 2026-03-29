"use client";

import parse, {
  attributesToProps,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import Image from "next/image";
import { useMemo } from "react";

import { Post } from "@/types/posts.types";
import { getPostPreviewImageSrc } from "./utils";

interface BlogBodyBlockProps {
  data: Post;
}

export function BlogBodyBlock({ data: post }: BlogBodyBlockProps) {
  const parsedHtml = useMemo(
    () => parse(post.html || "", getOptions(post)),
    [post]
  );

  return (
    <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-6 py-6 sm:px-8 sm:py-8 md:px-6 md:py-12">
      <div className="flex w-full flex-col gap-0 text-base leading-snug text-foreground/95 sm:text-[1.0625rem] md:text-[1.125rem] [&>blockquote]:mb-2 [&>blockquote]:mt-0 [&>blockquote]:border-l-2 [&>blockquote]:border-muted-foreground/30 [&>blockquote]:pl-4 [&>div]:mb-3 [&>div:last-child]:mb-0 [&>h2]:mb-2 [&>h2]:mt-5 [&>h2]:text-xl [&>h2]:font-semibold [&>h2:first-child]:mt-0 [&>h3]:mb-1.5 [&>h3]:mt-4 [&>h3]:text-lg [&>h3]:font-semibold [&>h3:first-child]:mt-0 [&>ol]:mb-2 [&>ol]:mt-0 [&>ol]:list-decimal [&>ol]:pl-6 [&>p]:mb-1.5 [&>p:last-child]:mb-0 [&>p:empty]:mb-0 [&>p:empty]:hidden [&>p:has(>br:only-child)]:mb-0 [&>p:has(>br:only-child)]:mt-0 [&>p:has(>br:only-child)]:py-0 [&>p:has(>br:only-child)]:leading-none [&>ul]:mb-2 [&>ul]:mt-0 [&>ul]:list-disc [&>ul]:pl-6 [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline [&_br+br]:hidden">
        {parsedHtml}
      </div>
    </div>
  );
}

const getOptions = (post: Post): HTMLReactParserOptions => ({
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

    if (domNode instanceof Element && domNode.name === "img") {
      if (domNode.attribs?.src === getPostPreviewImageSrc(post)) return <></>;

      return (
        <Image
          width={800}
          height={300}
          alt="Post image"
          className="h-auto w-full max-w-full object-contain md:object-cover"
          src={domNode.attribs.src}
        />
      );
    }
  },
});
