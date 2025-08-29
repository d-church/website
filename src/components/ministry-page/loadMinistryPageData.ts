import parse from "html-react-parser";

import { fetchProducts } from "@/oneentry/fetch-products";

export const loadMinistryPageData = async () => {
  const products = await fetchProducts();
  const ministryHero = products.find(
    (item) => item.attributeSetIdentifier === "MinistryHero"
  );
  const ministryCards = products.filter(
    (item) => item.attributeSetIdentifier !== "MinistryHero"
  );

  const previewBlockData = {
    imageSrc: ministryHero?.attributeValues.image?.value.downloadLink,
    title: ministryHero?.attributeValues.title.value,
    parsedText: parse(
      ministryHero?.attributeValues.description.value.htmlValue
    ),
  };

  return {
    previewBlockData,
    ministryCards,
  };
};
