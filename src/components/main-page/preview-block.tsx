import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";
import { WrapperPreviewBlock } from "../wrapper-preview-block/wrapper-preview-block";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <WrapperPreviewBlock>
      <div className="container absolute z-10 flex h-full flex-col items-center justify-between pb-[100px] pt-[160px] text-white xl:justify-center xl:py-0">
        <h1 className="hidden">{t("main-page.preview-block.title")}</h1>
        <p className="hidden">{t("main-page.preview-block.under-title")}</p>
        <p className="hidden">{t("main-page.preview-block.welcome-text")}</p>
        <div className="hidden xl:mt-[2.8rem] xl:block">
          <Icons.textTitle className="w-full" />
          <Icons.textUnderTitle className="w-full xl:mt-[1rem]" />
          <Icons.textWelcome className="w-full xl:mt-[1.57rem]" />
        </div>
        <Icons.textMobile className="w-full xl:hidden" />
        <p className="mt-[5rem] text-2xl font-thin">
          {t("main-page.preview-block.hash-tag")}
        </p>
      </div>
    </WrapperPreviewBlock>
  );
}
