import { useTranslations } from "next-intl";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { WrapperPreviewBlock } from "../wrapper-preview-block/wrapper-preview-block";

import { Link } from "@/app/navigation";
import { clientUrl } from "@/utils/clientUrl";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <WrapperPreviewBlock>
      <div className="container absolute z-10 flex h-full flex-col items-center pb-[3rem] pt-[3rem] text-white xl:justify-between xl:pt-[9rem]">
        <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
        <p className="hidden">{t("main-page.preview-block.under-title")}</p>
        <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
        <div className="hidden xl:block">
          <Icons.textTitle className="w-full" />
          <Icons.textUnderTitle className="w-full xl:mt-[50px]" />
          <Icons.textWelcome className="w-full xl:mt-[30px]" />
        </div>
        <Icons.textMobile className="w-full xl:hidden" />
        <div className="mt-[60px] flex h-full flex-col justify-between xl:mt-[100px]">
          <Button
            className="w-[250px] self-center px-[20px] py-[10px]  text-[24px]/[29px] font-medium md:px-[38px] xl:mt-0 xl:w-[332px] xl:py-[24px] xl:text-[31px]/[37px]  2xl:w-[415px] 2xl:py-[38px] 2xl:text-[38px]/[46px]"
            variant="standard"
            asChild
          >
            <Link
              className="rounded-[42px]  uppercase"
              href={clientUrl.donateUA("")}
            >
              {t("donate-page.preview-block.button-donate")}
            </Link>
          </Button>
          <div className="flex flex-col gap-[20px] xl:flex-row xl:gap-[50px]">
            <Link href={clientUrl.donateTransfer}>
              <div className="flex h-[100px] w-[248px] flex-col items-center justify-center rounded-[20px] bg-white bg-opacity-10 py-[26px] text-center text-[20px]/[24px] font-medium uppercase transition-colors hover:bg-opacity-25">
                <p>
                  {t(
                    "donate-page.preview-block.button-donate-ministries.part-1"
                  )}
                </p>
                <p>
                  {t(
                    "donate-page.preview-block.button-donate-ministries.part-2"
                  )}
                </p>
              </div>
            </Link>
            <Link href="#other-payment-methods">
              <div className="flex h-[100px] w-[248px] rounded-[20px] bg-white bg-opacity-10 py-[26px] transition-colors  text-center text-[20px]/[24px] font-medium uppercase hover:bg-opacity-25">
                {t("donate-page.preview-block.button-donate-all")}
              </div>
            </Link>
            <Link href="/">
              <div className="flex h-[100px] w-[248px] flex-col items-center  justify-center rounded-[20px] bg-white bg-opacity-10 py-[26px] text-center text-[20px]/[24px] font-medium uppercase transition-colors hover:bg-opacity-25">
                <p>
                  {t(
                    "donate-page.preview-block.button-return-to-main-page.part-1"
                  )}
                </p>
                <p>
                  {t(
                    "donate-page.preview-block.button-return-to-main-page.part-2"
                  )}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </WrapperPreviewBlock>
  );
}
