"use client";

import parse from "html-react-parser";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import type { ICRMImage } from "@/types/crm-image.types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "../ui/sheet";

import { cn } from "@/lib/utils";

const CarouselBlock = dynamic(
  () => import("@components/ministry-page/carousel-block"),
  { ssr: false }
);

interface IMinistryTypeBlockProps {
  title: string;
  subtitle: string;
  src: string;
  textModal: string;
  imgPosition?: string;
  carouselImages: ICRMImage[];
}

export function MinistryTypeBlock({
  title,
  subtitle,
  textModal,
  src,
  imgPosition,
  carouselImages,
}: IMinistryTypeBlockProps) {
  const [open, setOpen] = useState(false);
  const parsedSubtitile = parse(subtitle);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="h-full">
        <SheetTrigger asChild>
          <div className="group rounded-[20px]">
            <div className="relative inline-flex h-[270px] w-full items-center justify-center overflow-hidden rounded-[20px] px-[105px] py-[40px] text-center text-[1.5rem]/[1.875rem] font-medium hover:cursor-pointer max-sm:h-[160px]">
              <p className="z-[1] text-white">{title}</p>
              <Image
                fill
                src={src}
                alt="Clickable picture!"
                className={cn("z-[-1] object-cover", imgPosition)}
              />
              <div className="after:absolute after:left-0 after:top-[90px] after:h-[90px] after:w-full after:bg-black after:opacity-0 after:transition-opacity lg:group-hover:after:opacity-60"></div>
              <div className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:opacity-40"></div>
            </div>
          </div>
        </SheetTrigger>
        <div className="mt-[10px] w-full whitespace-pre-wrap text-center text-[1.5rem]/[1.875rem] font-medium max-md:text-[1.25rem]/[1.5rem]">
          {parsedSubtitile}
        </div>
      </div>

      <SheetOverlay className="bg-black/50 backdrop-blur-sm" />
      <SheetContent
        className="shadow-custom-hover-blue max-lg:my-[50px]"
        side="center"
      >
        <div className="relative h-full w-full rounded-[21px] bg-gradient-to-b from-transparent to-hover-blue-300">
          <SheetHeader>
            <div className="rounded-t-[20px] bg-gradient-to-b from-white to-[#282e2edb] p-[1px]">
              <div className="relative z-[3] h-full w-full rounded-t-[20px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-t-[20px] after:bg-[#232323CC]">
                <div className="absolute top-0 z-[2] h-full w-full rounded-t-[20px]"></div>
                <Image
                  fill
                  src="/static/preview-block-picture.webp"
                  className="h-full w-full scale-x-[-1] rounded-t-[20px] object-cover object-[50%_50%]"
                  alt="Head picture"
                />
                <p className="relative z-[1] py-[58px] text-center text-[2.25rem]/[2.75rem] text-white lg:py-[96px] lg:text-[3.125rem]/[3.625rem]">
                  {title}
                </p>
                <SheetClose className="absolute right-0 top-0 outline-none">
                  <X
                    className="absolute right-[20px] top-[20px] z-[10] h-6 w-6"
                    color="#8A8A8A"
                  />
                </SheetClose>
              </div>
            </div>
          </SheetHeader>
          <div className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[20px] lg:h-[590px]">
            <div className="ml-[1px] h-[calc(100%)] w-full rounded-b-[20px] bg-white pt-[50px]">
              <CarouselBlock
                textModal={textModal}
                carouselImages={carouselImages}
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
