import { unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";

import background from "./kairos-logos/backgroundchanged.svg";
import logo from "./kairos-logos/logo.svg";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

export default function Kairos2025Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="mx-auto w-full md:w-[1200px]">
      <header
        className="relative flex min-h-[500px] w-full flex-col items-stretch overflow-hidden bg-[#C16161] md:h-[500px] md:flex-row md:bg-transparent"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 z-[1] bg-[#C16161] md:hidden"></div>

        <div className="relative z-[2] flex flex-1 flex-col justify-start px-5 py-10 text-white md:px-[60px]">
          <div className="mb-5 flex min-w-0 items-center justify-between gap-4 overflow-hidden md:block md:gap-0 md:overflow-visible">
            <img
              src={logo.src}
              alt="Kairos logo"
              className="my-2 h-auto w-auto max-w-[40%] flex-shrink object-contain md:my-0 md:h-[70px] md:w-auto md:max-w-[200px] md:flex-shrink-0"
            />
            <button
              onClick={() =>
                window.open("https://kairos2025.com/register", "_blank")
              }
              className={`${poppins.className} mb-auto mt-5 hidden cursor-pointer rounded-3xl border-none bg-[rgb(243,232,232)] px-6 py-3 text-sm font-semibold text-[#333] md:block md:text-base`}
            >
              Реєстрація
            </button>
          </div>

          <div className="mb-6 text-center text-white md:hidden">
            <p
              className={`${poppins.className} m-0 text-[25px] font-medium leading-[1] text-white/90`}
            >
              листопад
            </p>
            <p
              className={`${poppins.className} mt-[4.8px] text-[34px] font-medium leading-[1] text-white/95`}
            >
              2025
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:hidden">
            <div className="flex items-center gap-4">
              <h2
                className={`${poppins.className} m-0 text-[36px] font-medium leading-[2.5]`}
              >
                Курс
              </h2>
              <h2
                className={`${poppins.className} m-0 text-[36px] font-medium leading-[1.2]`}
              >
                Кайрос
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <h2
                className={`${poppins.className} m-0 text-[36px] font-medium leading-[2.5]`}
              >
                Бог,
              </h2>
              <h2
                className={`${poppins.className} m-0 whitespace-nowrap text-[36px] font-medium leading-[1.2]`}
              >
                Церква і Світ
              </h2>
            </div>
          </div>

          <div className="mb-10 mt-auto hidden md:block">
            <h2
              className={`${poppins.className} m-0 text-[36px] font-medium leading-[2.5] md:translate-x-[60px] md:text-[75px]`}
            >
              Курс
            </h2>
            <h2
              className={`${poppins.className} mt-2 -translate-y-[50px] text-[36px] font-medium md:translate-x-[50px] md:text-[75px]`}
            >
              Бог,
            </h2>
          </div>
        </div>

        <div className="relative z-[2] flex flex-1 flex-col items-start justify-start px-5 py-10 text-left text-white md:items-end md:px-[60px] md:text-right">
          <div className="absolute -left-[65px] top-[10%] z-[3] hidden text-center text-white md:block">
            <p
              className={`${poppins.className} m-0 text-[25px] font-medium leading-[1] text-white/90 md:text-[35px]`}
            >
              листопад
            </p>
            <p
              className={`${poppins.className} mt-2 text-[34px] font-medium leading-[1] text-white/95 md:text-[40px]`}
            >
              2025
            </p>
          </div>

          <button
            onClick={() =>
              window.open("https://kairos2025.com/register", "_blank")
            }
            className={`${poppins.className} mb-auto mt-5 hidden cursor-pointer rounded-3xl border-none bg-[rgb(243,232,232)] px-6 py-3 text-sm font-semibold text-[#333] md:block md:text-base`}
          >
            Реєстрація
          </button>

          <div className="mt-auto text-left md:text-right">
            <h2
              className={`${poppins.className} absolute right-[90%] top-[44%] m-0 hidden text-[36px] font-medium leading-[1.2] md:block md:text-[70px]`}
            >
              Кайрос
            </h2>
            <h2
              className={`${poppins.className} absolute right-[73%] top-[63%] mb-5 mt-2 hidden whitespace-nowrap text-[36px] font-medium leading-[1.2] md:block md:text-[60px]`}
            >
              Церква і Світ
            </h2>

            <div className="absolute bottom-5 right-5 z-[3] text-left text-white md:absolute md:bottom-[126px] md:right-[30px] md:text-left md:text-[#333]">
              <div className="mb-2 flex items-center justify-start gap-2">
                <span className={`${poppins.className} text-base`}>📍</span>
                <span
                  className={`${poppins.className} text-sm font-semibold md:text-base`}
                >
                  Локація
                </span>
              </div>
              <p className={`${poppins.className} my-1 text-xs md:text-sm`}>
                м. Львів,
              </p>
              <p className={`${poppins.className} my-1 text-xs md:text-sm`}>
                вул. Замарстинівська 37
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-[#fff] to-[#f8f4f4] px-6 py-14 text-[#333] md:px-[60px] md:py-[80px]">
        <div className="mx-auto max-w-[900px]">
          <h2
            className={`${poppins.className} mb-6 text-3xl font-semibold text-[#8B2E2E] md:text-4xl`}
          >
            Курс «Кайрос» — більше, ніж просто навчання.
          </h2>

          <p
            className={`${poppins.className} mb-10 text-lg leading-relaxed text-[#444] md:text-xl`}
          >
            Курс «Кайрос» — це інтерактивний курс, у якому ми вчимося розуміти
            Божу волю для цього світу та бачити, як кожен із нас може долучитися
            до її виконання.
          </p>

          <h3
            className={`${poppins.className} mb-6 text-xl font-semibold text-[#8B2E2E]`}
          >
            Курс складається з чотирьох частин:
          </h3>

          <ul className="mb-12 grid gap-3 md:grid-cols-2">
            {[
              "Біблійна частина",
              "Культурна частина",
              "Історична частина",
              "Стратегічна частина",
            ].map((item, index) => (
              <li
                key={index}
                className={`${poppins.className} flex items-center gap-3 rounded-lg bg-[#f9eaea] px-4 py-3 text-base shadow-sm transition hover:bg-[#f5d9d9]`}
              >
                <span className="text-[#8B2E2E]">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-[#8B2E2E]">
              <span className="text-lg">📅</span>
              <span
                className={`${poppins.className} text-lg font-semibold tracking-wide`}
              >
                Дата
              </span>
            </div>
            <div
              className={`${poppins.className} text-base leading-relaxed text-[#333]`}
            >
              <p>21.11–23.11</p>
              <p>28.11–29.11</p>
            </div>
          </div>

          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2 text-[#8B2E2E]">
              <span className="text-lg">📍</span>
              <span
                className={`${poppins.className} text-lg font-semibold tracking-wide`}
              >
                Локація
              </span>
            </div>
            <p
              className={`${poppins.className} text-base leading-relaxed text-[#333]`}
            >
              «Джерело життя», вул. Замарстинівська, 37.
            </p>
          </div>

          <div
            className={`${poppins.className} mt-10 flex flex-col items-start md:flex-row md:items-center md:gap-3`}
          >
            <span className="text-base md:text-lg">
              Реєстрація за посиланням:
            </span>
            <a
              href="#"
              className="mt-2 rounded-full bg-[#8B2E2E] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#a94444] md:mt-0 md:text-base"
            >
              Реєстрація
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
