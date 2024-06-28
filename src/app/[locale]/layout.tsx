import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import Providers from "./providers";

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
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
