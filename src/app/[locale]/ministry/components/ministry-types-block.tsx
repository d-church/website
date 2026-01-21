import { MinistryTypeBlock } from "./ministry-type-block";

import { ministryCardsData } from "../data";

export function MinistryTypesBlock() {
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[50px] max-sm:grid-cols-1 lg:py-[100px] xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {ministryCardsData.map((card, index) => (
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
