/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Light Grey
        primary: {
          50: '#fafafa',   // Almost white
          100: '#f5f5f5',  // Very light grey
          200: '#e5e5e5',  // Light grey
          300: '#d4d4d4',  // Medium light grey
          400: '#a3a3a3',  // Medium grey
          500: '#737373',  // Mid grey
          600: '#525252',  // Dark grey
          700: '#404040',  // Darker grey
          800: '#262626',  // Very dark grey
          900: '#171717',  // Almost black
        },
        // Map orange to grey for backward compatibility
        orange: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',  // Main grey
          600: '#525252',  // Darker grey
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Map blue to grey for backward compatibility
        blue: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      }
    },
  },
  plugins: [],
}
