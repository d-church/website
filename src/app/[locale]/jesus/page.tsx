import { unstable_setRequestLocale } from "next-intl/server";

import { Header } from "@/components/header/header-site";
import { PreviewBlock } from "@/components/jesus-page";
import { WriteUsBlock } from "@/components/main-page";
import { Footer } from "@/components/footer/footer-site";
import { PrayerBlock } from "@/components/church-page/prayer-block";

export default function JesusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
    <Header/>
    <PreviewBlock/>
    <PrayerBlock/>
    <WriteUsBlock/>
    <Footer/>
    </>
  );
}
