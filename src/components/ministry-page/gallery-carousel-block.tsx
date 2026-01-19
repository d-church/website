"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Separator } from "../ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MinistryImage } from "@/data/ministry";
import { cn } from "@/lib/utils";

interface IGalleryBlockProps {
  carouselImages: MinistryImage[];
  initialIndex: number;
}

export function GalleryCarouselBlock({
  carouselImages,
  initialIndex,
}: IGalleryBlockProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(initialIndex + 1);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(initialIndex, true);

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, initialIndex]);
  return (
    <>
      <Carousel
        setApi={setApi}
        className="relative mx-auto my-auto w-full max-xl:max-w-[90%] xl:max-w-[1070px]"
      >
        <CarouselContent>
          {carouselImages.map((carouselImage, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                width={1070}
                height={696}
                src={carouselImage.downloadLink}
                className="h-[210px] object-cover min-[400px]:h-[300px] min-[500px]:h-[400px] sm:h-[600px] xl:h-[696px]"
                alt="Gallery image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          color="white"
          className="-left-[65px] hidden 2xl:block"
        />
        <CarouselNext
          color="white"
          className="-right-[75px] hidden 2xl:block"
        />
      </Carousel>
      <div className="flex justify-center gap-[10px] max-xl:mb-[30px] xl:mt-[30px]">
        {carouselImages.map((_, index) => (
          <Separator
            key={index}
            className={cn(
              "w-[25px] sm:w-[40px]",
              current === index + 1 ? "bg-white" : "bg-white bg-opacity-40"
            )}
          ></Separator>
        ))}
      </div>
    </>
  );
}
