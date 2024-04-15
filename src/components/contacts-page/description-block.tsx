import Image from "next/image";

import { getTranslate } from "@/lib/tolgee/server";

export async function DescriptionBlock() {
  const t = await getTranslate();
  return (
    <div className="container mb-[100px] mt-[100px] flex flex-col md:max-w-[795px] xl:max-w-full xl:flex-row xl:justify-center">
      <div className="flex flex-col justify-center text-[22px]/[30px] 2xl:max-w-[795px]">
        <p className="mb-[30px]">
          {t("contacts-page.description-block.text-1")}
        </p>
        <p className="mb-[30px] xl:mb-0">
          {t("contacts-page.description-block.text-2")}
        </p>
      </div>

      <Image
        className="h-[418px] xl:ml-[30px] xl:w-[700px] 2xl:w-[795px]"
        src="/static/background-write-us-block.webp"
        alt="An Image"
        width={795}
        height={418}
      />
    </div>
  );
}
