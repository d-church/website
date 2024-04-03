// shared.ts

import { DevTools, FormatSimple, Tolgee } from "@tolgee/web";

export const ALL_LOCALES = ["uk"];

export const DEFAULT_LOCALE = "uk";

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {};
  for (const lang of languages) {
    result[lang] = (await import(`../i18n/${lang}.json`)).default;
  }
  return result;
}

export function TolgeeBase() {
  return Tolgee().use(FormatSimple()).use(DevTools()).updateDefaults({
    apiKey,
    apiUrl,
  });
}
