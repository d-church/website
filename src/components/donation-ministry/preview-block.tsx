import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";
import { WrapperPreviewBlock } from "../wrapper-preview-block/wrapper-preview-block";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <WrapperPreviewBlock className="min-h-[599px]">
      <div className="container absolute z-10 flex items-center justify-center pb-[3rem] pt-[9rem] text-white">
        <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
        <p className="hidden">{t("main-page.preview-block.under-title")}</p>
        <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
        <div className="hidden md:block">
          <Icons.textTitle className="w-full" />
          <Icons.textUnderTitle className="w-full xl:mt-[20px]" />
          <Icons.textWelcome className="w-full xl:mt-[30px]" />
        </div>
        <Icons.textMobile className="w-full md:hidden" />
      </div>
    </WrapperPreviewBlock>
  );
}
