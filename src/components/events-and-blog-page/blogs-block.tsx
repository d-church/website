import { Post } from "@/types/posts.types";
import { SkeletonCard } from "../common/skeleton-loader";
import { BlogBlock } from "./blog-block";

type BlogsBlockProps = {
  posts: Post[];
};

export function BlogsBlock({ posts }: BlogsBlockProps) {
  if (posts.length === 0) {
    return <SkeletonCard />;
  }

  return (
    <div className="container grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px]  max-lg:pb-[0px] max-lg:pt-[30px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] md:gap-y-[50px] md:py-[50px] xl:grid-cols-[repeat(3,_minmax(0,_320px))]  2xl:grid-cols-[repeat(3,_minmax(0,_520px))]">
      {posts.map((post) => {
        const imageUrl =
          post.files?.[0]?.url ||
          post.imageUrl ||
          post.images?.[0] ||
          post.previewImage ||
          "/static/preview-block-picture.webp";

        const dateSource = post.publishDate ?? post.createdAt;
        const formattedDate = dateSource
          ? new Date(dateSource)
              .toISOString()
              .split("T")[0]
              .split("-")
              .join(".")
          : "";

        return (
          <BlogBlock
            key={post.id}
            title={post.title}
            date={formattedDate}
            id={post.id}
            imgSrc={imageUrl}
          />
        );
      })}
    </div>
  );
}
