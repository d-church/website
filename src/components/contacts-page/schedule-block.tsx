"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

import { clientUrl } from "@/utils/clientUrl";

export function ScheduleBlock() {
  const t = useTranslations("contacts-page");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const cords = "49.85353036071642, 24.02772840908155";
    if (navigator.userAgent.match("/iPhone|iPad|iPod/i")) {
      setUrl(`http://maps.apple.com/?daddr=${cords}`);
    } else {
      setUrl(`https://www.google.com/maps/dir/?api=1&destination=${cords}`);
    }
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-8 pb-12 pt-8 text-center">
      <p className="text-2xl font-bold">{t("schedule.header")}</p>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
        {/* Morning Service */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-4 w-[240px] shadow-md">
          <p className="text-xl font-bold">{t("schedule.morning.time")}</p>
          <p className="text-sm text-gray-500">{t("schedule.morning.text")}</p>
        </div>
        {/* Day Service */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-4 w-[240px] shadow-md">
          <p className="text-xl font-bold">{t("schedule.day.time")}</p>
          <p className="text-sm text-gray-500">{t("schedule.day.text")}</p>
        </div>
        {/* Evening Service */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-4 w-[240px] shadow-md">
          <p className="text-xl font-bold">{t("schedule.evening.time")}</p>
          <p className="text-sm text-gray-500">{t("schedule.evening.text")}</p>
        </div>
      </div>


      {/* Contact Section */}
      <Separator className="my-[12px] w-full border-b border-gray lg:w-[800px]" />

      <div className="mt-[10px] w-full text-[1.25rem]/[1.625rem] font-medium">
        <div className="flex flex-col gap-[20px] sm:flex-row sm:justify-center sm:items-start sm:gap-[30px] w-fit mx-auto text-center">
          {/* First Column: Address */}
          <div className="flex flex-col justify-start space-y-[5px]">
            <p className="whitespace-pre-wrap">{t("adress")}</p>
            <p className="whitespace-pre-wrap">{t("street")}</p>
          </div>

          {/* Second Column: Phone and Email */}
          <div className="flex flex-col justify-start space-y-[5px]">
            <a href={`tel:${t("phone-number-call")}`} className="whitespace-pre-wrap">
              <p>{t("phone-number")}</p>
            </a>
            <a href={`mailto:${t("email")}`} className="whitespace-pre-wrap">
              <p>{t("email")}</p>
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-[20px] flex justify-center gap-[16px]">
          <Button
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white p-0 transition-colors group-hover:border-graphite group-hover:bg-graphite"
            asChild
          >
            <Link href={clientUrl.youtube} target="_blank">
              <Icons.youtubeSmall className="rounded-full" />
            </Link>
          </Button>
          <Button
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white p-0 transition-colors group-hover:border-graphite group-hover:bg-graphite"
            asChild
          >
            <Link href={clientUrl.facebook} target="_blank">
              <Icons.facebookSmall className="rounded-full" />
            </Link>
          </Button>
          <Button
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white p-0 transition-colors group-hover:border-graphite group-hover:bg-graphite"
            asChild
          >
            <Link href={clientUrl.instagram} target="_blank">
              <Icons.instagramSmall className="rounded-full" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}