type THeadersLink = {
  href: string;
  key: "jesus" | "about" | "ministry" | "video-and-stream" | "contact";
};

interface TFootersLink {
  firstBlock: {
    href: string;
    key: "jesus" | "about" | "ministry";
  }[];
  secondBlock: {
    href: string;
    key: "video-and-stream" | "contact" | "event-and-blog";
  }[];
}

export const headersLinks: THeadersLink[] = [
  {
    href: "#jesus",
    key: "jesus",
  },
  {
    href: "#about",
    key: "about",
  },
  {
    href: "#ministry",
    key: "ministry",
  },
  {
    href: "#video-and-stream",
    key: "video-and-stream",
  },
  {
    href: "#contact",
    key: "contact",
  },
];

export const footersLink: TFootersLink = {
  firstBlock: [
    {
      href: "#jesus",
      key: "jesus",
    },
    {
      href: "#about",
      key: "about",
    },
    {
      href: "#ministry",
      key: "ministry",
    },
  ],
  secondBlock: [
    {
      href: "#video-and-stream",
      key: "video-and-stream",
    },
    {
      href: "#event-and-blog",
      key: "event-and-blog",
    },
    {
      href: "#contact",
      key: "contact",
    },
  ],
};
