import uk from "./translation/uk.json";

type Messages = typeof uk;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
