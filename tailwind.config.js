/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Primary Blue Palette
        primary: {
          50: '#CAF0F8',   // Pale blue (lightest)
          100: '#90E0EF',  // Light blue
          200: '#90E0EF',  // Light blue
          300: '#48CAE4',  // Between light and medium
          400: '#00B4D8',  // Between light and medium
          500: '#0077B6',  // Medium blue (main)
          600: '#023E8A',  // Dark blue
          700: '#023E8A',  // Dark blue
          800: '#012A5E',  // Darker blue
          900: '#011D3F',  // Darkest blue
        },
        // Orange mapped to blue palette
        orange: {
          50: '#CAF0F8',   // Pale blue
          100: '#90E0EF',  // Light blue
          200: '#90E0EF',  // Light blue
          300: '#48CAE4',  // Between light and medium
          400: '#00B4D8',  // Accent blue
          500: '#0077B6',  // Medium blue (replaces orange-500)
          600: '#023E8A',  // Dark blue (replaces orange-600)
          700: '#023E8A',  // Dark blue
          800: '#012A5E',  // Darker blue
          900: '#011D3F',  // Darkest blue
        },
        // Blue palette (direct mapping)
        blue: {
          50: '#CAF0F8',   // Pale blue
          100: '#90E0EF',  // Light blue
          200: '#90E0EF',  // Light blue
          300: '#48CAE4',
          400: '#00B4D8',
          500: '#0077B6',  // Medium blue
          600: '#023E8A',  // Dark blue
          700: '#023E8A',
          800: '#012A5E',
          900: '#011D3F',
        }
      }
    },
  },
  plugins: [],
}
