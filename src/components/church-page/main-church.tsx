import { useTranslations } from "next-intl";
import Image from "next/image";

export function MainChurchBlock() {
  const t = useTranslations();
  return (
    <div className="relative py-[0px] after:absolute after:top-0 after:-z-[1] after:h-full after:w-full">
      <Image
        src="/static/background-about-block-dark.jpg"
        alt="Background for About block"
        fill
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover "
      />

      <div className="container flex flex-col items-center justify-center space-y-[20px] py-[11px] xl:flex-row xl:gap-[160px] xl:space-y-0 xl:py-[61px] ">
        <div className="px-4 py-[30px] text-center sm:px-7 sm:py-[50px] ">
          <div className="mb-5 xl:pt-[150px] pt-[60px] sm:mb-10">
            <h1 className="font-roboto text-[40px] font-thin tracking-[10px] text-white sm:text-[120px] sm:tracking-[50px]">
              {t("main-page.about-church-block.church")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
