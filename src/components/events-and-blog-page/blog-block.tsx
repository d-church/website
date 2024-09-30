import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { Link } from "@/app/navigation";
import s from './blog-block.module.css'

interface IBlogBlockProps {
  title: string;
  date: string;
  imgSrc: string;
  id: number;
}

export function BlogBlock({ title, date, imgSrc, id }: IBlogBlockProps) {
  const href = `/events-and-blog/${id}`;
  const t = useTranslations("events-and-blogs-page.blogs");
  return (
    <div className="font-medium">
      <Link href={href} className={s.link}>
        <Image
          src={imgSrc}
          alt="Blog preview image"
          className={`rounded-[20px] max-2xl:h-[160px] max-2xl:w-[320px] max-xl:rounded-[12px] 2xl:h-[300px] 2xl:w-[520px] object-cover`}
          width={320}
          height={160}
        />
      </Link>
      <div className={s.container}>
        <div className={`flex justify-between gap-[20px] pt-[10px] xl:gap-[30px] xl:pt-[20px] ${s.btnContainer}`}>
          <Link href={href} className="peer">
            <p className="xl:text-[1rem]/[1.21rem] 2xl:text-[1.375rem]/[1.67rem] ">
              {title.length > 27 ? `${title.split('').slice(0, 26).join('')}...` : title}
            </p>
          </Link>
          <Button
            className={`max-2lx:rounded-[20px] group flex items-center justify-center rounded-[22px] border border-graphite bg-white px-[10px] py-[10px] text-[1rem] uppercase text-black peer-hover:bg-graphite peer-hover:text-hover-blue hover:bg-graphite hover:text-hover-blue 2xl:px-[20px] 2xl:text-[1.25rem] ${s.btn}`}
            asChild
          >
            <Link href={href}>{t("button")}</Link>
          </Button>
        </div>
        <div className="text-gray-light flex items-center gap-[13px] overflow-hidden pt-[10px] max-xl:gap-[11px]">
          <p className="text-[1rem]/[1.21rem] 2xl:text-[1.125rem]/[1.375rem]">
            {date}
          </p>
          <Separator className="w-full min-w-full max-w-full" />
        </div>
      </div>
    </div>
  );
}
