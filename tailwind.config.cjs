/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Fira Code", "monospace"],
        body: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
