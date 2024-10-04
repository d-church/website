"use client"
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { MinistryTypeBlock } from "./ministry-type-block";

import { fetchProducts } from "@/oneentry/fetch-products";
import { useEffect, useState } from "react";

export function MinistryTypesBlock() {
  const [cards, setCards] = useState<IProductsEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setCards(response);
      } catch (error) {
        console.error("Failed to fetch products in blogs-block:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[50px] lg:py-[100px] max-sm:grid-cols-1 xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {cards.map((card, i) => {
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
