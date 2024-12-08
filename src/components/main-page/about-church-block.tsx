import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutChurch() {
  const t = useTranslations();
  return (
    <div className="relative after:absolute after:top-0 after:-z-[1] after:h-full after:w-full">
      <Image
        src="/static/background-church.jpg"
        alt="Background for About Church"
        fill
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover"
      />
      <div className="container flex flex-col items-center justify-center space-y-[20px] py-[11px] xl:flex-row xl:gap-[160px] xl:space-y-0 xl:py-[61px]">
        <div className="text-center py-[30px] px-4 sm:py-[50px] sm:px-7">
          <div className="mb-5 sm:mb-10">
            <h1 className="text-[40px] sm:text-[78.4px] font-thin tracking-[10px] sm:tracking-[28px] text-white font-roboto">
              {t("main-page.about-church-block.church")}
            </h1>
            <p className="text-[18px] sm:text-[25.2px] mt-5 sm:mt-7 leading-[1.6] max-w-[90%] sm:max-w-[980px] mx-auto text-black font-montserrat">
              {t("main-page.about-church-block.description")}
            </p>
          </div>
          <div>
            <h2 className="text-[20px] sm:text-[28px] mb-5 sm:mb-7 font-light text-white font-roboto">
              {t("main-page.about-church-block.potoks")}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-[15px] sm:gap-[42px]">
              <div className="px-[20px] sm:px-[42px] py-[15px] sm:py-[21px] rounded-[15px] sm:rounded-[21px] bg-white/40 text-black transition-transform font-roboto">
                <span className="text-black text-[20px] sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-1")}
                </span>
                <br />
                <span className="text-[14px] sm:text-[16.6px] mt-[5px] sm:mt-[8.2px] block text-black">
                  {t("main-page.about-church-block.morning")}
                </span>
              </div>
              <div className="px-[20px] sm:px-[42px] py-[15px] sm:py-[21px] rounded-[15px] sm:rounded-[21px] bg-white/40 text-black transition-transform font-roboto">
                <span className="text-black text-[20px] sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-2")}
                </span>
                <br />
                <span className="text-[14px] sm:text-[16.6px] mt-[5px] sm:mt-[8.2px] block text-black">
                  {t("main-page.about-church-block.day")}
                </span>
              </div>
              <div className="px-[20px] sm:px-[42px] py-[15px] sm:py-[21px] rounded-[15px] sm:rounded-[21px] bg-white/40 text-black transition-transform font-roboto">
                <span className="text-black text-[20px] sm:text-[27.4px]">
                  {t("main-page.about-church-block.time-3")}
                </span>
                <br />
                <span className="text-[14px] sm:text-[16.6px] mt-[5px] sm:mt-[8.2px] block text-black">
                  {t("main-page.about-church-block.youth")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
