import { WrapperPreviewBlock } from "@components/wrapper-preview-block/wrapper-preview-block";
import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";

import { Link } from "@/app/navigation";
import { clientUrl } from "@/utils/clientUrl";

import { OtherDonateMethods } from "./other-donate-methods";
import { DonationVariants } from "./donation-variants";
import { QrCodesBlock } from "./qr-codes-block";
import { Offer } from "./offer";

export function PreviewBlock() {
  const t = useTranslations();

  return (
    <div>
      <WrapperPreviewBlock className="flex flex-col min-h-[800px] xl:min-h-[900px] mb-[50px]">
        <div className="mt-[50px] lg:mt-[150px] mb-[60px] lg:mb-[100px]">
          <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
          <p className="hidden">{t("main-page.preview-block.under-title")}</p>
          <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
          <div className="3xl:scale-100 scale-75 xl:block ">
            <Icons.textTitle className="w-full" />
            <Icons.textUnderTitle className="w-full xl:mt-[20px]" />
            <Icons.textWelcome className="w-full xl:mt-[15px]" />
          </div>
        </div>
        <Link href={clientUrl.donateTransfer} className="z-10 text-white flex justify-center items-center uppercase py-[10px] lg:py-[20px] px-[20px] lg:px-[40px] rounded-[42px] text-[24px] lg:text-[38px] bg-transparent border border-white mb-[190px] lg:mb-[170px]">{t('donate-page.preview-block.button-donate')}</Link>
        <DonationVariants />
      </WrapperPreviewBlock>

      <div className="mx-auto flex w-[calc(100%-40px)] xl:w-[1070px] flex-col gap-[100px] items-center mb-[100px]">
        <p className="text-center text-[20px] font-medium text-[#8A8A8A]">{t("donate-page.qr-codes-block.intro")}</p>
        <QrCodesBlock />
        <Offer />
      </div>
      <OtherDonateMethods  />
    </div>
  );
}
