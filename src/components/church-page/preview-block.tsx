import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";
import { WrapperPreviewBlock } from "../wrapper-preview-block/wrapper-preview-block";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <WrapperPreviewBlock>
      <div className="container absolute z-10 flex h-full flex-col items-center justify-between py-[100px] text-white xl:justify-center xl:py-0">
        <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
        <p className="hidden">{t("main-page.preview-block.under-title")}</p>
        <div className="hidden xl:block">
          <Icons.textTitle className="w-full xl:mt-[60px]" />
          <Icons.textUnderTitle className="w-full xl:mt-[20px]" />
        </div>
        <div>
          <Icons.textMobileForChurch className="w-full xl:hidden" />
        </div>
        <p className="mt-[111px] whitespace-pre-wrap text-center text-[1.375rem]/[1.875rem] md:w-[80%] xl:max-w-[1070px]">
          {t("church-page.preview-block")}
        </p>
      </div>
    </WrapperPreviewBlock>
  );
}
