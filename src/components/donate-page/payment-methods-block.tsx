import { useTranslations } from "next-intl";
import Image from "next/image";

import { LiqPayButton } from "../donation-ministry/liq-pay-button";

import { Link } from "@/app/navigation";

export function PaymentMethodsBlock() {
  const t = useTranslations();
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
      <div className="group rounded-sm border border-gray-200 p-5 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          <div className="mb-6 flex items-center space-x-6 lg:mb-0">
            <div>
              <h3 className="mb-2 text-2xl font-medium text-gray-900">
                {t("donate-page.payments-block.privat24-label")}
              </h3>
              <p className="text-gray-600">
                {t("donate-page.payments-block.privat24-desc")}
              </p>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex h-40 w-40 flex-col items-start justify-start">
              <Image
                src="/static/qr-code.webp"
                alt=""
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="group flex flex-col justify-between rounded-sm border border-gray-200 p-5 shadow-md transition-all duration-300 hover:shadow-lg">
        <h3 className="mb-3 text-2xl font-medium text-gray-900">
          {t("donate-page.payments-block.liqpay-label")}
        </h3>
        <p className="mb-6 leading-relaxed text-gray-600">
          {t("donate-page.payments-block.liqpay-desc")}
        </p>
        <div>
          <LiqPayButton className=" size-lg rounded-2xl bg-[#232323] px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-[#0E9398] group-hover:scale-105">
            {t("donate-page.preview-block.button-donate")}
          </LiqPayButton>
        </div>
      </div>

      <div className="group flex flex-col justify-between rounded-sm border border-gray-200 p-5 shadow-md transition-all duration-300 hover:shadow-lg">
        <h3 className="mb-3 text-2xl font-medium text-gray-900">
          {t("donate-page.preview-block.button-donate-ministries")}
        </h3>
        <p className="mb-6 leading-relaxed text-gray-600">
          {t("donate-page.payments-block.ministries-desc")}
        </p>
        <div className="flex">
          <Link
            href="/donate/ministry"
            className="size-lg inline-flex h-10 items-center justify-center whitespace-nowrap rounded-2xl bg-[#232323] px-8 py-4 text-sm font-medium text-white ring-offset-background transition-all duration-200 hover:bg-[#0E9398] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:scale-105"
          >
            {t("donate-page.preview-block.button-donate")}
          </Link>
        </div>
      </div>

      <div className="rounded-sm border border-gray-200 p-5 shadow-md transition-all duration-300 hover:shadow-lg lg:col-span-3">
        <div className="flex flex-col lg:items-start">
          <div className="mb-3 flex flex-1 items-center space-x-6">
            <div>
              <h3 className="mb-2 text-2xl font-medium text-gray-900">
                {t("donate-page.payments-block.privat-iban.title")}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                {t("donate-page.payments-block.privat-iban.receiver-label")}
              </p>
              <p className="font-bold text-gray-800">
                {t("donate-page.payments-block.privat-iban.receiver-value")}
              </p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                {t("donate-page.payments-block.privat-iban.bank-label")}
              </p>
              <p className="font-bold text-gray-800">{t("donate-page.payments-block.privat-iban.bank-value")}</p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">{t("donate-page.payments-block.privat-iban.iban-label")}</p>
              <p className="font-bold text-gray-800">
                {t("donate-page.payments-block.privat-iban.iban-value")}
              </p>
            </div>
            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">{t("donate-page.payments-block.privat-iban.edrpou-label")}</p>
              <p className="font-bold text-gray-800">{t("donate-page.payments-block.privat-iban.edrpou-value")}</p>
            </div>

            <div className="group">
              <p className="uppercase tracking-wide text-gray-700">
                {t("donate-page.payments-block.privat-iban.purpose-label")}
              </p>
              <p className="font-bold text-gray-800">{t("donate-page.payments-block.privat-iban.purpose-value")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
