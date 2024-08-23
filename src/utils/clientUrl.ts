import type { TClientUrl } from "@/types/client-url.types";

type TDomains = "dchurch.lviv.ua" | "localhost:3000";

const domainName: TDomains = "dchurch.lviv.ua";
// const domainName: TDomains = "localhost:3000";

export const clientUrl: TClientUrl = {
  jesus: ["", "jesus"].join("/"),
  about: ["", "about"].join("/"),
  contacts: ["", "contacts"].join("/"),
  ministry: ["", "ministry"].join("/"),
  video: "/#video",
  events: ["", "events-and-blog"].join("/"),
  // donate: (domainName) => `https://donate.${domainName}.com.ua/ministries`,
  domain: ["", domainName].join(""),
  donate: () => ["//" + "donate" + "." + clientUrl.domain].join(""),
  donateTransfer: ["", "ministry"].join("/"),
  donateUA: (domainName) => `https://donate.${domainName}.com.ua/donation/ua`,
  donateUSA: (domainName) => `https://donate.${domainName}.com.ua/donation/usa`,
  instagram: "https://www.instagram.com/d.church.lviv?igsh=Z2MzNmRjY2V3MXNm",
  facebook: "https://www.facebook.com/d.church.lviv",
  youtube: "https://youtube.com/@LvivSpringofLife?si=VQvEUFAdMM7NUyws",
};
