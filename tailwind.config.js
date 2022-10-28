/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        chakraPetch: ["Chakra Petch", "sans-serif"]
      },
    },
  },
  plugins: [],
}
