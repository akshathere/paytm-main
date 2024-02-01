/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#7F7F7F",
        "gray-30":"#1F2937",
        "blue-30":"#CBD5E1",
        "blue-31":"#7F8C9F",
        "dark-blue":"#1F2937",
        "white-30":"#F3F4F6"
      }
    },
  },
  plugins: [],
}

