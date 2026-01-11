import Image from "next/image";
import { Post } from "@/types/posts.types";

interface PreviewBlockProps {
  data: Post;
}

export async function PreviewBlock({ data: post }: PreviewBlockProps) {
  const title = post?.title || "";
  const imageUrl =
    post?.files?.[0]?.url ||
    post?.imageUrl ||
    post?.images?.[0] ||
    post?.previewImage ||
    "/static/preview-block-picture.webp";

  return (
    <div>
      <div className="pointer-events-none relative bg-slate-200">
        <div className="relative flex aspect-[16/9] max-h-[1200px] w-full items-center justify-center mt-[4rem] lg:mt-[7rem]">
          <Image
            fill
            src={imageUrl}
            className="object-cover"
            alt="Post preview image"
          />
        </div>
      </div>

      <div className="relative z-[2] w-[100%] space-y-4 text-center pt-16">
        <p className="text-[2.5rem]/[3rem] font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}