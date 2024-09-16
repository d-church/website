"use client";

import { useTranslations } from "next-intl";
import { FC, useState } from "react";

import { VideoTimer } from "../timer/video-timer";
import { Button } from "../ui/button";

interface IVideo {
  className?: string;
  endDate: Date;

}

export function Video({ className, endDate }: IVideo) {
  const t = useTranslations("main-page");
  const [isEnded, setIsEnded] = useState(false);
  return (
    <div className={`w-full md:max-w-[400px] xl:min-w-[800px] 2xl:min-w-[1070px] h-full ${className}`}>
      {!isEnded && (
        <div className="flex h-full w-full flex-col items-center justify-between space-y-3 rounded-3xl bg-[#232323] px-[47px] pb-[10px] pt-5 text-white xl:space-y-0 xl:px-[100px] xl:py-[90px] 2xl:px-[190px] 2xl:py-[90px]">
          <p className="text-sm font-medium uppercase xl:text-4xl 2xl:text-5xl">
            {t("video-block.start-stream")}
          </p>
          <VideoTimer endDate={endDate} setIsEnded={setIsEnded} />
          <Button className="group flex items-center space-x-[10px] rounded-3xl border border-white bg-transparent p-[10px]">
            <span className="size-4 rounded-full bg-white group-hover:bg-hover-blue"></span>
            <p className="text-base uppercase xl:text-xl">
              {t("video-block.button-watch")}
            </p>
          </Button>
        </div>
      )}
    </div>
  );
}
