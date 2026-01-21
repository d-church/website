import parse from "html-react-parser";
import Image from "next/image";
import { useLocale } from "next-intl";

import { ministryHeroData } from "../data";

export function PreviewBlock() {
  const locale = useLocale() as Language;
  const parsedText = parse(ministryHeroData.description[locale]);

  return (
    <div className="lg:justify-baseline relative flex h-full max-h-[700px] min-h-[50vh] items-center justify-center bg-slate-200">
      <>
        <div className="absolute h-full w-full after:absolute after:h-full after:w-full after:overflow-hidden after:bg-black/70">
          <Image
            className="object-cover"
            src={ministryHeroData.image}
            alt="The Preview an Image of the page"
            fill
          />
        </div>
        <div className="z-[1] mt-[30px] max-w-[1077px] text-center text-white max-lg:max-w-[90%] max-sm:py-[75px] sm:mt-[0px] sm:pt-[120px] md:mt-[0px] md:pt-[140px]  xl:mt-[0px] xl:pt-[210px]">
          <p className="font-roboto mb-[30px] text-[32px] font-thin uppercase tracking-[5px] text-white sm:text-[58px] sm:tracking-[15px] lg:text-[78.4px] lg:tracking-[28px]">
            {ministryHeroData.title[locale]}
          </p>
          <div className="font-montserrat mx-auto mt-4 max-w-[90%] pb-[0px] text-[12px] leading-[1.6] text-white sm:mt-6 sm:max-w-[980px] sm:pb-[100px] sm:text-[18px] md:pb-[130px] lg:text-[20px]">
            {parsedText}
          </div>
        </div>
      </>
    </div>
  );
}
