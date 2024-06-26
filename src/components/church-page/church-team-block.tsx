import { ChurchEmployeeBlock } from "@components/main-page/church-employee-block";
import { useTranslations } from "next-intl";

import { Separator } from "../ui/separator";

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
          <ChurchEmployeeBlock
            src="/static/employees/bilyk-v-d.webp"
            fullName={t(
              "main-page.church-team-block.church-employees.employee-1.full-name"
            )}
            position={t("main-page.church-team-block.church-positions.bishop")}
          />
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
        </div>
      </div>

      <div className="mt-[73px] grid grid-cols-2 gap-x-[20px] gap-y-[50px] lg:grid-cols-[repeat(4,minmax(0,200px))] lg:gap-x-[50px] xl:gap-x-[100px]">
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
          position={t("main-page.church-team-block.church-positions.presbyter")}
        />
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
        <ChurchEmployeeBlock
          src="/static/employees/motkalyuk-o-s.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-6.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deacon")}
          className="object-[93%_7%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/dovga-v-v.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-7.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deaconess")}
          className="object-[81%_9%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/kuzyo-u-ya.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-8.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deacon")}
        />
        {/* <ChurchEmployeeBlock
          src="/static/employees/bilyk-i-u.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-9.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.pastoress")}
        /> */}
        <ChurchEmployeeBlock
          src="/static/employees/vasilkiv-u-v.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-10.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deacon")}
          className="object-[60%_40%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/petrilak-r.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-11.full-name"
          )}
          position={t(
            "main-page.church-team-block.church-positions.missionary"
          )}
          className="object-[50%_50%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/gorshko-u-e.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-12.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deacon")}
          className="object-[65%_45%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/tuzyak-s-u.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-13.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deaconess")}
          className="object-[65%_45%]"
        />
        <ChurchEmployeeBlock
          src="/static/employees/gavrishishin-s-e.webp"
          fullName={t(
            "main-page.church-team-block.church-employees.employee-14.full-name"
          )}
          position={t("main-page.church-team-block.church-positions.deacon")}
          className="object-[30%_70%]"
        />
      </div>
    </div>
  );
}
