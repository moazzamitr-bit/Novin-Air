import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        novin: {
          black: "var(--novin-black)",
          obsidian: "var(--novin-obsidian)",
          midnight: "var(--novin-midnight)",
          navy: "var(--novin-navy)",
          red: "var(--novin-red)",
          deepRed: "var(--novin-deep-red)",
          gold: "var(--novin-gold)",
          lightGrey: "var(--novin-grey-light)",
          grey: "var(--novin-grey)",
          white: "var(--novin-white)"
        }
      },
      boxShadow: {
        luxury: "0 28px 90px rgba(0, 0, 0, 0.48)",
        gold: "0 18px 70px rgba(210, 171, 103, 0.16)",
        red: "0 16px 46px rgba(237, 28, 36, 0.24)"
      },
      maxWidth: {
        novin: "1320px"
      },
      fontFamily: {
        fa: [
          "ZT Nature BON",
          "Vazirmatn",
          "IRANSansX",
          "Tahoma",
          "sans-serif"
        ],
        en: ["Inter", "Avenir", "Manrope", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 0%, rgba(210,171,103,0.14), transparent 32%), radial-gradient(circle at 80% 10%, rgba(237,28,36,0.08), transparent 28%), linear-gradient(180deg, #05080b 0%, #07111a 45%, #030506 100%)"
      }
    }
  },
  plugins: []
};

export default config;
