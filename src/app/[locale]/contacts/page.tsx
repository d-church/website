import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import {
  FillSpaceBlock,
  // GoogleMapBlock,
  ScheduleBlock,
} from "@/components/contacts-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";

const GoogleMapBlock = dynamic(
  () => import("@components/contacts-page/google-map-block"),
  {
    ssr: false,
  }
);

export default function ContactsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <FillSpaceBlock />
      <ScheduleBlock />
      <div className="h-[650px] xl:h-[500px]">
        <GoogleMapBlock />
      </div>
      <Footer />
    </>
  );
}
