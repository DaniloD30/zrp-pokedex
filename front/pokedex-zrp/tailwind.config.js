/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "760px",
        lg: "960px",
        default: "1200px",
      },
    },
  },
  plugins: [],
};
