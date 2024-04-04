import { createServerInstance as originalCreateServerInstance } from "@tolgee/react/server";
import { useLocale } from "next-intl";

import { TCreateServerInstance } from "@/types/toglee-service-instance";
import { ALL_LOCALES, getStaticData, TolgeeBase } from "./shared";

const createServerInstance =
  originalCreateServerInstance as TCreateServerInstance;
const instance = createServerInstance({
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

export const getTranslate = instance.getTranslate;
export const getTolgee = instance.getTolgee;
export const T = instance.T;
