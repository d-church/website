"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { CopyToClipboard } from "@/components/common/copy-to-clipboard";
import privatQr from "./static/privat_qr.png";
import mainImage from "./static/main_image.webp";

import { Donate } from "@/constants";
import { cn, isMobileDevice } from "@/lib/utils";

export function BuildingCredentialsBlock() {
  const t = useTranslations("donate-building-page.credentials");
  const isMobile = isMobileDevice();

  return (
    // весь блок
    <div className="mx-auto mb-[20px] flex w-[80%] flex-col gap-[40px] px-0 md:mb-[20px] md:w-[70%] md:gap-[70px] md:px-4 lg:mb-[70px] lg:w-[70%] xl:w-[1070px] xl:px-0">
      <div className="flex justify-center">
        <Image
          src={mainImage}
          alt="Main image"
          width={800}
          height={800}
          className="w-full max-w-[400px] object-contain md:max-w-[600px] lg:max-w-[800px] xl:max-w-[950px] 2xl:max-w-[1100px]"
        />
      </div>
      <div className="w-full gap-[70px] md:w-full xl:flex-row xl:gap-8">
        <div className="mb-[20px] flex flex-col gap-[30px] md:mb-10 lg:flex-row">
          <div
            className={cn(
              // privat
              "group flex w-full flex-col justify-between rounded-sm border border-gray-200 p-5 shadow-md",
              "transition-all duration-300 hover:shadow-lg xl:w-1/2"
            )}
          >
            {isMobile ? (
              <>
                <div>
                  <Image
                    className="mb-3"
                    src="/static/logo_Privat24.png"
                    alt="Privat24"
                    width={160}
                    height={42}
                  />
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {t("privat-desc")}
                  </p>
                </div>
                <div>
                  <a
                    href={Donate.privatbank.building}
                    className={cn(
                      "size-lg inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-2xl",
                      "bg-[#232323] px-8 py-4 text-sm font-medium text-white ring-offset-background",
                      "transition-all duration-200 hover:bg-[#0E9398]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:pointer-events-none disabled:opacity-50 group-hover:scale-105"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("paypal-button")}
                  </a>
                </div>
              </>
            ) : (
              <div className="flex items-start gap-6">
                <div className="flex flex-col flex-1">
                  <Image
                    className="mb-3"
                    src="/static/logo_Privat24.png"
                    alt="Privat24"
                    width={160}
                    height={42}
                  />
                  <p className="leading-relaxed text-gray-600">
                    {t("privat-desc")}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={privatQr}
                    alt="Privat24 QR code"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div
            className={cn(
              // paypal
              "group flex w-full flex-col justify-between rounded-sm border border-gray-200 p-5 shadow-md",
              "transition-all duration-300 hover:shadow-lg xl:w-1/2"
            )}
          >
            <div>
              <Image
                className="mb-3"
                src="/static/paypal_logo.png"
                alt="PayPal"
                width={160}
                height={42}
              />
              <p className="mb-6 leading-relaxed text-gray-600">
                {t("paypal-desc")}
              </p>
            </div>
            <div>
              <a
                href={Donate.paypal.building}
                className={cn(
                  "size-lg inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-2xl",
                  "bg-[#232323] px-8 py-4 text-sm font-medium text-white ring-offset-background",
                  "transition-all duration-200 hover:bg-[#0E9398]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-50 group-hover:scale-105"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("paypal-button")}
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mb-5 w-full rounded-sm border border-gray-200 p-5 shadow-md lg:mb-[0]", // реквізити
            "transition-all duration-300 hover:shadow-lg xl:w-full"
          )}
        >
          <div className="flex flex-col lg:items-start">
            <div className="mb-3 flex flex-1 items-center space-x-6">
              <div>
                <h3 className="mb-6 text-center text-2xl font-medium text-gray-900 lg:text-left">
                  {t("header")}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
              <div className="group">
                <p className="uppercase tracking-wide text-gray-700">
                  {t("receiver-label")}
                </p>
                <div className="font-bold text-gray-800">
                  <CopyToClipboard value={t("receiver-value")} />
                </div>
              </div>
              <div className="group">
                <p className="uppercase tracking-wide text-gray-700">
                  {t("code-label")}
                </p>
                <div className="font-bold text-gray-800">
                  <CopyToClipboard value={t("code-value")} />
                </div>
              </div>
              <div className="group">
                <p className="uppercase tracking-wide text-gray-700">
                  {t("account-label")}
                </p>
                <div className="break-all font-bold text-gray-800">
                  <CopyToClipboard value={t("account-value")} />
                </div>
              </div>
              <div className="group">
                <p className="uppercase tracking-wide text-gray-700">
                  {t("bank-label")}
                </p>
                <div className="font-bold text-gray-800">
                  <CopyToClipboard value={t("bank-value")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
