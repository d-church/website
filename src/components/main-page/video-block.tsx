import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
    link: "https://www.youtube.com/watch?v=BJWeW6JxZyU",
    date: "14.06.2024",
    thumbnail: "/static/video-thumbnails/video-thumbnail-0.webp",
  },
  {
    link: "https://www.youtube.com/watch?v=OssT5UKJu6w",
    date: "30.05.2024",
    thumbnail: "/static/video-thumbnails/video-thumbnail-1.webp",
  },
  {
    link: "https://www.youtube.com/watch?v=JIURd8f7pMw",
    date: "25.05.2024",
    thumbnail: "/static/video-thumbnails/video-thumbnail-2.webp",
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
            {/* instead of timer with livestream */}
            {/* <Video /> */}
            <div className="h-[180px] w-full md:h-[225px] md:max-w-[400px] xl:h-[450px] xl:min-w-[800px] 2xl:h-[604px] 2xl:min-w-[1070px]">
              <iframe
                className="h-full w-full grow rounded-[0.75rem] xl:rounded-[1.25rem]"
                src="https://www.youtube.com/embed/ejos3w2BnVE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* instead of timer with livestream */}
            <div className="mt-[10px] space-y-[10px] text-white md:space-y-5 xl:mt-0 2xl:max-w-[248px]">
              {videos.map(({ link, thumbnail, date }, i) => (
                <div
                  key={`${link}_${i}`}
                  className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full "
                >
                  <Image
                    src={thumbnail}
                    alt="video-thumbnail"
                    fill
                    className="absolute left-0 top-0 -z-[1] size-[320px] rounded-[0.75rem] object-cover xl:size-[275px] xl:rounded-[1.25rem]"
                  />
                  <Button
                    className="group flex h-auto w-full items-center space-x-[30px] rounded-[0.75rem] bg-black/60 px-9 py-[21px] xl:flex-col xl:space-x-0 xl:rounded-[1.25rem] xl:py-6"
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
                </div>
              ))}

              <Link
                href={clientUrl.youtube}
                target="_blank"
                className="group flex items-center justify-start space-x-5 rounded-[0.75rem] bg-graphite py-[14px] pl-4 text-xl xl:justify-between xl:rounded-[1.25rem] xl:px-6 2xl:py-9"
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
