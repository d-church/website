"use client";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const videoBackground = require("./video-background.mp4") as string;

export function BuildingPreviewBlock() {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[800px] flex-col items-center justify-center mb-[50px] xl:min-h-[900px]"
      )}
    >
      <div className="absolute h-full w-full overflow-hidden after:absolute after:h-full after:w-full after:bg-black/70">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute left-0 top-0 min-h-full min-w-full object-cover"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 mb-[60px] mt-[50px] px-4 lg:mb-[100px] lg:mt-[150px] lg:px-0">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] xl:text-5xl">
            Реконструкція церковної будівлі
          </h1>
          <p className="mb-8 text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-2xl">
            Це не просто ремонт — це новий етап зростання нашої громади! 🙌
          </p>

          <div className="max-w-3xl space-y-6 px-4 text-white lg:px-0">
            <div>
              <h2 className="mb-4 text-2xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-3xl">
                🏗️ Що змінюється:
              </h2>
              <ul className="space-y-3 text-left text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">
                <li>• Площа будівлі збільшується вдвічі</li>
                <li>• Нові, просторі кімнати для Недільної школи</li>
                <li>• Багатофункційний зал на третьому поверсі</li>
                <li>• Більше місць в основному залі</li>
                <li>
                  • Сучасний ремонт і новий рівень зручності у всіх приміщеннях
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] xl:text-2xl">
                💛 Ми будуємо разом — для зростання, служіння та поклоніння!
              </p>
              <p className="text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">🙏 Підтримайте проєкт!</p>
              <p className="mt-2 text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] xl:text-xl">
                Зробіть цільову пожертву та станьте частиною великих змін 💒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
