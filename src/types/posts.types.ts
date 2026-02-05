export interface PostFile {
  id: string;
  url: string;
  path: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostAuthor {
  id: string;
  first_name: string;
  last_name: string;
  photo: string | null;
}

export interface Post {
  id: string;
  authorId: string;
  html: string;
  title: string;
  publishDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  langCode?: string;
  editorMode?: string;
  isPublished?: boolean;
  imageUrl?: string;
  images?: string[];
  previewImage?: string;
  files?: PostFile[];
  author?: PostAuthor;
  description?: string;
  likesCount?: number;
  commentsCount?: number;
  isLiked?: boolean;
  slugs?: string[];
}

export interface PostsResponse {
  data: Post[];
  total?: number;
  offset?: number;
  limit?: number;
}

export interface FetchPostsParams {
  offset?: number;
  limit?: number;
  langCode?: string;
}
