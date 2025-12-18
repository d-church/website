"use client";

import { useState } from "react";

import { StarCircleIcon, TriangleDown, TriangleUp } from "./icons";

export const Accordion = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative mb-2">
      {/* Circle with star */}
      <div
        className="absolute left-0 top-0 z-10 transition-transform duration-500"
        style={{
          transform: `translate(-50%, -50%) ${
            isOpen ? "rotate(35deg)" : "rotate(0deg)"
          }`,
        }}
      >
        <StarCircleIcon size={20} />
      </div>
      <div className="accordion-corner-cut relative w-full overflow-visible bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-0 flex w-full items-center justify-between bg-white px-4 py-3 text-left transition-all hover:bg-gray-50 sm:px-6 sm:py-4 lg:py-5"
          style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
        >
          <span
            className="text-base font-semibold uppercase tracking-wide sm:text-lg lg:text-xl"
            style={{ fontWeight: 600, color: "#731cfe" }}
          >
            {title}
          </span>
          {isOpen ? (
            <TriangleUp size={24} className="flex-shrink-0" />
          ) : (
            <TriangleDown size={24} className="flex-shrink-0" />
          )}
        </button>
        {isOpen && (
          <div
            className="px-4 pb-3 text-sm leading-relaxed text-gray-700 sm:px-6 sm:pb-4 sm:text-base lg:pb-5 lg:text-lg"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
