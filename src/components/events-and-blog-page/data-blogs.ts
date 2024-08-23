import type { ICRMImage } from "@type/crm-image.types";

interface IBlog {
  aboutAuthor: {
    author: string;
    socials: {
      instagramLink: string;
      facebookLink: string;
    };
  };
  firstText: string;
  firstImagesRow: {
    firstScr?: string;
    secondScr?: string;
  };
  secondText: string;
  secondImagesRow: {
    firstScr?: string;
    secondScr?: string;
  };
}

interface ICRMBlog {
  image: ICRMImage;
  title: string;
  date: string;
}
const path = "/static/blogs/";
export const dataBlogs: ICRMBlog[] = [
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-00.webp",
      downloadLink: path + "blog-picture-00.webp",
    },
    title: "Різдвяна програма для дитячого служіння 1",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-01.webp",
      downloadLink: path + "blog-picture-01.webp",
    },
    title: "Різдвяна програма для дитячого служіння 2",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-02.webp",
      downloadLink: path + "blog-picture-02.webp",
    },
    title: "Різдвяна програма для дитячого служіння 3",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-03.webp",
      downloadLink: path + "blog-picture-03.webp",
    },
    title: "Різдвяна програма для дитячого служіння 4",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-04.webp",
      downloadLink: path + "blog-picture-04.webp",
    },
    title: "Різдвяна програма для дитячого служіння 5",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-05.webp",
      downloadLink: path + "blog-picture-05.webp",
    },
    title: "Різдвяна програма для дитячого служіння 6",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-00.webp",
      downloadLink: path + "blog-picture-00.webp",
    },
    title: "Різдвяна програма для дитячого служіння 7",
    date: "27.09.2023",
  },
  {
    image: {
      size: "",
      filename: "",
      previewLink: path + "blog-picture-01.webp",
      downloadLink: path + "blog-picture-01.webp",
    },
    title: "Різдвяна програма для дитячого служіння 8",
    date: "27.09.2023",
  },
];
