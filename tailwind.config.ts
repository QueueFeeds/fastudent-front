// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // darkMode 설정 추가
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        tomato: "120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      },
      colors: {
        "fastu-gray5": "#f0f0f2",
        "fastu-gray3": "#a0a0b0",
        "fastu-gray1": "#404060",
        "fastu-gray2": "#707085",
        black: "#000",
        chocolate: "#bb6600",
        "fastu-black": "#101035",
        white: "#fff",
        gray: {
          "100": "#212121",
          "200": "rgba(255, 255, 255, 0)",
        },
        "grey-scale-grey-4": "#737982",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "sf-pro-text": "'SF Pro Text'",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
