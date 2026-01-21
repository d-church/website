import { fetchProducts } from "@/oneentry/fetch-products";

export const loadEventsAndBlogPageData = async () => {
  const previewBlockCarouselItems = await fetchProducts("BlogsCarousel");

  return { previewBlockCarouselItems };
};
