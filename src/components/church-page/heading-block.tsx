import { useTranslations } from "next-intl";

export function HeadingBlock() {
  const t = useTranslations();
  return (
    <div className="container flex justify-center">
      <h3 className="text-3xl font-bold uppercase text-graphite">
        {t("church-page.heading-block")}
      </h3>
    </div>
  );
}
