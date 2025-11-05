import { WrapperPreviewBlock } from "@components/wrapper-preview-block/wrapper-preview-block";
import { useTranslations } from "next-intl";

import { LiqPayButton } from "../donation-ministry/liq-pay-button";
import { Icons } from "../ui/icons";
import { Offer } from "./offer";
import { PaymentMethodsBlock } from "./payment-methods-block";

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
        <div className="relative z-10 flex flex-col items-center gap-4 lg:mb-[170px]">
          <LiqPayButton className="flex h-auto items-center justify-center rounded-[42px] border border-white bg-transparent px-[20px] py-[10px] text-center text-[24px] uppercase text-white hover:bg-white hover:text-[#0E9398] lg:px-[40px] lg:py-[20px] lg:text-[38px]">
            {t("donate-page.preview-block.button-donate")}
          </LiqPayButton>
          <Link
            href="/donate-building"
            className="inline-flex h-auto shrink-0 items-center justify-center rounded-[42px] border border-white bg-transparent px-[20px] py-[10px] text-center text-[24px] font-medium uppercase text-white transition-colors hover:bg-white hover:text-[#0E9398] max-[496px]:px-[16px] max-[496px]:py-[12px] max-[496px]:text-[22px] max-[448px]:px-[8px] max-[448px]:py-[12px] max-[448px]:text-[18px] min-[497px]:px-[20px] min-[497px]:py-[10px] lg:px-[40px] lg:py-[20px] lg:text-[38px]"
          >
            Пожертвувати на будівництво
          </Link>
        </div>
      </WrapperPreviewBlock>

      <div className="mx-auto mb-[70px] flex w-[calc(100%-40px)] flex-col items-center gap-[70px] xl:w-[1070px]">
        <p className="text-center text-[20px] font-medium">
          {t("donate-page.qr-codes-block.intro")}
        </p>
        <PaymentMethodsBlock />
        <Offer />
      </div>
    </div>
  );
}
