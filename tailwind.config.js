/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          300: '#ff9e9e',
          500: '#ff6b6b',
          600: '#ff5252',
        },
        orange: {
          500: '#FF6B47',
          600: '#FF5533',
        }
      }
    },
  },
  plugins: [],
}
