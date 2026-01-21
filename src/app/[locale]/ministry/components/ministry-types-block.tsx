import { MinistryTypeBlock } from "./ministry-type-block";
import { useLocale } from "next-intl";

import { ministryCardsData } from "../data";

export function MinistryTypesBlock() {
  const locale = useLocale() as "uk" | "en";
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[50px] max-sm:grid-cols-1 lg:py-[100px] xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {ministryCardsData.map((card, index) => (
        <MinistryTypeBlock
          key={card.title}
          title={card.title}
          subtitle={card.subtitle[locale]}
          textModal={card.description[locale]}
          src={card.previewImage}
          carouselImages={card.carouselImages}
        />
      ))}
    </div>
  );
}
