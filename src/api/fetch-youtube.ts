const getApiUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not set");
  }
  return apiUrl;
};

const API_URL = getApiUrl();

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  duration: string;
  viewCount: number;
  likeCount: number;
  videoType: "LIVE" | "UPCOMING" | "VIDEO";
  isLive: boolean;
  scheduledAt?: string;
  privacyStatus: string;
  channelId: string;
  channelTitle: string;
  createdAt: string;
  updatedAt: string;
}

export async function fetchYouTubeLive(): Promise<YouTubeVideo | null> {
  const url = `${API_URL}/youtube/live`;
  console.log("[fetchYouTubeLive] Fetching from:", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch YouTube live: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    // API returns array, get first element
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    return null;
  } catch (error) {
    console.error("Error fetching YouTube live:", error);
    return null;
  }
}

export async function fetchYouTubeVideos(
  params: {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  } = {}
): Promise<YouTubeVideo[]> {
  const {
    page = 1,
    limit = 10,
    sortBy = "publishedAt",
    sortOrder = "desc",
  } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sortBy,
    sortOrder,
  });

  const url = `${API_URL}/youtube/videos?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch YouTube videos: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : data.videos || data.data || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

export async function fetchYouTubeUpcoming(): Promise<YouTubeVideo | null> {
  const url = `${API_URL}/youtube/upcoming`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch YouTube upcoming: ${response.status} ${response.statusText}`
      );
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching YouTube upcoming:", error);
    return null;
  }
}
