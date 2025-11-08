import { unstable_setRequestLocale } from "next-intl/server";
import { YouthAnnouncements } from "@/components/d-youth-announcements";

export default function DYouthAnnouncementsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <YouthAnnouncements />;
}

