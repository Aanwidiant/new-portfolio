import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        light: "#E6ECF2",
        'light-etd': "#F5F7F8",
        dark: "#0f172a",
        'dark-etd': "#334155",
        primary: "#14B8A6",
        gray: "#9ca3af",
        info: "#0284c7",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#dc2626",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        sans: ["Montserrat", "Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
