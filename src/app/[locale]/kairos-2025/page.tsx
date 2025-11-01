import { unstable_setRequestLocale } from "next-intl/server";

import background from "./kairos-logos/Background.svg";
import Logo from "./kairos-logos/logo.svg";

export default function Kairos2025Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="w-full md:w-[1200px] mx-auto">
      <header
        className="relative w-full min-h-[500px] md:h-[500px] overflow-hidden flex flex-col md:flex-row items-stretch bg-[#C16161] md:bg-transparent"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#C16161] md:hidden z-[1]"></div>
        <div className="relative z-[2] flex-1 py-10 px-5 md:px-[60px] flex flex-col justify-start text-white">
          <div className="mb-5">
            <h1 className="text-[24px] md:text-[32px] font-light m-0 text-white/90 tracking-[0.5px]">
              Кайрос
            </h1>
            <p className="text-sm md:text-base font-light mt-2 text-white/90">
              Бог, Церква і Світ
            </p>
          </div>

          <div className="mt-auto mb-10">
            <h2 className="text-[36px] md:text-[48px] font-bold m-0 leading-[1.2]">
              Курс
            </h2>
            <h2 className="text-[36px] md:text-[48px] font-bold mt-2 leading-[1.2]">
              Бог,
            </h2>
          </div>
        </div>

        <div className="relative z-[2] flex-1 py-10 px-5 md:px-[60px] flex flex-col justify-start text-white items-start md:items-end text-left md:text-right">
          <div className="mb-5">
            <p className="text-sm md:text-base font-light m-0 text-white/90">
              листопад
            </p>
            <p className="text-[28px] md:text-[36px] font-bold mt-2 text-white/95">
              2025
            </p>
          </div>

          <button className="mt-5 py-3 px-6 bg-white text-[#333] border-none rounded-lg text-sm md:text-base font-semibold cursor-pointer mb-auto">
            Реєстрація
          </button>

          <div className="mt-auto text-left md:text-right">
            <h2 className="text-[36px] md:text-[48px] font-bold m-0 leading-[1.2]">
              Кайрос
            </h2>
            <h2 className="text-[36px] md:text-[48px] font-bold mt-2 mb-5 leading-[1.2]">
              Церква і Світ
            </h2>

            <div className="text-white md:text-[#333] mt-[30px]">
              <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                <span className="text-base">📍</span>
                <span className="text-sm md:text-base font-semibold">Локація</span>
              </div>
              <p className="text-xs md:text-sm my-1">м. Львів,</p>
              <p className="text-xs md:text-sm my-1">вул. Замарстинівська 37</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10 md:py-[60px] px-5 md:px-[40px] text-[#333] bg-white">
        <p className="text-lg leading-[1.6] mb-5">
          Курс «Кайрос» — більше, ніж просто навчання.
        </p>

        <p className="text-base leading-[1.6] mb-[30px]">
          Курс «Кайрос» — це інтерактивний курс, у якому ми вчимося розуміти Божу
          волю для цього світу та бачити, як кожен із нас може долучитися до її
          виконання.
        </p>

        <p className="text-base leading-[1.6] mb-5 font-semibold">
          Курс складається з чотирьох частин:
        </p>

        <ul className="list-none p-0 m-0 mb-10">
          <li className="flex items-center gap-2.5 mb-3 text-base">
            <span className="text-xs">◆</span>
            <span>Біблійна частина</span>
          </li>
          <li className="flex items-center gap-2.5 mb-3 text-base">
            <span className="text-xs">◆</span>
            <span>Культурна частина</span>
          </li>
          <li className="flex items-center gap-2.5 mb-3 text-base">
            <span className="text-xs">◆</span>
            <span>Історична частина</span>
          </li>
          <li className="flex items-center gap-2.5 mb-3 text-base">
            <span className="text-xs">◆</span>
            <span>Стратегічна частина</span>
          </li>
        </ul>

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">📅</span>
            <span className="text-base font-semibold">Дата</span>
          </div>
          <p className="text-base my-1">21.11-23.11</p>
          <p className="text-base my-1">28.11-29.11</p>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">📍</span>
            <span className="text-base font-semibold">Локація</span>
          </div>
          <p className="text-base my-1">
            «Джерело життя», вул. Замарстинівська, 37.
          </p>
        </div>

        <p className="text-base leading-[1.6] mt-[30px]">
          Реєстрація за посиланням:{" "}
          <a
            href="#"
            className="underline text-[#8B2E2E] cursor-pointer"
          >
            Реєстрація
          </a>
        </p>
      </section>
    </main>
  );
}
