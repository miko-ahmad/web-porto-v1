/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Ganti font default ke Poppins
      },
      screens: {
        xs: "360px",
        sm: "580px",
        lg: "1024px",
        xl: "1250px",
        // 'xxxl': '1600px'
      },
      dropShadow: {
        darkShadow: "1px 1px 2px rgba(0,0,0,0.6)",
      },
      boxShadow: {
        "custom-dark": "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
      },
      backgroundImage: {
        "wavy-dark": "url('/svg/Sprinkle.svg')",
        "wavy-light": "url('/svg/sprinkle-light.svg')",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      colors: {
        darkOne: "#121212",
        darkTwo: "#1e1e1f",
        darkTri: "#282829",
        darkFour: "#2E2E2E",
        darkFive: "#fe5722",
        lightBg: "#f5f7fa",
        lightOne: "#f8f8f8",
        lightTwo: "#FFFFFF",
        lightTri: "#465981",
        lightFour: "#717171",
        light: "#fbfbfe",
        secondary: "#fe5722",
        fontOne: "#696b6e",
        "gray-field": "#EBEBEB",
        navbar: "#04243A",
        "card-hover": "#081B2970",

        darkText: "#ffffff", // Dark mode text
        lightText: "#000000", // Light mode text
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-287%)" },
        },
      },
    },
  },
  variants: {
    backgroundColor: ["dark", "light"],
    textColor: ["dark", "light"],
  },
  plugins: [],
};
