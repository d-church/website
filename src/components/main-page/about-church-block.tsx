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
        <div className="container flex flex-col items-center justify-center space-y-[50px] py-[11px] xl:flex-row xl:gap-[160px] xl:space-y-0 xl:py-[61px]">
        <div className="text-center py-[70px] px-7">
          <div className="mb-10">
            <h1 className="text-[78.4px] font-thin tracking-[28px] text-white font-roboto">
            {t("main-page.about-church-block.church")}
            </h1>
            <p className="text-[25.2px] mt-7 leading-[1.6] max-w-[980px] mx-auto text-black font-montserrat">
            {t("main-page.about-church-block.description")}
            </p>
          </div>
          <div>
            <h2 className="text-[28px] mb-7 font-light text-white font-roboto">
            {t("main-page.about-church-block.potoks")}
            </h2>
            <div className="flex justify-center gap-[42px]">
              <div className="px-[42px] py-[21px] rounded-[21px] bg-white/40 text-black   transition-transform font-roboto">
                <span className="text-black text-[27.4px]">{t("main-page.about-church-block.time-1")}</span>
                <br />
                <span className="text-[16.6px] mt-[8.2px] block text-black">{t("main-page.about-church-block.morning")}</span>
              </div>
              <div className="px-[42px] py-[21px] rounded-[21px] bg-white/40 text-black   transition-transform font-roboto">
                <span className="text-black text-[27.4px]">{t("main-page.about-church-block.time-2")}</span>
                <br />
                <span className="text-[16.6px] mt-[8.2px] block text-black">{t("main-page.about-church-block.day")}</span>
              </div>
              <div className="px-[42px] py-[21px] rounded-[21px] bg-white/40 text-black   transition-transform font-roboto">
                <span className="text-black text-[27.4px]">{t("main-page.about-church-block.time-3")}</span>
                <br />
                <span className="text-[16.6px] mt-[8.2px] block text-black">{t("main-page.about-church-block.youth")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
