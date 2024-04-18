import { useTranslations } from "next-intl";

import { Separator } from "../ui/separator";
import { ChurchEmployeeBlock } from "./church-employee-block";

import { cn } from "@/lib/utils";

interface IChurchTeamBlockProps {
  className?: string;
}

export function ChurchTeamBlock({ className }: IChurchTeamBlockProps) {
  const t = useTranslations();
  const team = Array.from({ length: 4 });
  return (
    <div
      className={cn(
        "container flex flex-col items-center pb-[100px] pt-[100px] xl:pt-[167px]",
        className
      )}
    >
      <div className="max-w-[1070px] text-center text-lg font-medium leading-8 text-[#8A8A8A] xl:text-xl">
        <p>{t("main-page.church-team-block.text")}</p>
      </div>

      <div className="mt-[30px] flex flex-col items-center xl:mt-[50px]">
        <div className="flex w-full justify-center xl:space-x-[57px]">
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
          <ChurchEmployeeBlock />
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
        </div>
      </div>

      <div className="mt-[73px] flex flex-wrap items-center justify-center space-y-[50px] min-[680px]:space-x-5 min-[700px]:space-y-0 xl:space-x-[100px]">
        <div className="flex space-x-5 xl:space-x-[100px]">
          {team.slice(0, 2).map((_, index) => (
            <ChurchEmployeeBlock key="index" />
          ))}
        </div>
        <div className="flex space-x-5 xl:space-x-[100px]">
          {team.slice(2, 4).map((_, index) => (
            <ChurchEmployeeBlock key="index" />
          ))}
        </div>
      </div>
    </div>
  );
}
