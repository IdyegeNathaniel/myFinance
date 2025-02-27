/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {gridTemplateColumns: {
      "30/70": "30% 70%",},},
  },
  plugins: [],
}

