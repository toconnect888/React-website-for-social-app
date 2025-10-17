import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./app/components/navbar.tsx",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        lightBackground: "#f9f9f9",
        yellowBackground: "#ffba03",
        veryLightGray: "#f0f0f0",
        lightBlue: "#dbf2ff",
        lightYellowBackground: "#ffcf25ab",
        lightText: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
