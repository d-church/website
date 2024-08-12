import { defineOneEntry } from "oneentry";
import { IFilterParams } from "oneentry/dist/products/productsInterfaces";

const OneEntryProjectLink = "https://sourceoflife.oneentry.cloud";

export const fetchProducts = () => {
  const { Products } = defineOneEntry(OneEntryProjectLink, {
    token: process.env.NEXT_PUBLIC_NEENTRY_API_KEY,
  });

  const body: IFilterParams[] = [
    {
      pageUrls: ["ministryhero", "ministrycards"],
      // @ts-ignore
      attributeMarker: null,
      conditionValue: null,
    },
  ];
  const products = Products.getProducts(body);

  return products;
};
