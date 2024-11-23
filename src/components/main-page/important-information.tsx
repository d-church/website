"use client"
import { useTranslations } from "next-intl";

import { fetchProducts } from "@/oneentry/fetch-products";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";



export function ImportantInformationBlock() {
  const t = useTranslations("main-page");
  const [cards, setCards] = useState<IProductsEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts('Info');
        setCards(response);
      } catch (error) {
        console.error("Failed to fetch products in blogs-block:", error);
      }
    };
    fetchData();
  }, []);

  const formateDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
    const result = date.toLocaleDateString('uk-UA', options);

    return result
  }

  return (
    <div className="container">
      <Separator className="mt-[50px] hidden bg-graphite xl:mb-[68px] xl:mt-[120px] xl:block" />
      <Accordion
        type="single"
        collapsible
        className="w-full pb-[72px] lg:pb-7 xl:pb-0"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="mt-[50px] flex w-1/2 justify-center py-0 xl:mt-0">
            <h2 className="mt-[18px] text-xl/[1.5rem] font-bold uppercase text-graphite xl:mt-0">
              {t("important-information.title")}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="mt-[30px] flex flex-col justify-between space-y-[30px] pb-0 lg:flex-row lg:space-x-[40px] lg:space-y-0 xl:mt-[50px]">
            {cards?.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer space-y-[36px] rounded-[20px] border border-[#8A8A8A] px-[22px] pb-[28px] pt-[20px] hover:bg-[#E8E8E8] xl:space-y-[60px] xl:px-[47px] xl:pb-[38px] xl:pt-[30px]"
              >
                <p className="text-center text-xl/[1.5rem] font-medium text-[#8A8A8A]">
                  {item.attributeValues.title.value}
                </p>
                <div className="flex justify-between xl:justify-around">
                  <div className="flex items-center space-x-[5px]">
                    <Icons.calendar />
                    <p className="text-xl/[1.5rem] font-bold text-[#8A8A8A]">
                      {formateDate(item.attributeValues.date.value.fullDate)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-[5px]">
                    <Icons.clock />
                    <p className="text-xl/[1.5rem] font-bold text-[#8A8A8A]">
                      {item.attributeValues.time.value.formattedValue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
