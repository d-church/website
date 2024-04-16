import Image from "next/image";

import { Icons } from "../ui/icons";

import { getTranslate } from "@/lib/tolgee/server";

export async function QrCodesBlock() {
  const t = await getTranslate();
  return (
    <div className="container mb-[100px] flex flex-col items-center">
      <p className="text-gray mt-[50px] w-[1070px] text-center text-[20px]/[30px] font-medium">
        {t("donate-page.qr-codes-block.intro")}
      </p>
      <div className="mt-[100px] flex gap-[305px]">
        <div className="flex w-[434px] flex-col items-center">
          <Icons.textUA className="mb-[18px]" />
          <Image
            className="mb-[45px]"
            src="/static/qr-code.webp"
            alt=""
            width={118}
            height={118}
          />
          <p className="text-gray text-center text-[20px]/[30px]">
            {t("donate-page.qr-codes-block.ua-qr")}
          </p>
        </div>
        <div className="flex w-[434px] flex-col items-center">
          <Icons.textUSA className="mb-[18px]" />
          <Image
            className="mb-[45px]"
            src="/static/qr-code.webp"
            alt=""
            width={118}
            height={118}
          />
          <p className="text-gray text-center text-[20px]/[30px]">
            {t("donate-page.qr-codes-block.usa-qr")}
          </p>
        </div>
      </div>
    </div>
  );
}
