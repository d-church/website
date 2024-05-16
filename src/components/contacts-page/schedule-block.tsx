import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

import { clientUrl } from "@/utils/clientUrl";

export function ScheduleBlock() {
  const t = useTranslations("contacts-page");

  return (
    <div className="container flex flex-col items-center justify-center gap-[50px] pb-[53px] pt-[40px] text-center lg:flex-row lg:justify-around lg:text-start xl:gap-[360px] 2xl:items-baseline 2xl:justify-normal">
      <div className="w-[328px] text-3xl 2xl:ml-[274px]">
        <p className="mb-[20px]">{t("schedule.header")}</p>
        <div className="flex w-full items-end gap-[10px] border-b border-gray">
          <p className="font-bold">{t("schedule.morning.time")}</p>
          <p className="text-xl/[1.5rem]">{t("schedule.morning.text")}</p>
        </div>
        <div className="flex w-full items-end gap-[10px] border-b border-gray">
          <p className="font-bold">{t("schedule.day.time")}</p>
          <p className="text-xl/[1.5rem]">{t("schedule.day.text")}</p>
        </div>
        <div className=" flex w-full items-end gap-[10px]">
          <p className="font-bold">{t("schedule.evening.time")}</p>
          <p className="text-xl/[1.5rem]">{t("schedule.evening.text")}</p>
        </div>
      </div>
      <div className="mt-[10px] w-[335px] text-[1.25rem]/[1.625rem] font-medium">
        <p className="whitespace-pre-wrap">{t("adress")}</p>
        <Separator className="my-[12px] w-full border-b border-gray lg:w-[237px]" />
        <p>{t("phone-number")}</p>
        <p className="uppercase">{t("email")}</p>
        <div className="mt-[10px] flex justify-center gap-[24px] lg:justify-normal">
          <Button
            className="group flex h-8 w-8 items-center justify-center bg-white p-0"
            asChild
          >
            <Link href={clientUrl.youtube} target="_blank">
              <Icons.youtubeSmall className="rounded-full border border-white bg-white transition-colors group-hover:border-graphite group-hover:bg-graphite" />
            </Link>
          </Button>
          <Button
            className="group flex h-8 w-8 items-center justify-center bg-white p-0"
            asChild
          >
            <Link href={clientUrl.facebook} target="_blank">
              <Icons.facebookSmall className="rounded-full border border-white bg-white transition-colors group-hover:border-graphite group-hover:bg-graphite" />
            </Link>
          </Button>
          <Button
            className="group flex h-8 w-8 items-center justify-center bg-white p-0"
            asChild
          >
            <Link href={clientUrl.instagram} target="_blank">
              <Icons.instagramSmall className="rounded-full border border-white bg-white transition-colors group-hover:border-graphite group-hover:bg-graphite" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
