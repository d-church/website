import { type TProps } from "@tolgee/react";
import { type TolgeeInstance } from "@tolgee/web";

import Resource from "../lib/i18n/uk.json";

type Path<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ? T[Key] extends ArrayLike<any>
      ? Key | `${Key}.${Path<T[Key], Exclude<keyof T[Key], keyof any[]>>}`
      : Key | `${Key}.${Path<T[Key]>}`
    : Key
  : never;

export type TResourcePaths = (value: Path<typeof Resource>) => string;
export type CreateServerInstanceOptions = {
  createTolgee: (locale: string) => Promise<TolgeeInstance>;
  getLocale: () => string;
};

type MyServerInstance = {
  getTolgeeInstance: any;
  getTolgee: () => Promise<any>;
  getTranslate: () => Promise<TResourcePaths>;
  T: (props: TProps) => Promise<React.JSX.Element>;
};

export type TCreateServerInstance = ({
  createTolgee,
  getLocale,
}: CreateServerInstanceOptions) => MyServerInstance;
