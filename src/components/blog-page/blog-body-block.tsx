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
    <div className="mx-auto w-full max-w-[680px] overflow-x-hidden px-5 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:pb-20">
      <div
        className="flex w-full flex-col gap-0 text-[1.0625rem] font-normal leading-[1.58] text-foreground/92 antialiased sm:text-[1.125rem] md:text-[1.1875rem] [&>blockquote]:mb-8 [&>blockquote]:mt-0 [&>blockquote]:border-l-[3px] [&>blockquote]:border-foreground/20 [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-foreground/85 [&>div]:mb-8 [&>div:last-child]:mb-0 [&>figure]:my-10 [&>figure]:p-0 [&>h2]:mb-3 [&>h2]:mt-12 [&>h2]:text-[1.5rem] [&>h2]:font-bold [&>h2]:leading-snug [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2:first-child]:mt-0 [&>h3]:mb-2 [&>h3]:mt-10 [&>h3]:text-[1.25rem] [&>h3]:font-bold [&>h3]:leading-snug [&>h3]:text-foreground [&>h3:first-child]:mt-0 [&>ol]:mb-8 [&>ol]:mt-0 [&>ol]:list-decimal [&>ol]:pl-7 [&>ol]:marker:text-foreground/50 [&>p]:mx-0 [&>p]:mb-0 [&>p]:mt-0 [&>p]:p-0 [&>p:last-child]:mb-0 [&>p:empty]:mb-0 [&>p:empty]:hidden [&>p:has(>br:only-child)]:mb-0 [&>p:has(>br:only-child)]:mt-0 [&>p:has(>br:only-child)]:leading-none [&>ul]:mb-8 [&>ul]:mt-0 [&>ul]:list-disc [&>ul]:pl-7 [&>ul]:marker:text-foreground/50 [&_a]:text-primary [&_a]:underline-offset-[3px] hover:[&_a]:underline [&_b]:font-semibold [&_br+br]:hidden [&_code]:rounded [&_code]:bg-muted/80 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_em]:italic [&_img]:my-0 [&_li]:mb-2 [&_li]:pl-1 [&_strong]:font-semibold"
      >
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
          className: "my-10 flex w-full flex-wrap gap-0 md:flex-nowrap",
        });
      }
    }

    if (domNode instanceof Element && domNode.name === "img") {
      if (domNode.attribs?.src === getPostPreviewImageSrc(post)) return <></>;

      return (
        <Image
          width={1200}
          height={800}
          alt=""
          className="mx-auto h-auto w-full max-w-full max-h-[min(48vh,480px)] object-contain sm:max-h-[min(52vh,560px)]"
          sizes="(min-width: 680px) 680px, calc(100vw-2.5rem)"
          src={domNode.attribs.src}
        />
      );
    }
  },
});
