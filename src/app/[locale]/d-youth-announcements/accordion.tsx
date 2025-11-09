"use client";

import { useState } from "react";
import { StarCircleIcon } from "./star-circle-icon";
import { TriangleDown } from "./triangle-down";
import { TriangleUp } from "./triangle-up";

export const Accordion = ({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2 relative">
      {/* Circle with star */}
      <div
        className="absolute left-0 top-0 z-10 transition-transform duration-500"
        style={{
          transform: `translate(-50%, -50%) ${
            isOpen ? "rotate(35deg)" : "rotate(0deg)"
          }`
        }}
      >
        <StarCircleIcon size={20} />
      </div>
      <div className="w-full bg-white overflow-visible accordion-corner-cut relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white px-4 sm:px-6 py-3 sm:py-4 lg:py-5 flex items-center justify-between text-left transition-all hover:bg-gray-50 relative z-0"
          style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
        >
          <span
            className="font-semibold text-base sm:text-lg lg:text-xl uppercase tracking-wide"
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
            className="px-4 sm:px-6 pb-3 sm:pb-4 lg:pb-5 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

