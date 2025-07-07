import { WrapperPreviewBlock } from "@components/wrapper-preview-block/wrapper-preview-block";
import { useTranslations } from "next-intl";



import { LiqPayButton } from "../donation-ministry/liq-pay-button";
import { Icons } from "../ui/icons";
import { Offer } from "./offer";
import { OtherDonateMethods } from "./other-donate-methods";
import { QrCodesBlock } from "./qr-codes-block";

import { Link } from "@/app/navigation";

export function PreviewBlock() {
  const t = useTranslations();

  return (
    <div>
      <WrapperPreviewBlock className="mb-[50px] flex min-h-[800px] flex-col xl:min-h-[900px]">
        <div className="mb-[60px] mt-[50px] lg:mb-[100px] lg:mt-[150px]">
          <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
          <p className="hidden">{t("main-page.preview-block.under-title")}</p>
          <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
          <div className="scale-75 xl:block 3xl:scale-100 ">
            <Icons.textTitle className="w-full" />
            <Icons.textUnderTitle className="w-full xl:mt-[20px]" />
            <Icons.textWelcome className="w-full xl:mt-[15px]" />
          </div>
        </div>
        <LiqPayButton className="relative z-10 flex h-auto items-center justify-center rounded-[42px] border border-white bg-transparent px-[20px] py-[10px] text-center text-[24px] uppercase text-white hover:bg-white hover:text-[#0E9398] lg:mb-[170px] lg:px-[40px] lg:py-[20px] lg:text-[38px]">
          {t("donate-page.preview-block.button-donate")}
        </LiqPayButton>
        {/* <Link
          href="/donate/ministry"
          className="z-10 mb-[190px] flex items-center justify-center rounded-[42px] border border-white bg-transparent px-[20px] py-[10px] text-[24px] uppercase text-white hover:bg-white hover:text-[#0E9398] lg:mb-[170px] lg:px-[40px] lg:py-[20px] lg:text-[38px] "
        >
          {t("donate-page.preview-block.button-donate")}
        </Link> */}

        <div className="z-10 mb-[50px] flex flex-wrap justify-center gap-[20px] lg:gap-[50px]">
          <Link
            href="/donate/ministry"
            className="weight-[500] flex h-[100px] w-[248px] items-center justify-center text-wrap rounded-[20px] bg-[rgba(255,255,255,0.1)] px-[40px] text-center text-[20px] uppercase  text-white hover:bg-white hover:text-[#0E9398]"
          >
            {t("donate-page.preview-block.button-donate-ministries")}
          </Link>
          <Link
            href="#OtherDonateMethods"
            className="weight-[500] flex h-[100px] w-[248px] items-center justify-center text-wrap rounded-[20px] bg-[rgba(255,255,255,0.1)] px-[40px] text-center  text-[20px] uppercase text-white hover:bg-white hover:text-[#0E9398]"
          >
            {t("donate-page.preview-block.button-donate-all")}
          </Link>
          <Link
            href="/"
            className="weight-[500] flex h-[100px] w-[248px] items-center justify-center text-wrap rounded-[20px] bg-[rgba(255,255,255,0.1)] px-[40px]  text-center text-[20px] uppercase text-white hover:bg-white hover:text-[#0E9398]"
          >
            {t("donate-page.preview-block.button-return-to-main-page")}
          </Link>
        </div>
      </WrapperPreviewBlock>

      <div className="mx-auto mb-[100px] flex w-[calc(100%-40px)] flex-col items-center gap-[100px] xl:w-[1070px]">
        <p className="text-center text-[20px] font-medium text-[#8A8A8A]">
          {t("donate-page.qr-codes-block.intro")}
        </p>
        <QrCodesBlock />
        <Offer />
      </div>
      <OtherDonateMethods />
    </div>
  );
}