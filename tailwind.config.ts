import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Імпортуємо plugin для коректного типу

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1660px",
      },
    },
    extend: {
      screens: {
        "2xl": "1660px",
        "3xl": "2020px",
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        graphite: "var(--graphite)",
        "graphite-hsl": "hsl(var(--graphite-hsl))",
        "hover-blue": {
          DEFAULT: "var(--hover-blue)",
          300: "var(--hover-blue-300)",
        },
        "error-red": "var(--error-red)",
        gray: { DEFAULT: "var(--gray)", light: "var(--gray-light)" },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", display: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-out": "fade-out 1s forwards",
      },
      boxShadow: {
        "custom-hover-blue": "0px 4px 30px 0 #0e93987f",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addComponents }) => {
      addComponents({
        ".custom-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "2px",
            backgroundColor: 'rgba(138, 138, 138, 0.1)'
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(138, 138, 138, 0.9)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
        },
      });
    }),
  ],
};

export default config;
