/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    xs: "360px",
    sm: "460px",
    md: "768px",
    lg: "976px",
    xl: "1440px",

    extend: {
      colors:{
        bgDark : 'rgba(28, 24, 24, 0.8)'
      },
    },
  },
  plugins: [],
};
