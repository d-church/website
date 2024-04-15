import { getTranslate } from "@/lib/tolgee/server";

export async function HeadingBlock() {
  const t = await getTranslate();
  return (
    <div className="container flex justify-center">
      <h3 className="text-3xl font-bold uppercase text-graphite">
        {t("church-page.heading-block")}
      </h3>
    </div>
  );
}
