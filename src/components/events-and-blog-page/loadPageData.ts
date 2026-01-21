import { fetchPosts } from "@/api/fetch-posts";
import { Post } from "@/types/posts.types";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

function convertPostToCarouselItem(post: Post): Partial<IProductsEntity> {
  const imageUrl =
    post.files?.[0]?.url ||
    post.imageUrl ||
    post.images?.[0] ||
    post.previewImage ||
    "/static/preview-block-picture.webp";

  return {
    attributeValues: {
      title: {
        value: post.title,
      },
      photo: {
        value: {
          downloadLink: imageUrl,
        },
      },
    },
  } as Partial<IProductsEntity>;
}

export const loadEventsAndBlogPageData = async (locale: string = "en") => {
  try {
    const posts = await fetchPosts({ offset: 0, limit: 5 }, locale);
    const previewBlockCarouselItems = posts.map(convertPostToCarouselItem) as IProductsEntity[];

    return { previewBlockCarouselItems };
  } catch (error) {
    console.error("Error loading events and blog page data:", error);
    return { previewBlockCarouselItems: [] };
  }
};
