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
        light: {
          bg: "#f4f4f5",
          'bg-2': "#e2e8f0",
          fg: "#0f172a",
          'fg-2': "#334155",
          primary: "#0284c7",
        },

        dark: {
          bg: "#0f172a",
          'bg-2': "#1e293b",
          fg: "#e2e8f0",
          'fg-2': "#f4f4f5",
          primary: "#1e40af",
        },

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
