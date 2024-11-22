"use client"
import parse from "html-react-parser";
import Image from "next/image";

import { fetchProducts } from "@/oneentry/fetch-products";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";

export function PreviewBlock() {
  const [ministryCards, setMinistryCards] = useState<IProductsEntity[]>([]);
  const [ministryHero, setMinistryHero] = useState<IProductsEntity>();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      products.forEach(el => {
        if (el.attributeSetIdentifier === "MinistryHero") {
          setMinistryHero(el);
        }
      });
      setMinistryCards(products);
    };
    getProducts();
  }, []);

  if (ministryCards.length === 0) return <div>Loading...</div>;

  const imageSrc = ministryHero?.attributeValues.image?.value.downloadLink;
  const title = ministryHero?.attributeValues.title.value;
  const parsedText = parse(
    ministryHero?.attributeValues.description.value.htmlValue
  );
  return (
    <div className="lg:justify-baseline relative flex h-full min-h-screen items-center justify-center bg-slate-200">
      <>
        <div className="absolute h-full w-full after:absolute after:h-full after:w-full after:overflow-hidden after:bg-black/70">
          <Image
            className="object-cover"
            src={imageSrc}
            alt="The Preview an Image of the page"
            fill
          />
        </div>
        <div className="z-[1] max-w-[1077px] text-center text-white  max-lg:max-w-[90%] max-sm:py-[75px]">
          <p className="mb-[30px] text-[1.875rem]/[2.28rem] font-bold uppercase max-lg:mb-[22px]">
            {title}
          </p>
          <div className="text-[1.25rem]/[1.875rem] font-medium max-lg:text-[1.125rem]/[1.875rem]">
            {parsedText}
          </div>
        </div>
      </>
    </div>
  );
}
