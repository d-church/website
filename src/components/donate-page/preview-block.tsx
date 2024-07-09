import { WrapperPreviewBlock } from "@components/wrapper-preview-block/wrapper-preview-block";
import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";
import { DonationHeaderBlock } from "./donation-header-block";
import { IbanCredentialsBlock } from "./iban-credentials-block";

import { Link } from "@/app/navigation";
import { clientUrl } from "@/utils/clientUrl";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <WrapperPreviewBlock>
      <div className="container absolute z-10 flex h-full flex-col items-center justify-center pb-[3rem] text-white xl:justify-between xl:pt-[1.5rem]">
        <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
        <p className="hidden">{t("main-page.preview-block.under-title")}</p>
        <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
        <div className="3xl:scale-100 hidden scale-75 xl:block">
          <Icons.textTitle className="w-full" />
          <Icons.textUnderTitle className="w-full" />
          <Icons.textWelcome className="w-full xl:mt-[15px]" />
        </div>
        <Icons.textMobile className="mt-[50px] w-full xl:hidden" />
        <div className="flex h-full flex-col">
          <div className="flex h-full flex-col">
            <DonationHeaderBlock />
            <IbanCredentialsBlock />
          </div>
          <div className="mt-auto flex flex-col justify-center gap-[20px] xl:flex-row xl:gap-[50px]">
            <Link href={clientUrl.donateTransfer} className="hidden">
              <div className="flex h-[100px] w-[248px] flex-col items-center justify-center rounded-[20px] bg-white bg-opacity-10 py-[26px] text-center text-xl/[1.5rem] font-medium uppercase transition-colors hover:bg-opacity-25">
                <p className="whitespace-pre-wrap">
                  {t("donate-page.preview-block.button-donate-ministries")}
                </p>
              </div>
            </Link>
            <Link href="#other-payment-methods" className="hidden">
              <div className="flex h-[100px] w-[248px] rounded-[20px] bg-white bg-opacity-10 py-[26px] text-center  text-xl/[1.5rem] font-medium uppercase transition-colors hover:bg-opacity-25">
                {t("donate-page.preview-block.button-donate-all")}
              </div>
            </Link>
            <Link href={"//" + clientUrl.domain}>
              <div className="3xl:scale-120 mx-auto flex h-[100px] w-[248px] scale-90 flex-col items-center justify-center rounded-[20px] bg-white bg-opacity-10 py-[26px] text-center text-xl/[1.5rem] font-medium uppercase transition-colors hover:bg-opacity-25">
                <p className="whitespace-pre-wrap">
                  {t("donate-page.preview-block.button-return-to-main-page")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </WrapperPreviewBlock>
  );
}
