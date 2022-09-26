/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require("@tailwindcss/forms")
  ],
}