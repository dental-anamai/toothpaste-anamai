/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'sans-serif'],
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
      fontOpticalSizing: {
        'auto': 'auto',
      },
      fontVariationSettings: {
        'default': '"wdth" 100',
      },
    },
  },
  plugins: [require("preline/plugin")],
};
