import { MinistryTypeBlock } from "./ministry-type-block";

import { fetchProducts } from "@/oneentry/fetch-products";

export async function MinistryTypesBlock() {
  const ministryCards = await fetchProducts();
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[100px] max-sm:grid-cols-1 xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {ministryCards.map((card, i) => {
        if (i !== 0) {
          return (
            <MinistryTypeBlock
              key={`${card.attributeValues.title}_${i}`}
              title={card.attributeValues.title.value}
              subtitle={card.attributeValues.subtitle.value.htmlValue}
              textModal={card.attributeValues.description.value.htmlValue}
              src={card.attributeValues.previevImage.value.downloadLink}
              carouselImages={card.attributeValues.imgs.value}
            />
          );
        }
      })}
    </div>
  );
}
