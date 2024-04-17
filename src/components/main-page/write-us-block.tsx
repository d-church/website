import { useTranslations } from "next-intl";
import Image from "next/image";

import { Icons } from "../ui/icons";
import { WriteUsForm } from "../write-us-form/form";

export function WriteUsBlock() {
  const t = useTranslations();
  return (
    <div className="relative py-[60px] after:absolute after:top-0 after:-z-[1] after:h-full after:w-full after:bg-black/70">
      <Image
        src="/static/background-write-us-block.webp"
        fill
        alt="Background write us block"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <div className="container flex flex-col justify-center space-y-[60px] md:max-w-[520px] xl:max-w-full xl:flex-row xl:space-x-[167px] xl:space-y-0 xl:py-[60px]">
        <div className="flex flex-col items-center space-y-[38px] xl:w-1/2">
          <Icons.message />
          <p className="text-xl font-medium text-white">
            {t("main-page.write-us-block.text")}
          </p>
        </div>
        <div className="xl:w-1/2">
          <WriteUsForm />
        </div>
      </div>
    </div>
  );
}
