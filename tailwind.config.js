/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-fontawesome'),
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
}

