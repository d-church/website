import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function SuccessBlock() {
  const t = useTranslations("donate-ministry-page.success-block");
  return (
    <div className="container flex flex-col items-center space-y-[30px] pb-[75px] pt-[100px] xl:space-y-[50px]">
      <div className="flex w-full max-w-[520px] flex-col items-center space-y-5 rounded-[30px] bg-[#232323] px-[10px] py-[50px] xl:py-[62px]">
        <div className="flex flex-col items-center space-y-[10px]">
          <Icons.successCheck />
          <p className="text-xl/[1.5rem] font-bold text-white">{t("title")}</p>
        </div>
        <p className="whitespace-pre-wrap text-center text-xl font-medium text-[#8A8A8A]">
          {t("text")}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <Button className="h-full rounded-3xl border border-[#232323] bg-transparent px-[20px] py-[10px] text-2xl uppercase text-[#232323] transition duration-100 hover:bg-[#232323] hover:text-white xl:px-[38px] xl:py-[19px] xl:text-4xl">
          {t("button-repeat-donate")}
        </Button>
        <Button
          variant="link"
          className="max-w-max text-xl underline underline-offset-2"
        >
          {t("button-return")}
        </Button>
      </div>
    </div>
  );
}
