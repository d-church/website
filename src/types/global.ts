// import { useLocale } from "next-intl";

declare module "next-intl" {
  export function useLocale(): Language;
}

export type Language = "uk" | "en";
export type TranslatedString = Record<Language, string>;

