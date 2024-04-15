"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function ChurchEmployeeBlock() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4 bg-[#E8E8E8] xl:size-[190px]",
          { "border-hover-blue bg-white": isHovered }
        )}
      >
        <div
          className={cn(
            "after:absolute after:bottom-[21px] after:right-[19px] after:size-4 after:rounded-full after:bg-black after:xl:bottom-[28px] after:xl:right-[26px]",
            { "after:bg-hover-blue": isHovered }
          )}
        />
        <Image
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src="/static/test-icon-team.png"
          width={160}
          height={160}
          alt="icon"
          className="size-[126px] xl:size-[160px]"
        />
      </div>
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mt-[10px] text-base font-bold xl:mt-[20px] xl:text-[22px]"
      >
        Ім&apos;я Призвище
      </p>
      <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:mt-[20px] xl:text-[22px]">
        Пастор
      </p>
    </div>
  );
}
