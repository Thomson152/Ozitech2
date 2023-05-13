/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "1000px",
        lg: "1280px",
        xl: "1440px",
        laptop: "1024px",
        tablet: "1086px",
        testing:'1164px',
        desktop: "1280px",
      },

      colors: {
        bgDark: "rgba(28, 24, 24, 0.8)",
        NavBg: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
