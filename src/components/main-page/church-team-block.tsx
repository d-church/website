import Image from "next/image";

import { Separator } from "../ui/separator";

import { getTranslate } from "@/lib/tolgee/server";

export async function ChurchTeamBlock() {
  const t = await getTranslate();
  const team = Array.from({ length: 4 });
  return (
    <div className="container flex flex-col items-center pb-[100px] pt-[100px] xl:pt-[167px]">
      <div className="max-w-[1070px] text-center text-lg font-medium leading-8 text-[#8A8A8A] xl:text-xl">
        <p>{t("main-page.church-team-block.text")}</p>
      </div>

      <div className="mt-[30px] flex flex-col items-center xl:mt-[50px]">
        <div className="flex w-full items-center justify-center xl:space-x-[57px]">
          <Separator className="hidden w-[520px] bg-graphite xl:block" />
          <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full bg-[#E8E8E8] after:absolute after:bottom-[25px] after:right-[23px] after:size-4 after:rounded-full after:bg-black xl:size-[190px] after:xl:bottom-[32px] after:xl:right-[30px]">
            <Image
              src="/static/test-icon-team.png"
              width={160}
              height={160}
              alt="icon"
              className="size-[126px] xl:size-[160px]"
            />
          </div>
          <Separator className="hidden w-[520px] bg-graphite xl:block" />
        </div>
        <p className="mt-[10px] text-base font-bold xl:mt-[20px] xl:text-[22px]">
          Ім&apos;я Призвище
        </p>
        <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:mt-[20px] xl:text-[22px]">
          Пастор
        </p>
      </div>
      <div className="mt-[73px] flex flex-wrap items-center justify-center space-y-[50px] min-[680px]:space-x-5 min-[700px]:space-y-0 xl:space-x-[100px]">
        <div className="flex space-x-5 xl:space-x-[100px]">
          {team.slice(0, 2).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full bg-[#E8E8E8] after:absolute after:bottom-[25px] after:right-[23px] after:size-4 after:rounded-full after:bg-black xl:size-[190px] after:xl:bottom-[32px] after:xl:right-[30px]">
                <Image
                  src="/static/test-icon-team.png"
                  width={160}
                  height={160}
                  alt="icon"
                  className="size-[126px] xl:size-[160px]"
                />
              </div>
              <p className="mt-[10px] text-base font-bold xl:mt-[20px] xl:text-[22px]">
                Ім&apos;я Призвище
              </p>
              <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:mt-[20px] xl:text-[22px]">
                Пастор
              </p>
            </div>
          ))}
        </div>
        <div className="flex space-x-5 xl:space-x-[100px]">
          {team.slice(2, 4).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full bg-[#E8E8E8] after:absolute after:bottom-[25px] after:right-[23px] after:size-4 after:rounded-full after:bg-black xl:size-[190px] after:xl:bottom-[32px] after:xl:right-[30px]">
                <Image
                  src="/static/test-icon-team.png"
                  width={160}
                  height={160}
                  alt="icon"
                  className="size-[126px] xl:size-[160px]"
                />
              </div>
              <p className="mt-[10px] text-base font-bold xl:mt-[20px] xl:text-[22px]">
                Ім&apos;я Призвище
              </p>
              <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:mt-[20px] xl:text-[22px]">
                Пастор
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
