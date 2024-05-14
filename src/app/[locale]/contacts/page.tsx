import { unstable_setRequestLocale } from "next-intl/server";

import { FillSpaceBlock, GoogleMapBlock, ScheduleBlock } from "@/components/contacts-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

export default function ContactsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <FillSpaceBlock/>
      <ScheduleBlock />
      <GoogleMapBlock />
      <Footer />
    </>
  );
}
