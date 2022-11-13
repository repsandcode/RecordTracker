/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/css/style.css",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require('@tailwindcss/forms'),
  ],
}