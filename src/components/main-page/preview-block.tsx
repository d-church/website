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
        <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
        <div className="hidden xl:block">
          <Icons.textTitle className="w-full" />
          <Icons.textUnderTitle className="w-full xl:mt-[50px]" />
          <Icons.textWelcome className="w-full xl:mt-[30px]" />
        </div>
        <Icons.textMobile className="w-full xl:hidden" />
        <p className="mt-[80px] text-2xl font-thin">
          {t("main-page.preview-block.hash-tag")}
        </p>
      </div>
    </WrapperPreviewBlock>
  );
}
