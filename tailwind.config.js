/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#291C3A",
        secondary: "#331C52",
        tertiary: "#8121D0",
        lightPrimary: "#DCCFED",
        lightSecondary: "#E1EBED",
        lightTertiary: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
