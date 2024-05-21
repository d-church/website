import { Calendar, Link, Video } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

import { clientUrl } from "@/utils/clientUrl";

export function ImportantInformationBlock() {
  const t = useTranslations("main-page");
  return (
    <div className="container">
      <Separator className="mt-[50px] hidden bg-graphite xl:mb-[68px] xl:mt-[120px] xl:block" />
      <Accordion
        type="single"
        collapsible
        className="w-full pb-[72px] lg:pb-7 xl:pb-0"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="mt-[50px] flex w-1/2 justify-center py-0 xl:mt-0">
            <h2 className="mt-[18px] text-xl/[1.5rem] font-bold uppercase text-graphite xl:mt-0">
              {t("important-information.title")}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="mt-[30px] flex flex-col justify-between space-y-[30px] pb-0 lg:flex-row lg:space-x-[40px] lg:space-y-0 xl:mt-[50px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="cursor-pointer space-y-[36px] rounded-[20px] border border-[#8A8A8A] px-[22px] pb-[28px] pt-[20px] hover:border-hover-blue xl:space-y-[60px] xl:px-[47px] xl:pb-[38px] xl:pt-[30px]"
              >
                <p className="text-center text-xl/[1.5rem] font-medium text-[#8A8A8A]">
                  Збір членів церкви відбудеться в основному залі
                </p>
                <div className="flex justify-between xl:justify-around">
                  <div className="flex items-center space-x-[5px]">
                    <Icons.calendar />
                    <p className="text-xl/[1.5rem] font-bold text-[#8A8A8A]">
                      7 Лютого
                    </p>
                  </div>
                  <div className="flex items-center space-x-[5px]">
                    <Icons.clock />
                    <p className="text-xl/[1.5rem] font-bold text-[#8A8A8A]">
                      11:30
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
