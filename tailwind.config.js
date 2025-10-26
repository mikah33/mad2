/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Gold Palette
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37',  // Classic Gold
          600: '#b8860b',  // Dark Gold
          700: '#9d7009',
          800: '#7c5a07',
          900: '#654805',
        },
        // Premium Black/Gray Palette
        luxury: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0a0a0a',  // Deep Black
        },
        // Keep orange for backwards compatibility but update to more luxurious tones
        orange: {
          500: '#d4af37',  // Map to gold
          600: '#b8860b',
        }
      }
    },
  },
  plugins: [],
}
