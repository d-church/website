import { useTranslations } from "next-intl";

import { WrapperPreviewBlock } from "../wrapper-preview-block/wrapper-preview-block";

export function PreviewBlock() {
  const t = useTranslations("ministry-page");
  return (
    <WrapperPreviewBlock className="lg:items-baseline">
      <div className="z-[1] max-w-[1077px] text-center  text-white max-lg:max-w-[90%] lg:mt-[316px]">
        <p className="mb-[30px] text-[1.875rem]/[2.28rem] font-bold uppercase max-lg:mb-[22px]">
          {t("preview.title")}
        </p>
        <p className="text-[1.25rem]/[1.875rem] font-medium max-lg:text-[1.125rem]/[1.875rem]">
          {t("preview.text")}
        </p>
      </div>
    </WrapperPreviewBlock>
  );
}
