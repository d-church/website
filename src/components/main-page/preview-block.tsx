import { Icons } from "../ui/icons";

// import Image from "next/image";

import { getTranslate } from "@/lib/tolgee/server";

export async function PreviewBlock() {
  const t = await getTranslate();
  return (
    <div className="relative flex h-full min-h-screen items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden after:absolute after:h-full after:w-full after:bg-black/70">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 top-0 min-h-full min-w-full object-cover"
        >
          <source src="/static/preview-block-video.mp4" type="video/mp4" />
        </video>
        {/* <Image
      src="/static/preview-block-picture.webp"
      alt="Preview section picture"
      fill
      className="object-cover"
    /> */}
      </div>
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
    </div>
  );
}
