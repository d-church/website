"use client";

import { X } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from "../ui/sheet";
import { GalleryCarouselBlock } from "./gallery-carousel-block";

import { MinistryImage } from "@/data/ministry";

interface IGalleryBlockProps {
  children: React.ReactNode;
  initialIndex: number;
  carouselImages: MinistryImage[];
  setOpenFirstModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GalleryModalBlock({
  children,
  initialIndex,
  carouselImages,
  setOpenFirstModal,
}: IGalleryBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  function closeOnClickOnBackdrop() {
    if (isOpen) {
      setTimeout(() => {
        setOpenFirstModal(false);
      }, 300);
    }
  }
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          onPointerDownOutside={() => {
            closeOnClickOnBackdrop();
          }}
          className="justify-center bg-graphite backdrop-blur-sm max-xl:flex max-xl:flex-col xl:rounded-[18px] xl:bg-black/80 xl:pt-[74px]"
          side="innerCenter"
        >
          <GalleryCarouselBlock
            carouselImages={carouselImages}
            initialIndex={initialIndex}
          />
          <SheetClose className="absolute right-0 top-0 outline-none">
            <X
              className="absolute right-[20px] top-[20px] z-[10] h-6 w-6"
              color="#8A8A8A"
            />
          </SheetClose>
          <SheetClose asChild className="absolute right-0 top-0 outline-none">
            <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-transparent"></div>
          </SheetClose>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
}
