"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/app/navigation";
import { Accordion } from "./accordion";
import { InstagramIcon } from "./instagram-icon";
import backgroundImage from "./static/background.jpg";
import telegramIcon from "./static/telegram.png";
import logoIcon from "./static/logo.svg";

export function YouthAnnouncements() {
  const t = useTranslations("d-youth-announcements");
  const locale = useLocale();
  const pathname = usePathname();
  const newLocale = locale === "uk" ? "en" : "uk";

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#1a1a1a"
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Верхня права смуга (хедер) */}
      <div
        className="absolute ribbon-unfold-top"
        style={{
          width: "16.67vw",
          height: "0",
          top: "-50vh",
          right: "10px",
          transform: "rotate(-25deg)",
          transformOrigin: "center",
          backgroundColor: "#741dff",
          opacity: 0
        }}
      />

      <div className="relative z-10 container mx-auto px-12 sm:px-12 lg:px-16 xl:px-20 py-8 md:py-12 max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        {/* Language Toggle Button */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-10 lg:right-10 z-20">
          <Link
            href={pathname}
            locale={newLocale}
            className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
          >
            <span
              className="text-white font-bold text-md sm:text-sm lg:text-base"
              style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
            >
              {locale === "uk" ? "EN" : "UA"}
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 px-3">
          <h1
            className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
              fontWeight: 600
            }}
          >
            {locale === "uk" ? (
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
          <Accordion title={t("homeGroups.title")}>
            <p className="mb-4">{t("homeGroups.text")}</p>
            <a
              href="https://t.me/dyouthhomegroups_bot"
              className="text-purple-600 hover:text-purple-700 font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("homeGroups.botLink")}
            </a>
          </Accordion>

          <Accordion title={t("thanksgivingDay.title")}>
            <p className="mb-2 font-semibold">{t("thanksgivingDay.date")}</p>
            <p>{t("thanksgivingDay.text")}</p>
          </Accordion>

          <Accordion title={t("kairos.title")}>
            <p className="mb-4">{t("kairos.text")}</p>
            <p className="mb-4 font-semibold text-purple-700">{t("kairos.lastDay")}</p>
            <div className="space-y-3">
              <a
                href="https://forms.gle/L2duRuxSmgSXQdGf9"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("kairos.register")}
              </a>
              <br />
              <a
                href="https://drive.google.com/file/d/1irbfJ9yoCL49DqHWZQBSQYZjt2Nh1tuV/view?usp=drivesdk"
                className="text-purple-600 hover:text-purple-700 font-medium underline inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("kairos.moreInfo")} →
              </a>
            </div>
          </Accordion>

          <Accordion title={t("prayer.title")}>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("prayer.bot")}
                </p>
                <p className="mb-3">{t("prayer.botText")}</p>
                <a
                  href="https://t.me/dchurch_prayer_bot"
                  className="text-purple-600 hover:text-purple-700 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("prayer.botLink")}
                </a>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("prayer.here")}
                </p>
                <p>{t("prayer.hereText")}</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("prayer.youth")}
                </p>
                <p className="mb-1">{t("prayer.schedule")}</p>
                <p>{t("prayer.location")}</p>
              </div>
            </div>
          </Accordion>

          <Accordion title={t("membership.title")}>
            <p className="mb-4">{t("membership.text")}</p>
            <a
              href={`tel:${t("membership.phone")}`}
              className="text-purple-600 hover:text-purple-700 font-medium underline"
            >
              {t("membership.phone")}
            </a>
          </Accordion>

          <Accordion title={t("donations.title")}>
            <p className="mb-4">{t("donations.text")}</p>
            <Link
              href="/donate"
              className="text-purple-600 hover:text-purple-700 break-all underline inline-block"
            >
              {t("donations.button")}
            </Link>
          </Accordion>

          <Accordion title={t("heartForTheHouse.title")}>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.essence")}
                </p>
                <p className="mb-4">{t("heartForTheHouse.essenceText")}</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.goal")}
                </p>
                <p className="mb-4">{t("heartForTheHouse.goalText")}</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.idea")}
                </p>
                <p className="mb-4">{t("heartForTheHouse.ideaText")}</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.when")}
                </p>
                <p className="mb-4">{t("heartForTheHouse.whenText")}</p>
              </div>

              <div>
                <p className="mb-3 font-semibold text-black-700">
                  {t("heartForTheHouse.credentials")}
                </p>
                <p className="mb-1">{t("heartForTheHouse.receiver")}</p>
                <p className="mb-1">{t("heartForTheHouse.code")}</p>
                <p className="mb-1 break-all">{t("heartForTheHouse.account")}</p>
                <p className="mb-1">{t("heartForTheHouse.bank")}</p>
                <p className="mb-1">{t("heartForTheHouse.paypal")}</p>
                <p className="mb-4">{t("heartForTheHouse.contact")}</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.buildingProject")}
                </p>
                <p className="mb-3">{t("heartForTheHouse.buildingText")}</p>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.changes")}
                </p>
                <ul className="list-disc list-inside mb-3 space-y-1">
                  <li>{t("heartForTheHouse.change1")}</li>
                  <li>{t("heartForTheHouse.change2")}</li>
                  <li>{t("heartForTheHouse.change3")}</li>
                  <li>{t("heartForTheHouse.change4")}</li>
                  <li>{t("heartForTheHouse.change5")}</li>
                </ul>
                <p className="mb-3">{t("heartForTheHouse.together")}</p>
                <p className="mb-2 font-semibold text-black-700">
                  {t("heartForTheHouse.support")}
                </p>
                <p className="mb-3">{t("heartForTheHouse.supportText")}</p>
                <Link
                  href="/donate-building"
                  className="text-purple-600 hover:text-purple-700 font-medium underline inline-block mb-3"
                >
                  {t("heartForTheHouse.link")} →
                </Link>
                <p className="mt-4 font-semibold">{t("heartForTheHouse.thanks")}</p>
              </div>
            </div>
          </Accordion>

          <Accordion title={t("ministry.title")}>
            <p className="mb-4">{t("ministry.text")}</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSefJM3KrINTP-_dE8LPBtq_zdAQ9REVzLKu7rxrI3VVq3Te0A/viewform"
              className="text-purple-600 hover:text-purple-700 break-all underline inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ministry.link")}
            </a>
          </Accordion>

          <Accordion title={t("cafe.title")}>
            <p>{t("cafe.text")}</p>
          </Accordion>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center items-center gap-6 sm:gap-8 lg:gap-10">
          <a
            href="https://www.instagram.com/d.youth.lviv/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <InstagramIcon
              size={48}
              color="white"
              className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10"
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
              className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10"
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
              className="w-auto h-8 sm:h-8 lg:h-8"
            />
          </Link>
        </div>
      </div>

      {/* Нижня ліва смуга (футер) */}
      <div
        className="absolute ribbon-unfold-bottom"
        style={{
          width: "16.67vw",
          height: "0",
          bottom: "-50vh",
          left: "10px",
          transform: "rotate(-25deg)",
          transformOrigin: "center",
          backgroundColor: "#741dff",
          opacity: 0
        }}
      />
    </div>
  );
}

