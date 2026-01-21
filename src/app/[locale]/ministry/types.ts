export interface MinistryImage {
  size: number;
  filename: string;
  downloadLink: string;
}

export interface MinistryCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  previewImage: string;
  carouselImages: MinistryImage[];
  position: number;
}

export interface MinistryHero {
  title: string;
  description: string;
  image: string;
}
