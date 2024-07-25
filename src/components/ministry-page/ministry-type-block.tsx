import { X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";

interface IPropsMinistryTypeBlock {
  title: string;
  text: string;
  src: string;
}

export function MinistryTypeBlock({
  title,
  text,
  src,
}: IPropsMinistryTypeBlock) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="rounded-[20px] bg-gradient-to-b from-transparent to-hover-blue-300 p-[1px] shadow-custom-hover-blue">
          <div className="inline-flex h-[140px] w-full items-center justify-center rounded-[20px] bg-white px-[105px] py-[40px] text-center text-[1.5rem]/[1.875rem] font-medium text-hover-blue hover:cursor-pointer">
            <p>{title}</p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="center">
        <SheetHeader>
          <div className="py-[100px] bg-gray rounded-t-[20px] w-full">
            <p className="text-[50px]/[61px] text-white text-center">{title}</p>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
