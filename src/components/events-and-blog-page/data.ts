import type { ICRMImage } from "@type/crm-image.types";

interface ICRMEventPreview {
  image: ICRMImage;
  title: string;
  subtitle: string;
}
export const data: ICRMEventPreview[] = [
  {
    image: {
      size: "",
      filename: "",
      previewLink: "",
      downloadLink: "/static/video-thumbnails/video-thumbnail-0.webp",
    },
    title: "Celebrating thanks day",
    subtitle: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: "",
      downloadLink: "/static/video-thumbnails/video-thumbnail-1.webp",
    },
    title: "Celebrating some other thing",
    subtitle: "28.10.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: "",
      downloadLink: "/static/video-thumbnails/video-thumbnail-2.webp",
    },
    title: "Celebrating good day",
    subtitle: "30.11.2023",
  },
];
