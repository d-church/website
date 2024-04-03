// server.tsx

import { createServerInstance } from "@tolgee/react/server";
import { useLocale } from "next-intl";

import { ALL_LOCALES, getStaticData, TolgeeBase } from "./shared";

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: useLocale,
  createTolgee: async (locale) =>
    TolgeeBase().init({
      staticData: await getStaticData(ALL_LOCALES),
      observerOptions: {
        fullKeyEncode: true,
      },
      language: locale,
      // using custom fetch to avoid aggressive caching
      fetch: async (input, init) => {
        const data = await fetch(input, { ...init, next: { revalidate: 0 } });
        return data;
      },
    }),
});
