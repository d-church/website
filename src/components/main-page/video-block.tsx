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
    <div className="container xl:pb-[100px]" id="video">
      <Separator className="mt-[50px] hidden bg-graphite xl:mb-[68px] xl:mt-[100px] xl:block" />
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex w-1/2 justify-center">
            <h2 className="text-xl font-bold uppercase text-graphite">
              {t("main-page.video-block.title")}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="mt-1 flex h-full flex-col md:flex-row md:justify-center md:space-x-8 xl:mt-[34px] xl:px-[138px]">
            <Video />
            <div className="mt-[10px] space-y-[10px] text-white md:space-y-5 xl:mt-0">
              {videos.map(({ link, date }, i) => (
                <Button
                  key={`${link}_${i}`}
                  className="group flex h-auto w-full items-center space-x-[30px] rounded-3xl bg-black px-9 py-[21px] xl:flex-col xl:space-x-0 xl:py-6"
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
                className="group flex h-auto items-center justify-start space-x-5 rounded-3xl bg-black px-9 py-[14px] text-xl xl:justify-between xl:py-6"
              >
                <Icons.youtubeStrokeLine className="size-8 group-hover:stroke-hover-blue xl:size-20" />
                <p className="text-sm xl:text-2xl">
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
