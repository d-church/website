import { useTranslations } from "next-intl";
import Image from "next/image";

export function PreviewBlock() {
  const t = useTranslations("ministry-page");
  return (
    <div className="lg:justify-baseline relative flex h-full min-h-screen items-center justify-center">
      <div className="absolute h-full w-full after:absolute after:h-full after:w-full after:overflow-hidden after:bg-black/70">
        <Image
          className="object-cover"
          src="/static/ministry-preview-block-photo.webp"
          alt="The Preview an Image of the page"
          fill
        />
      </div>
      <div className="z-[1] max-w-[1077px] text-center  text-white max-lg:max-w-[90%]">
        <p className="mb-[30px] text-[1.875rem]/[2.28rem] font-bold uppercase max-lg:mb-[22px]">
          {t("preview.title")}
        </p>
        <p className="text-[1.25rem]/[1.875rem] font-medium max-lg:text-[1.125rem]/[1.875rem]">
          {t("preview.text")}
        </p>
      </div>
    </div>
  );
}
