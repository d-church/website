"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Icons } from "../ui/icons";

import { fetchYouTubeLive, YouTubeVideo } from "@/api/fetch-youtube";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { clientUrl } from "@/utils/clientUrl";

export function VideoBlock() {
  const t = useTranslations();

  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveVideo = await fetchYouTubeLive();
        setVideo(liveVideo);
      } catch (error) {
        console.error("Failed to fetch YouTube data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getEmbedUrl = (): string | null => {
    if (video?.youtubeId) {
      return `https://www.youtube.com/embed/${video.youtubeId}`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl();

  if (isLoading) {
    return (
      <div
        className="relative w-full overflow-hidden bg-cover bg-center pb-[80px] pt-[40px] md:pb-[80px] md:pt-[60px]"
        id="video"
      >
        <div
          className="absolute inset-0 z-[-1] bg-[url('/static/background-about-block-dark.jpg')] bg-cover bg-center blur-sm brightness-150 filter"
          style={{ transform: "scale(1.1)" }}
        ></div>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-xl text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!embedUrl) {
    return (
      <div
        className="relative w-full overflow-hidden bg-cover bg-center pb-[80px] pt-[40px] md:pb-[80px] md:pt-[60px]"
        id="video"
      >
        <div
          className="absolute inset-0 z-[-1] bg-[url('/static/background-about-block-dark.jpg')] bg-cover bg-center blur-sm brightness-150 filter"
          style={{ transform: "scale(1.1)" }}
        ></div>
        <h1 className="font-roboto mb-[10px] mt-[30px] text-center text-[36px] font-thin uppercase tracking-[10px] text-white xl:mb-[0px] xl:mt-[50px]">
          {t("main-page.video-block.title")}
        </h1>
        <div className="flex flex-col items-center justify-center py-10">
          <Link
            href={clientUrl.youtube}
            target="_blank"
            className="mt-5 flex items-center justify-center space-x-5 rounded-[0.75rem] bg-graphite px-6 py-[14px] text-xl text-white xl:rounded-[1.25rem] xl:py-6"
          >
            <Icons.youtubeStrokeLine className="size-8 fill-white group-hover:fill-hover-blue xl:size-20 2xl:h-[4rem] 2xl:w-[6.25rem]" />
            <p className="text-sm font-medium text-white xl:text-2xl/[1.75rem]">
              {t("main-page.video-block.button-go-to-chanel")}
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center pb-[80px] pt-[40px] md:pb-[80px] md:pt-[60px]"
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
          <h1 className="font-roboto mb-[10px] mt-[30px] text-center text-[36px] font-thin uppercase tracking-[10px] text-white xl:mb-[0px] xl:mt-[50px]">
            {t("main-page.video-block.title")}
          </h1>

          <AccordionContent className="mt-1 flex h-full flex-col items-center pb-0 xl:mt-[34px] xl:px-[138px] 2xl:ml-[10px]">
            <div className="relative aspect-[16/9] w-full md:max-w-[600px] xl:min-w-[960px] 2xl:min-w-[1200px]">
              <iframe
                className="h-full w-full grow rounded-[0.75rem] xl:rounded-[1.25rem]"
                src={embedUrl}
                title={video?.title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <Link
              href={clientUrl.youtube}
              target="_blank"
              className="mt-5 flex w-full items-center justify-center space-x-5 rounded-[0.75rem] bg-graphite px-6 py-[14px] text-xl text-white md:max-w-[600px] xl:min-w-[960px] xl:rounded-[1.25rem] xl:py-6 2xl:min-w-[1200px]"
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
