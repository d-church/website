"use client";

import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Video } from "../video/video";

import {
  Accordion,
  AccordionContent,
  AccordionItem
} from "@/components/ui/accordion";
import { fetchProducts } from "@/oneentry/fetch-products";
import { clientUrl } from "@/utils/clientUrl";

export function VideoBlock() {
  const t = useTranslations();

  const [video, setVideos] = useState<IProductsEntity[]>([]);
  const [mainVideo, setMainVideo] = useState<IProductsEntity>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts("MinistryLiveVideos");
        setVideos(response.slice(0, 3));
        setMainVideo(response[response.length - 1]);
      } catch (error) {
        console.error("Failed to fetch products in blogs-block:", error);
      }
    };
    fetchData();
  }, []);
  const date = new Date();
  const mainVideoDate = new Date(
    mainVideo?.attributeValues.datewithtime.value.fullDate
  );

  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center pb-[160px] pl-[20px] pr-[20px] pt-[60px] md:pt-[80px] md:pb-[100px]"
      id="video"
    >
      <div
        className="absolute inset-0 z-[-1] bg-[url('/static/background-about-block-dark.jpg')] bg-cover bg-center blur-sm brightness-140 filter"
        style={{ transform: "scale(1.1)" }}
      ></div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          {/* <AccordionTrigger className="flex w-1/2 mt-[36px] justify-center relative before:content-[''] before:absolute before:h-[2px] before:bg-white before:top-0">

          </AccordionTrigger> */}
          <h2 className="flex justify-center mt-[30px] mb-[10px] text-[15px] xl:text-xl xl:mt-[50px] xl:mb-[0px] text-xl/[1.5rem] font-medium uppercase text-white">
            {t("main-page.video-block.title")}
          </h2>
          <AccordionContent className="mt-1 flex h-full flex-col pb-0 md:flex-row md:justify-center md:space-x-8 xl:mt-[34px] xl:px-[138px] 2xl:ml-[10px]">
            {/* instead of timer with livestream */}
            {/* <Video /> */}
            <div className="relative h-[260px] w-full md:h-[300px] md:max-w-[600px] xl:h-[520px] xl:min-w-[960px] 2xl:h-[700px] 2xl:min-w-[1200px]">
              <iframe
                className="h-full w-full grow rounded-[0.75rem] xl:rounded-[1.25rem]"
                src={mainVideo?.attributeValues.link.value}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {date < mainVideoDate && (
                <Video className="absolute left-0 top-0" endDate={mainVideoDate} />
              )}
            </div>
            {/* instead of timer with livestream */}
            <div className="mt-[10px] space-y-[20px] text-white md:space-y-5 xl:mt-0 2xl:max-w-[248px]">
              {video
                ?.sort((a, b) => {
                  const dateA = new Date(
                    a.attributeValues.date?.value?.fullDate
                  ).getTime();
                  const dateB = new Date(
                    b.attributeValues.date?.value?.fullDate
                  ).getTime();
                  return dateB - dateA;
                })
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full "
                  >
                    <Image
                      src={item.attributeValues.image.value.downloadLink}
                      alt="video-thumbnail"
                      fill
                      className="absolute left-0 top-0 -z-[1] size-[350px] rounded-[1rem] object-cover xl:size-[300px] xl:rounded-[1.25rem]"
                    />

                    <Button
                      className="group flex h-[100px] w-full items-center space-x-[30px] rounded-[1rem] bg-black/50 px-6 py-4 xl:flex-col xl:space-x-0 xl:rounded-[1.25rem] xl:h-[180px] xl:py-6"
                      asChild
                    >
                      <Link
                        href={item.attributeValues.link.value}
                        target="_blank"
                      >
                        <div className="flex items-center space-x-[30px] xl:flex-col xl:space-x-0">
                          <Icons.play className="size-2 group-hover:fill-hover-blue xl:size-auto" />
                          <p className="text-sm xl:mt-[5px] xl:text-2xl">
                            {item.attributeValues.text.value}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 xl:mt-[10px]">
                          <Calendar className="size-4 xl:size-auto" />
                          <p className="text-[12px] xl:text-xl">
                            {item.attributeValues.date.value.formattedValue}
                          </p>
                        </div>
                      </Link>
                    </Button>
                  </div>
                ))}

              <Link
                href={clientUrl.youtube}
                target="_blank"
                className="group flex items-center justify-start space-x-5 rounded-[0.75rem] bg-graphite py-[14px] pl-4 text-xl xl:justify-between xl:rounded-[1.25rem] xl:px-6 2xl:py-9"
              >
                <Icons.youtubeStrokeLine className="size-8 fill-white group-hover:fill-hover-blue xl:size-20 2xl:h-[4rem] 2xl:w-[6.25rem]" />
                <p className="text-sm font-medium xl:w-fit xl:text-2xl/[1.75rem]">
                  {t("main-page.video-block.button-go-to-chanel")}
                </p>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}