"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

interface RegisterButtonProps {
  className?: string;
}

export default function RegisterButton({ className }: RegisterButtonProps) {
  const handleClick = () => {
    window.open("https://forms.gle/s1c49NvTEBwVkoz88", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`${poppins.className} ${className || ""}`}
    >
      Реєстрація
    </button>
  );
}

