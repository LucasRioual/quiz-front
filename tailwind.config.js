/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lexend': ['Lexend', 'sans-serif'],
      'OneNine': ['OneNine', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': '#1A0A59',
        'primary': '#E5386F',
        'secondary': '#C5E538',
      },
    },
  },
  plugins: [],
}

