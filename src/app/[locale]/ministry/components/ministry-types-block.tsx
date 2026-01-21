import { MinistryTypeBlock } from "./ministry-type-block";
import { useLocale } from "next-intl";
import { useMemo } from "react";

import { ministryCardsData } from "../data";
import type { Language } from "@/types/global";
import type { MinistryCard } from "../types";

export function MinistryTypesBlock() {
  const locale = useLocale() as Language;

  const translatedCards = useMemo(() =>
    ministryCardsData.map((card: MinistryCard) => ({
      ...card,
      subtitle: card.subtitle[locale],
      description: card.description[locale],
    })), [locale]
  );

  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[50px] max-sm:grid-cols-1 lg:py-[100px] xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {translatedCards.map((card) => (
        <MinistryTypeBlock
          key={card.title}
          title={card.title}
          subtitle={card.subtitle}
          textModal={card.description}
          src={card.previewImage}
          carouselImages={card.carouselImages}
        />
      ))}
    </div>
  );
}
