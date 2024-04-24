import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import { PreviewBlock } from "@/components/jesus-page";
import { PrayerBlock } from "@/components/jesus-page/prayer-block";
import { WriteUsBlock } from "@/components/main-page";

export default function JesusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <PreviewBlock />
      <PrayerBlock />
      <WriteUsBlock />
      <Footer />
    </>
  );
}
