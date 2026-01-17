import { MinistryTypeBlock } from "./ministry-type-block";

import { MinistryCard } from "@/data/ministry";

type MinistryTypesBlockProps = {
  ministryCards: MinistryCard[];
};

export function MinistryTypesBlock({ ministryCards }: MinistryTypesBlockProps) {
  return (
    <div className="container grid grid-cols-2 gap-[30px] whitespace-pre py-[50px] max-sm:grid-cols-1 lg:py-[100px] xl:grid-cols-[repeat(3,minmax(0,520px))]">
      {ministryCards.map((card) => (
        <MinistryTypeBlock
          key={card.id}
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
