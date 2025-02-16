"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ICRMImage } from "@/types/crm-image.types";
import Loading from "../common/loading";
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isCarouselItemsLoads, setIsCarouselItemsLoads] = useState(
    Array(carouselImages.length).fill(true)
  );
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  function onLoadingCompleteHandler(index: number) {
    setIsCarouselItemsLoads((prev) =>
      prev.map((state, i) => (i === index ? false : state))
    );
  }

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {carouselImages.length > 0 && (
        <>
          <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <Carousel
              setApi={setApi}
              className="relative h-[300px]"
              opts={{ loop: false, skipSnaps: false, containScroll: "trimSnaps" }}
            >
              <CarouselContent className="justify-center">
                {carouselImages.map((carouselImage, index) => (
                  <CarouselItem 
                    key={index} 
                    className="relative w-[300px] sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                  >
                    {isCarouselItemsLoads[index] && <Loading className="absolute inset-0 h-full w-full" />}
                    <GalleryModalBlock
                      initialIndex={index}
                      carouselImages={carouselImages}
                      setOpenFirstModal={setOpen}
                    >
                      <div className="relative h-full w-full overflow-hidden pointer-events-auto">
                        <Image
                          width={300}
                          height={300}
                          src={carouselImage.downloadLink}
                          onLoadingComplete={() => onLoadingCompleteHandler(index)}
                          className={cn(
                            "h-[300px] w-[300px] object-cover transition-opacity",
                            isCarouselItemsLoads[index] ? "opacity-0" : "opacity-100"
                          )}
                          alt="Gallery image"
                        />
                      </div>
                      <div className="absolute inset-0 pointer-events-none hover:pointer-events-auto hover:cursor-pointer hover:bg-white/15"></div>
                    </GalleryModalBlock>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 block" />
              <CarouselNext className="right-4 block" />
            </Carousel>
          </div>

          <div className="flex justify-center gap-[10px] pt-[20px]">
            {carouselImages.map((_, index) => (
              <Separator
                key={index}
                className={cn(
                  "w-[25px] sm:w-[40px]",
                  current === index + 1 ? "bg-graphite" : "bg-graphite opacity-20"
                )}
              />
            ))}
          </div>
        </>
      )}

      <div
        className={cn(
          "mx-auto mt-[20px] max-w-[1070px] text-center text-lg font-medium",
          "max-xl:w-[90%] max-lg:pb-[50px] lg:mt-[50px] lg:pr-[20px] custom-scrollbar",
          {
            "overflow-auto": windowWidth !== null && windowWidth < 600,
            "max-h-[300px] overflow-auto": windowWidth !== null && windowWidth >= 600,
          }
        )}
      >
        <div className="px-4" dangerouslySetInnerHTML={{ __html: textModal }}></div>
      </div>
    </>
  );
}
