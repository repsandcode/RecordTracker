/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/js/main.js',
    './views/**/*.{ejs}',
  ],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}