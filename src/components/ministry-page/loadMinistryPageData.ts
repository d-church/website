import parse from "html-react-parser";

import {
  getMinistryCards,
  getMinistryHero,
  MinistryCard,
} from "@/data/ministry";

export const loadMinistryPageData = async () => {
  const ministryHero = getMinistryHero();
  const ministryCards = getMinistryCards();

  const previewBlockData = {
    imageSrc: ministryHero.image,
    title: ministryHero.title,
    parsedText: parse(ministryHero.description),
  };

  return {
    previewBlockData,
    ministryCards,
  };
};

export type { MinistryCard };
