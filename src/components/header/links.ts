import { clientUrl } from "@/utils/clientUrl";

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
    href: clientUrl.jesus,
    key: "jesus",
  },
  {
    href: clientUrl.about,
    key: "about",
  },
  {
    href: clientUrl.ministry,
    key: "ministry",
  },
  {
    href: clientUrl.video,
    key: "video-and-stream",
  },
  {
    href: clientUrl.contacts,
    key: "contact",
  },
];

export const footersLink: TFootersLink = {
  firstBlock: [
    {
      href: clientUrl.jesus,
      key: "jesus",
    },
    {
      href: clientUrl.about,
      key: "about",
    },
    {
      href: clientUrl.ministry,
      key: "ministry",
    },
  ],
  secondBlock: [
    {
      href: clientUrl.video,
      key: "video-and-stream",
    },
    {
      href: clientUrl.event,
      key: "event-and-blog",
    },
    {
      href: clientUrl.contacts,
      key: "contact",
    },
  ],
};
