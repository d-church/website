"use client";

import Image from "next/image";
import * as React from "react";

import { ICRMImage } from "@/types/crm-image.types";
import { Separator } from "../ui/separator";
import { GalleryModalBlock } from "./gallery-modal-block";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ICarouselBlockProps {
  textModal: string;
  carouselImages: ICRMImage[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CarouselBlock({
  textModal,
  carouselImages,
  setOpen,
}: ICarouselBlockProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      {carouselImages.length === 0 ? (
        <></>
      ) : (
        <>
          <Carousel
            setApi={setApi}
            className="relative mx-auto h-[160px] w-full max-w-[795px]"
          >
            <CarouselContent>
              {carouselImages.map((carouselImage, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 relative w-[245px] lg:basis-1/3"
                >
                  <GalleryModalBlock
                    initialIndex={index}
                    carouselImages={carouselImages}
                    setOpenFirstModal={setOpen}
                  >
                    <Image
                      width={245}
                      height={160}
                      src={carouselImage.downloadLink}
                      className="h-[160px] object-cover"
                      alt="Gallery image"
                    />
                    <div className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:transition-colors hover:cursor-pointer hover:after:bg-white/15"></div>
                  </GalleryModalBlock>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              color="gray"
              className="-left-[124px] hidden xl:block"
            />
            <CarouselNext
              color="gray"
              className="-right-[124px] hidden xl:block"
            />
          </Carousel>
          <div className="flex justify-center gap-[10px] pt-[30px] xl:hidden">
            {carouselImages.map((_, index) => (
              <Separator
                key={index}
                className={cn(
                  "w-[25px] sm:w-[40px]",
                  current === index + 1
                    ? "bg-graphite"
                    : "bg-graphite opacity-20"
                )}
              ></Separator>
            ))}
          </div>
        </>
      )}
      <div
        className="mx-auto mt-[20px] max-w-[1070px] text-center text-[1.25rem]/[1.875rem] font-medium max-xl:w-[90%] max-lg:pb-[50px] lg:mt-[50px]"
        dangerouslySetInnerHTML={{
          __html: textModal,
        }}
      ></div>
    </>
  );
}
