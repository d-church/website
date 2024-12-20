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
    <div className="lg:justify-baseline relative flex h-full min-h-[50vh] max-h-[700px] items-center justify-center bg-slate-200">
      <>
        <div className="absolute h-full w-full after:absolute after:h-full after:w-full after:overflow-hidden after:bg-black/70">
          <Image
            className="object-cover"
            src={imageSrc}
            alt="The Preview an Image of the page"
            fill
          />
        </div>
        <div className="z-[1] max-w-[1077px] sm:pt-[120px] xl:pt-[210px] md:pt-[140px] mt-[30px] sm:mt-[0px] md:mt-[0px] xl:mt-[0px] text-center text-white  max-lg:max-w-[90%] max-sm:py-[75px]">
          <p className="mb-[30px] font-roboto text-[32px] font-bold font-thin uppercase tracking-[5px] text-white sm:text-[58px] sm:tracking-[15px] lg:text-[78.4px] lg:tracking-[28px]">
            {title}
          </p>
          <div className="font-montserrat sm:pb-[100px] md:pb-[130px] pb-[0px] mx-auto mt-4 max-w-[90%] text-[12px] leading-[1.6] text-white sm:mt-6 sm:max-w-[980px] sm:text-[18px] lg:text-[20px]">
            {parsedText}
          </div>
        </div>
      </>
    </div>
  );
}
