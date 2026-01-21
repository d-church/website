"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import Loading from "@/components/common/loading";
import { Separator } from "@/components/ui/separator";
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

export function CarouselBlock({
  textModal,
  carouselImages,
  setOpen,
}: {
  textModal: { uk: string; en: string };
  carouselImages: string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const locale = useLocale() as "uk" | "en";
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
          <div className="pointer-events-auto relative mx-auto w-full max-w-[795px]">
            <Carousel
              setApi={setApi}
              className="relative h-[160px]"
              opts={{
                loop: false,
                skipSnaps: false,
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent
                className={cn(carouselImages.length < 3 && "justify-center")}
              >
                {carouselImages.map((carouselImage, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/1 relative w-[245px] lg:basis-1/3"
                  >
                    {isCarouselItemsLoads[index] && (
                      <Loading className="absolute inset-0 h-full w-full" />
                    )}
                    <GalleryModalBlock
                      initialIndex={index}
                      carouselImages={carouselImages}
                      setOpenFirstModal={setOpen}
                    >
                      <div className="pointer-events-auto relative h-full w-full overflow-hidden">
                        <Image
                          width={245}
                          height={160}
                          src={carouselImage}
                          onLoadingComplete={() =>
                            onLoadingCompleteHandler(index)
                          }
                          className={cn(
                            "h-[160px] w-full object-cover transition-opacity",
                            isCarouselItemsLoads[index]
                              ? "opacity-0"
                              : "opacity-100"
                          )}
                          alt="Gallery image"
                        />
                      </div>
                      {/* Click Area Limited to Image */}
                      <div className="pointer-events-none absolute inset-0 hover:pointer-events-auto hover:cursor-pointer hover:bg-white/15"></div>
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
                  current === index + 1
                    ? "bg-graphite"
                    : "bg-graphite opacity-20"
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
          "custom-scrollbar max-xl:w-[90%] max-lg:pb-[50px] lg:mt-[50px] lg:pr-[20px]",
          {
            "overflow-auto": windowWidth !== null && windowWidth < 600,
            "max-h-[300px] overflow-auto":
              windowWidth !== null && windowWidth >= 600,
          }
        )}
      >
        <div
          className="px-4"
          dangerouslySetInnerHTML={{ __html: textModal[locale] || "" }}
        ></div>
      </div>
    </>
  );
}
