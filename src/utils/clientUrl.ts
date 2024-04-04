import type { TClientUrl } from "@/types/client-url.types";

export const clientUrl: TClientUrl = {
  jesus: ["", "jesus"].join("/"),
  about: ["", "about"].join("/"),
  contacts: ["", "contacts"].join("/"),
  ministry: ["", "ministry"].join("/"),
  video: "#video",
  donate: (domainName) => `https://donate.${domainName}.com.ua/ministries`,
  instagram: "https://www.instagram.com/d.church.lviv?igsh=Z2MzNmRjY2V3MXNm",
  facebook: "https://www.facebook.com/d.church.lviv",
  youtube: "https://youtube.com/@LvivSpringofLife?si=VQvEUFAdMM7NUyws",
};
