import { defineOneEntry } from "oneentry";
import { IFilterParams } from "oneentry/dist/products/productsInterfaces";

const OneEntryProjectLink = "https://sourceoflife.oneentry.cloud";
type TKeyType = "Ministry" | "Blogs" | "BlogsCarousel";

export const fetchProducts = (keyType: TKeyType = "Ministry") => {
  const { Products } = defineOneEntry(OneEntryProjectLink, {
    token: process.env.NEXT_PUBLIC_ONEENTRY_API_KEY,
  });
  let body: IFilterParams[];

  body = [
    {
      pageUrls: ["ministryhero", "ministrycards"],
      // @ts-ignore
      attributeMarker: null,
      conditionValue: null,
    },
  ];

  if (keyType === "BlogsCarousel") {
    body = [
      {
        pageUrls: ["blogcarusel"],
        // @ts-ignore
        attributeMarker: null,
        conditionValue: null,
      },
    ];
  }

  if (keyType === "Blogs") {
    body = [
      {
        pageUrls: ["blog"],
        // @ts-ignore
        attributeMarker: null,
        conditionValue: null,
      },
    ];
  }

  const products = Products.getProducts(body);

  return products;
};
