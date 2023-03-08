/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "1/15": "6.66667%",
        "14/15": "93.33333%",
      },
    },
  },
  plugins: [],
};
