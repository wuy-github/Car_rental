/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        accent: "#54c6a8",
        darkbg: "#1E293B",
      },
    },
  },
  plugins: [],
};
