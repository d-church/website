import { useTranslations } from "next-intl";

export function MainHeaderBlock() {
  const t = useTranslations("head.h1");
  return <h1 className="sr-only">{t("contacts")}</h1>;
}
