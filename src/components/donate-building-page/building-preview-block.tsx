"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// @ts-ignore
import videoBackground from "./video-background.mp4";

export function BuildingPreviewBlock() {
  const t = useTranslations("donate-building-page.preview-block");

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[800px] flex-col items-center justify-center mb-[50px] xl:min-h-[900px]"
      )}
    >
      <div className="absolute h-full w-full overflow-hidden after:absolute after:h-full after:w-full after:bg-black/70">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute left-0 top-0 min-h-full min-w-full object-cover"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 mb-[60px] mt-[50px] px-4 lg:mb-[100px] lg:mt-[150px] lg:px-0">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] xl:text-5xl">
            {t("title")}
          </h1>
          <p className="mb-8 text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-2xl">
            {t("subtitle")}
          </p>

          <div className="max-w-3xl space-y-6 px-4 text-white lg:px-0">
            <div>
              <h2 className="mb-4 text-2xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-3xl">
                {t("changes-title")}
              </h2>
              <ul className="space-y-3 text-left text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">
                <li>• {t("changes.area")}</li>
                <li>• {t("changes.rooms")}</li>
                <li>• {t("changes.hall")}</li>
                <li>• {t("changes.places")}</li>
                <li>• {t("changes.renovation")}</li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-2xl">
                {t("together")}
              </p>
              <p className="text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">{t("support")}</p>
              <p className="mt-2 text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">
                {t("donate")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
