import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import Script from "next/script";
import Providers from "./providers";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { locales } from "@/lib/i18n/i18n";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Церква - Джерело життя | Ласкаво просимо до нашої церковної спільноти, де кожен з вас може знайти духовне збагачення, підтримку та нові дружні стосунки.",
  description:
    "Церква належить до євангельського харизматичного руху, протестанської гілки християнства. Est.1990",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className={cn("scroll-smooth", montserrat.className)}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W599839B7S', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <GoogleAnalytics /> {/* Track route changes */}
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
