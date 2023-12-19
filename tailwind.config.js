/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xm: "375px",
        sm: "480px",
        sd: "650px",
        md: "768px",
        ml: "992px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}