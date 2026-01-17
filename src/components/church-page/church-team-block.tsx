"use client";

import { ChurchEmployeeBlock } from "@components/main-page/church-employee-block";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode } from "react";

import { Separator } from "../ui/separator";

import { getMainPastor, getTeamMembers } from "@/data/church-team";
import { cn } from "@/lib/utils";

interface IChurchTeamBlockProps {
  className?: string;
  count?: number;
  children?: ReactNode;
}

export function ChurchTeamBlock({
  className,
  count,
  children,
}: IChurchTeamBlockProps) {
  const t = useTranslations();

  const mainPerson = getMainPastor();
  const allMembers = getTeamMembers();
  const persons = count ? allMembers.slice(0, count) : allMembers;

  return (
    <div
      id="church-team"
      className={cn(
        "container flex origin-top scale-100 flex-col items-center pb-[100px] pt-[100px] xl:pt-[167px]",
        "scale-[80%] md:mt-[-15px] md:scale-[90%] xl:scale-[95%]",
        className
      )}
    >
      <div className="max-w-[1070px] text-center text-lg font-medium leading-8 text-[#8A8A8A] xl:text-xl">
        <p>{t("main-page.church-team-block.text")}</p>
      </div>

      <div className="mt-[30px] flex flex-col items-center xl:mt-[50px]">
        <div className="flex w-full justify-center xl:space-x-[57px]">
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
          <div className="flex flex-col items-center">
            <div className="group flex flex-col items-center">
              <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4 bg-[#E8E8E8] xl:size-[190px]">
                {mainPerson && (
                  <Image
                    src={mainPerson.photo}
                    width={160}
                    height={160}
                    alt={mainPerson.fullName}
                    className="size-[126px] rounded-full object-cover object-[70%_30%] xl:size-[160px]"
                  />
                )}
              </div>
              <p className="mt-[10px] whitespace-pre-wrap text-center text-base font-bold xl:mt-[20px] xl:text-[22px]">
                {mainPerson?.fullName}
              </p>
            </div>
            <p className="mt-[10px] whitespace-pre-line text-center font-normal text-[#8A8A8A] xl:text-[22px]">
              {mainPerson?.position}
            </p>
          </div>
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
        </div>
      </div>

      <div className="mt-[73px] grid grid-cols-2 gap-x-[20px] gap-y-[50px] lg:grid-cols-4 lg:gap-x-[0px] xl:gap-x-[0px]">
        {persons.map((item) => (
          <ChurchEmployeeBlock
            key={item.id}
            src={item.photo}
            fullName={item.fullName}
            position={item.position}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
