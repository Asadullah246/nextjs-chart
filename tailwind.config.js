const uiCoreTailwindConfig = require("@true-wealth/ui-core/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...uiCoreTailwindConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@true-wealth/ui-core/dist/**/*.{js,mjs,html}"
  ]
};
