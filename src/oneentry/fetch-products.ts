import { defineOneEntry } from "oneentry";
import { IFilterParams } from "oneentry/dist/products/productsInterfaces";

const OneEntryProjectLink = "https://sourceoflife.oneentry.cloud";
type TKeyType = "Ministry" | "EventsAndBlog";

export const fetchProducts = (keyType: TKeyType = "Ministry") => {
  const { Products } = defineOneEntry(OneEntryProjectLink, {
    token: process.env.NEXT_PUBLIC_ONEENTRY_API_KEY,
  });

  let body: IFilterParams[] = [
    {
      pageUrls: ["ministryhero", "ministrycards"],
      // @ts-ignore
      attributeMarker: null,
      conditionValue: null,
    },
  ];

  if (keyType === "EventsAndBlog") {
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
