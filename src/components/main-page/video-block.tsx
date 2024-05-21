import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { VideoTimer } from "../timer/video-timer";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";
import { Video } from "../video/video";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clientUrl } from "@/utils/clientUrl";

const videos = [
  {
    link: "https://www.youtube.com/embed/2k0SmqbBIpQ",
    date: "10.10.2021",
  },
  {
    link: "https://www.youtube.com/embed/2k0SmqbBIpQ",
    date: "10.10.2021",
  },
  {
    link: "https://www.youtube.com/embed/2k0SmqbBIpQ",
    date: "10.10.2021",
  },
];

export function VideoBlock() {
  const t = useTranslations();
  return (
    <div className="container pb-[100px]" id="video">
      <Separator className="mt-[50px] hidden bg-graphite xl:mb-[68px] xl:mt-[100px] xl:block" />
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex w-1/2 justify-center">
            <h2 className="mt-[18px] text-xl/[1.5rem] font-bold uppercase text-graphite xl:mt-0">
              {t("main-page.video-block.title")}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="mt-1 flex h-full flex-col pb-0 md:flex-row md:justify-center md:space-x-8 xl:mt-[34px] xl:px-[138px] 2xl:ml-[10px]">
            <Video />
            <div className="mt-[10px] space-y-[10px] text-white md:space-y-5 xl:mt-0 2xl:max-w-[248px]">
              {videos.map(({ link, date }, i) => (
                <Button
                  key={`${link}_${i}`}
                  className="group flex h-auto w-full items-center space-x-[30px] rounded-[0.75rem] bg-graphite px-9 py-[21px] xl:flex-col xl:space-x-0 xl:rounded-[1.25rem] xl:py-6"
                  asChild
                >
                  <Link href={link} target="_blank">
                    <div className="flex items-center space-x-[30px] xl:flex-col xl:space-x-0">
                      <Icons.play className="size-2 group-hover:fill-hover-blue xl:size-auto" />
                      <p className="text-sm xl:mt-[5px] xl:text-2xl">
                        Богослужіння
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 xl:mt-[10px]">
                      <Calendar className="size-4 xl:size-auto" />
                      <p className="text-[12px] xl:text-xl">{date}</p>
                    </div>
                  </Link>
                </Button>
              ))}

              <Link
                href={clientUrl.youtube}
                target="_blank"
                className="group pl-4 flex items-center justify-start space-x-5 rounded-[0.75rem] bg-graphite py-[14px] text-xl xl:justify-between xl:rounded-[1.25rem] xl:px-6 2xl:py-9"
              >
                <Icons.youtubeStrokeLine className="size-8 fill-white group-hover:fill-hover-blue xl:size-20 2xl:h-[4rem] 2xl:w-[6.25rem]" />
                <p className="text-sm font-medium xl:w-fit xl:text-2xl/[1.75rem]">
                  {t("main-page.video-block.button-go-to-chanel")}
                </p>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
