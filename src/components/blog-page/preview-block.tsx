import Image from "next/image";

import { Post } from "@/types/posts.types";
import { getPostPreviewImageSrc } from "./utils";

interface PreviewBlockProps {
  data: Post;
}

export async function PreviewBlock({ data: post }: PreviewBlockProps) {
  const title = post?.title || "";
  const imageUrl = getPostPreviewImageSrc(post);

  return (
    <article className="bg-background">
      <header className="mx-auto w-full max-w-[728px] px-5 pt-[calc(4rem+1.25rem)] pb-8 sm:px-6 md:pt-[calc(7rem+1.25rem)] md:pb-10">
        <h1 className="text-[2.125rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] sm:leading-[1.12] md:text-[2.75rem]">
          {title}
        </h1>
      </header>

      <figure className="m-0 flex w-full justify-center bg-muted/30 py-1 sm:py-2">
        <Image
          src={imageUrl}
          width={1600}
          height={900}
          alt=""
          className="h-auto w-full max-h-[min(62vh,680px)] max-w-full object-contain"
          sizes="100vw"
          priority
        />
      </figure>
    </article>
  );
}
