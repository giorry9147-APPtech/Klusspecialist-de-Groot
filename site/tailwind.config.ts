import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#f5f5f4",
          100: "#e7e5e4",
          200: "#d6d3d1",
          300: "#c2beb9",
          400: "#9f9992",
          500: "#3B4040",
          600: "#343838",
          700: "#2d3131",
          800: "#272b2b",
          900: "#222626",
        },
        navy: "#3B4040",
        navyDark: "#2d3131",
        accent: "#edcc26",
        accentHover: "#d8b91f",
        soft: "#dedede",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
