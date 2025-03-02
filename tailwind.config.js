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
        'sm': '580px',  
        'lg': '1024px',  
        'xl': '1250px', 
        // 'xxxl': '1600px'
      },
      dropShadow: {
        'darkShadow': '1px 1px 2px rgba(0,0,0,0.6)', 
      },
      boxShadow: {
        "custom-dark": "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(to top, #dfe9f3 0%, white 100%);",
        "dark-gradient": "linear-gradient(to right, #434343 0%, black 100%)",
        "custom-gradient":  "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0.00%, 13.30%) 97%)",
        "gradient-dark-hsl": "linear-gradient(to bottom right, hsl(0, 0%, 7%), hsl(0, 0%, 10%))",
        
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      colors: {
        darkOne: "#121212",
        darkTwo: "#1e1e1f",
        darkTri: "#282829",
        darkFour: "#272828",
        darkFive: "#fe5722",
        lightBg: "#f5f7fa",
        lightOne: "#f9fafb",
        lightTwo: "#ffffff",
        lightTri: "#465981",
        lightFour: "#717171",
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
}

