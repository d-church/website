"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { useEffect, useState } from "react";

import { Icons } from "../ui/icons";
import { Video } from "../video/video";

import {
  Accordion,
  AccordionContent,
  AccordionItem
} from "@/components/ui/accordion";
import { fetchProducts } from "@/api/fetch-products";
import { clientUrl } from "@/utils/clientUrl";

export function VideoBlock() {
  const t = useTranslations();

  const [mainVideo, setMainVideo] = useState<IProductsEntity>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts("MinistryLiveVideos");
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
      className="relative w-full overflow-hidden bg-cover bg-center pt-[40px] pb-[80px] md:pt-[60px] md:pb-[80px]"
      id="video"
    >
      <div
        className="absolute inset-0 z-[-1] bg-[url('/static/background-about-block-dark.jpg')] bg-cover bg-center blur-sm brightness-150 filter"
        style={{ transform: "scale(1.1)" }}
      ></div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <h1 className="font-roboto mt-[30px] mb-[10px] text-center text-[36px] font-thin tracking-[10px] uppercase text-white xl:mt-[50px] xl:mb-[0px]">
            {t("main-page.video-block.title")}
          </h1>

          <AccordionContent className="mt-1 flex h-full flex-col items-center pb-0 xl:mt-[34px] xl:px-[138px] 2xl:ml-[10px]">
            <div className="relative aspect-[16/9] w-full md:max-w-[600px] xl:min-w-[960px] 2xl:min-w-[1200px]">
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

            <Link
              href={clientUrl.youtube}
              target="_blank"
              className="mt-5 flex w-full md:max-w-[600px] xl:min-w-[960px] 2xl:min-w-[1200px] items-center justify-center space-x-5 rounded-[0.75rem] bg-graphite py-[14px] px-6 text-xl text-white xl:rounded-[1.25rem] xl:py-6"
            >
              <Icons.youtubeStrokeLine className="size-8 fill-white group-hover:fill-hover-blue xl:size-20 2xl:h-[4rem] 2xl:w-[6.25rem]" />
              <p className="text-sm font-medium text-white xl:text-2xl/[1.75rem]">
                {t("main-page.video-block.button-go-to-chanel")}
              </p>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
