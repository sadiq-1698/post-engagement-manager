/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"], // Enable light and dark themes
  },
};
