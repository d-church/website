import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ChurchEmployeeBlock } from "./church-employee-block";

import { Link } from "@/app/navigation";
import { cn } from "@/lib/utils";

interface IChurchTeamBlockProps {
  className?: string;
}

export function ChurchTeamBlock({ className }: IChurchTeamBlockProps) {
  const t = useTranslations();
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
          <div className="flex flex-col items-center">
            <div className="group flex flex-col items-center">
              <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4  border-hover-blue bg-white xl:size-[190px]">
                <Image
                  src="/static/employees/bilyk-v-d.webp"
                  width={160}
                  height={160}
                  alt="icon"
                  className="size-[126px] rounded-full object-cover object-[70%_30%] xl:size-[160px]"
                />
              </div>
              <p className="mt-[10px] whitespace-pre-wrap text-center text-base font-bold xl:mt-[20px] xl:text-[22px]">
                {t(
                  "main-page.church-team-block.church-employees.employee-1.full-name"
                )}
              </p>
            </div>
            <p className="mt-[10px] whitespace-pre-line text-center font-normal text-[#8A8A8A] xl:text-[22px]">
              {t("main-page.church-team-block.church-positions.bishop")}
            </p>
          </div>
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
        </div>
      </div>

      <div className="mt-[73px] flex flex-wrap items-center justify-center space-y-[50px] min-[680px]:space-x-5 min-[700px]:space-y-0 xl:space-x-[100px]">
        <div className="flex space-x-5 xl:space-x-[100px]">
          <ChurchEmployeeBlock
            src="/static/employees/novoseltsev-i-i.webp"
            fullName={t(
              "main-page.church-team-block.church-employees.employee-2.full-name"
            )}
            position={t("main-page.church-team-block.church-positions.pastor")}
          />
          <ChurchEmployeeBlock
            src="/static/employees/denisyuk-s-s.webp"
            fullName={t(
              "main-page.church-team-block.church-employees.employee-3.full-name"
            )}
            position={t(
              "main-page.church-team-block.church-positions.presbyter"
            )}
          />
        </div>
        <div className="flex space-x-5 xl:space-x-[100px]">
          <ChurchEmployeeBlock
            src="/static/employees/ronchkovsky-a-b.webp"
            fullName={t(
              "main-page.church-team-block.church-employees.employee-4.full-name"
            )}
            position={t("main-page.church-team-block.church-positions.deacon")}
          />
          <ChurchEmployeeBlock
            src="/static/employees/kohut-o-v.webp"
            fullName={t(
              "main-page.church-team-block.church-employees.employee-5.full-name"
            )}
            position={t("main-page.church-team-block.church-positions.deacon")}
          />
        </div>
      </div>
      <Button
        variant="standard"
        className="mt-[40px] border-graphite uppercase text-graphite hover:bg-graphite hover:text-hover-blue"
        asChild
      >
        <Link href="/about#church-team">{t("church-page.show-full-team")}</Link>
      </Button>
    </div>
  );
}
