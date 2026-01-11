import { FetchPostsParams, Post } from "@/types/posts.types";

const getApiUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not set");
  }
  return apiUrl;
};

const API_URL = getApiUrl();
const REVALIDATE_SECONDS = 300;

export async function fetchPosts(
  paginationParams: FetchPostsParams = {},
  locale?: string
): Promise<Post[]> {
  const { offset = 0, limit = 30 } = paginationParams;

  const page = limit > 0 ? Math.floor(offset / limit) + 1 : 1;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const url = `${API_URL}/posts?${queryParams.toString()}`;

  try {
    const isServer = typeof window === "undefined";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...(isServer
        ? { next: { revalidate: REVALIDATE_SECONDS } }
        : { cache: "no-store" }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch posts: ${response.status} ${response.statusText}`, {
        url,
        errorText,
      });
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const responseData = await response.json();
    return Array.isArray(responseData)
      ? responseData
      : (responseData.data || responseData.posts || []);
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPostById(
  postId: string,
  locale: string = "en"
): Promise<Post | null> {
  if (!postId || postId === "undefined" || postId === "null") {
    console.error("Invalid post id:", postId);
    return null;
  }

  try {
    const url = `${API_URL}/posts/${postId}`;
    const isServer = typeof window === "undefined";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...(isServer
        ? { next: { revalidate: REVALIDATE_SECONDS } }
        : { cache: "no-store" }),
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      const errorText = await response.text();
      console.error(`Failed to fetch post: ${response.status} ${response.statusText}`, {
        url,
        errorText,
      });
      throw new Error(`Failed to fetch post: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
}
