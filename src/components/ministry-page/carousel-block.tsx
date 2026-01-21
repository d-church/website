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

  // Track window width to apply correct scrolling behavior
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {carouselImages.length > 0 && (
        <>
          <div className="relative mx-auto w-full max-w-[795px] pointer-events-auto">
            <Carousel
              setApi={setApi}
              className="relative h-[160px]"
              opts={{ loop: false, skipSnaps: false, containScroll: "trimSnaps" }}
            >
              <CarouselContent className={cn(carouselImages.length < 3 && "justify-center")}>
                {carouselImages.map((carouselImage, index) => (
                  <CarouselItem key={index} className="basis-1/1 relative w-[245px] lg:basis-1/3">
                    {isCarouselItemsLoads[index] && <Loading className="absolute inset-0 h-full w-full" />}
                    <GalleryModalBlock
                      initialIndex={index}
                      carouselImages={carouselImages}
                      setOpenFirstModal={setOpen}
                    >
                      <div className="relative h-full w-full overflow-hidden pointer-events-auto">
                        <Image
                          width={245}
                          height={160}
                          src={carouselImage.downloadLink}
                          onLoadingComplete={() => onLoadingCompleteHandler(index)}
                          className={cn(
                            "h-[160px] w-full object-cover transition-opacity",
                            isCarouselItemsLoads[index] ? "opacity-0" : "opacity-100"
                          )}
                          alt="Gallery image"
                        />
                      </div>
                      {/* Click Area Limited to Image */}
                      <div className="absolute inset-0 pointer-events-none hover:pointer-events-auto hover:cursor-pointer hover:bg-white/15"></div>
                    </GalleryModalBlock>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Updated styles to always show on all screen sizes */}
              <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:-left-14" />
              <CarouselNext className="right-2 sm:right-4 md:right-6 lg:-right-14" />
            </Carousel>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-[10px] pt-[30px]">
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

      {/* Scrollable Text Content */}
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
        <div className="px-4" dangerouslySetInnerHTML={{ __html: textModal || "" }}></div>
      </div>
    </>
  );
}
