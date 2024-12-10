"use client";

import Fade from "embla-carousel-fade";
import Image from "next/image";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";

import Loading from "../common/loading";
import { Separator } from "../ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { fetchProducts } from "@/oneentry/fetch-products";

export function PreviewBlock() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [carouselItems, setCarouselItems] = useState<IProductsEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts("BlogsCarousel");
        setCarouselItems(response);
      } catch (error) {
        console.error(
          "Failed to fetch products in preview-block on events-and-blogs-page:",
          error
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.reInit({ skipSnaps: false, duration: 20 });

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  if (carouselItems.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className="lg:justify-baseline relative flex h-full items-center justify-center bg-slate-200 max-lg:max-h-[400px] lg:max-h-[600px]">
        <>
          <Carousel
            setApi={setApi}
            className="relative mx-auto h-full w-full self-start"
            plugins={[Fade()]}
          >
            <div className="absolute z-[1] h-full w-full bg-transparent max-xl:hidden"></div>
            <CarouselContent>
              {carouselItems.map((carouselItem, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 relative flex w-full flex-col after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:h-full after:w-full after:overflow-hidden after:bg-black/70 max-lg:h-[400px] lg:h-[600px]"
                >
                  <Image
                    fill
                    src={carouselItem.attributeValues.photo.value.downloadLink}
                    className="absolute object-cover"
                    alt="Gallery image"
                  />
                  <div className="pointer-events-none relative z-[2] mx-auto text-center text-white max-lg:mb-auto max-lg:w-[90%] max-lg:pt-[100px] lg:mt-auto lg:pb-[150px]">
                    <p className="mb-[34px] text-[2.5rem]/[3rem] font-medium max-lg:mb-[30px] max-lg:text-[1.875rem]/[2.25rem]">
                      {carouselItem.attributeValues.title.value}
                    </p>
                    {/* <div className="text-[2.5rem]/[3rem] font-medium max-lg:text-[1.375rem]/[1.6rem]">
                      {carouselItem.attributeValues.date.value.formattedValue
                        .split("-")
                        .join(".")}
                    </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {carouselItems.length > 1 ? (
              <>
                <CarouselPrevious
                  color="white"
                  className="left-[124px] top-[56%] z-[2] hidden xl:block"
                />
                <CarouselNext
                  color="white"
                  className="right-[124px] top-[56%] z-[2] hidden xl:block"
                />
              </>
            ) : (
              <></>
            )}
          </Carousel>
          {carouselItems.length > 1 ? (
            <div className="absolute mb-[50px] flex justify-center gap-[10px] self-end max-xl:mb-[30px] xl:mt-[30px]">
              {carouselItems.map((_, index) => (
                <Separator
                  key={index}
                  className={cn(
                    "w-[25px] sm:w-[40px]",
                    current === index + 1
                      ? "bg-white"
                      : "bg-white bg-opacity-40"
                  )}
                ></Separator>
              ))}
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    );
  }
}
