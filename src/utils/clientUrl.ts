import type { TClientUrl } from "@/types/client-url.types";

export const clientUrl: TClientUrl = {
  jesus: ["", "jesus"].join("/"),
  church: ["", "church"].join("/"),
  contacts: ["", "contacts"].join("/"),
  ministry: ["", "ministry"].join("/"),
  video: "/#video",
  event: ["", "event"].join("/"),
  // donate: (domainName) => `https://donate.${domainName}.com.ua/ministries`,
  donate: (domainName) => ["", "donate"].join("/"),
  donateTransfer: ["", "donate", "ministry"].join("/"),
  donateUA: (domainName) => `https://donate.${domainName}.com.ua/donation/ua`,
  donateUSA: (domainName) => `https://donate.${domainName}.com.ua/donation/usa`,
  instagram: "https://www.instagram.com/d.church.lviv?igsh=Z2MzNmRjY2V3MXNm",
  facebook: "https://www.facebook.com/d.church.lviv",
  youtube: "https://youtube.com/@LvivSpringofLife?si=VQvEUFAdMM7NUyws",
};
