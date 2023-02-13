/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#403E3F",
        yellow: {
          200: "#F2CB57"
        },
        brown: {
          100: "#73663F",
          200: "#59503F"
        },
        ice: {
          100: "#F2F2F2"
        }
      },
    },
  },
  plugins: [],
}