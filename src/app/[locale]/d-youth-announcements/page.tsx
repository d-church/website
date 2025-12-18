import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import type { Language } from "@/types";
import { AnnounceItem } from "./announce-item";
import { InstagramIcon, YouTubeIcon } from "./icons";
import { LanguageToggle } from "./language-toggle";
import backgroundImage from "./static/background.jpg";
import logoIcon from "./static/logo.svg";
import telegramIcon from "./static/telegram.png";

import { Link } from "@/app/navigation";
import DYouthAnnouncementsService, {
  type AnnouncementItem,
} from "@/services/d-youth-announcements.service";

export default async function DYouthAnnouncementsPage({
  params: { locale },
}: {
  params: { locale: Language };
}) {
  unstable_setRequestLocale(locale);

  const announcementData = await DYouthAnnouncementsService.getAnnouncements({
    language: locale,
  });

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#1a1a1a",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Верхня права смуга (хедер) */}
      <div
        className="ribbon-unfold-top absolute"
        style={{
          width: "16.67vw",
          height: "0",
          top: "-50vh",
          right: "10px",
          transform: "rotate(-25deg)",
          transformOrigin: "center",
          backgroundColor: "#741dff",
          opacity: 0,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-12 py-8 sm:px-12 md:py-12 lg:max-w-5xl lg:px-16 xl:max-w-6xl xl:px-20">
        {/* Language Toggle Button */}
        <LanguageToggle />

        {/* Header */}
        <div className="mb-10 px-3">
          <h1
            className="mb-4 text-7xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-8xl xl:text-9xl"
            style={{
              fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
              fontWeight: 600,
            }}
          >
            {(locale as Language) === "uk" ? (
              <>
                ОГОЛО
                <br className="sm:hidden" />
                ШЕННЯ
              </>
            ) : (
              <span className="block text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
                AN
                <br className="sm:hidden" />
                NOUNCE
                <br className="sm:hidden" />
                MENTS
              </span>
            )}
          </h1>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6">
          {announcementData?.announcements?.length > 0 ? (
            announcementData.announcements.map(
              (announcement: AnnouncementItem) => (
                <AnnounceItem key={announcement.id} data={announcement} />
              )
            )
          ) : (
            <div className="py-8 text-center text-white">
              <p>
                {(locale as Language) === "uk"
                  ? "Немає анонсів"
                  : "No announcements"}
              </p>
            </div>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <a
            href="https://www.instagram.com/d.youth.lviv/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <InstagramIcon
              size={48}
              color="white"
              className="h-10 w-10 sm:h-10 sm:w-10 lg:h-10 lg:w-10"
            />
          </a>

          <a
            href="https://youtube.com/@dyouthlviv?si=MvQVUCMYPeVx2zOT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <YouTubeIcon
              size={48}
              color="white"
              className="h-10 w-10 sm:h-10 sm:w-10 lg:h-10 lg:w-10"
            />
          </a>

          <a
            href="https://t.me/DYouth_NEWS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src={telegramIcon.src}
              alt="Telegram"
              width={40}
              height={40}
              className="h-10 w-10 sm:h-10 sm:w-10 lg:h-10 lg:w-10"
            />
          </a>

          <Link
            href="/"
            className="transition-transform hover:scale-110"
            style={{ filter: "brightness(0) invert(1)" }}
          >
            <Image
              src={logoIcon}
              alt="D.Church Website"
              width={120}
              height={32}
              className="h-8 w-auto sm:h-8 lg:h-8"
            />
          </Link>
        </div>
      </div>

      {/* Нижня ліва смуга (футер) */}
      <div
        className="ribbon-unfold-bottom absolute"
        style={{
          width: "16.67vw",
          height: "0",
          bottom: "-50vh",
          left: "10px",
          transform: "rotate(-25deg)",
          transformOrigin: "center",
          backgroundColor: "#741dff",
          opacity: 0,
        }}
      />
    </div>
  );
}

export const revalidate = 300;
