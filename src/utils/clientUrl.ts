type TDomains = "dchurch.lviv.ua" | "localhost:3000";

const domainName: TDomains = "localhost:3000";

export const clientUrl = {
  jesus: ["", "jesus"].join("/"),
  about: ["", "about"].join("/"),
  contacts: ["", "contacts"].join("/"),
  ministry: ["", "ministry"].join("/"),
  video: "/#video",
  events: ["", "events-and-blog"].join("/"),
  'events-and-blog': ["", "events-and-blog"].join("/"), // Додайте цей рядок
  domain: ["", domainName].join(""),
  donate: () => ["//" + "donate" + "." + clientUrl.domain].join(""),
  donateTransfer: ["", "ministry"].join("/"),
  donateUA: (domainName: string) => `https://donate.${domainName}.com.ua/donation/ua`,
  donateUSA: (domainName: string) => `https://donate.${domainName}.com.ua/donation/usa`,
  instagram: "https://www.instagram.com/d.church.lviv?igsh=Z2MzNmRjY2V3MXNm",
  facebook: "https://www.facebook.com/d.church.lviv",
  youtube: "https://youtube.com/@LvivSpringofLife?si=VQvEUFAdMM7NUyws",
};