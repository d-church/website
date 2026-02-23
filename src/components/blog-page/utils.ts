import { Post } from "@/types/posts.types";

export const getPostPreviewImageSrc = (post: Post) =>
  post?.files?.[0]?.url ||
  post?.imageUrl ||
  post?.images?.[0] ||
  post?.previewImage ||
  "/static/preview-block-picture.webp";
