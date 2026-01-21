import type { TranslatedString } from "@/types/global";

export interface MinistryCard {
  title: TranslatedString;
  subtitle: TranslatedString;
  description: TranslatedString;
  previewImage: string;
  carouselImages: string[];
}

export interface MinistryHero {
  title: TranslatedString;
  description: TranslatedString;
  image: string;
}
