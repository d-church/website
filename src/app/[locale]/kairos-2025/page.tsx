import { unstable_setRequestLocale } from "next-intl/server";

import centrallogo from "./kairos-logos/Central-Rectangle.svg";
import leftlogo from "./kairos-logos/Left-Rectangle.svg";
import rightlogo from "./kairos-logos/Right-Rectangle.svg";

console.log(centrallogo);

export default function Kairos2025Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main style={{ width: 1200 }}>
      <header
        // className="relative flex h-[400px] w-screen items-stretch overflow-hidden rounded-b-lg shadow-xl"
        style={{
          width: "100%",
          background: "green",
          margin: "auto",
          height: 100,
        }}
      >
        {/* Лівий трикутник */}
        {/* <img
          src={leftlogo.src}
          alt="Left rectangle"
          // className="-mr-[2px] h-full flex-1 object-cover"
          style={{ width: 150, position: "absolute", left: 0, top: 0 }}
        /> */}
        {/* <img
          src={centrallogo.src}
          alt="Central rectangle"
          className="-mx-[2px] h-full flex-1 object-cover"
        /> */}
        {/* <img
          src={rightlogo.src}
          alt="Right rectangle"
          // className="-ml-[2px] h-full flex-1 object-cover"
          style={{ width: 150, top: 0 }}
        /> */}
      </header>
    </main>
  );
}
