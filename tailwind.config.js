/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/*.tsx"],
  theme: {
    extend: {
      width: {
        '128': '23rem',
      }
    },
  },
  plugins: [],
}

