/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/index.ejs',
    './views/login.ejs',
    './views/signup.ejs',
  ],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}