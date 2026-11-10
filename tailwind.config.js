/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#061727',
          850: '#091f35',
          800: '#0d253f',
          750: '#102e4d',
          700: '#16385d',
        },
        brand: {
          blue: '#0284c7',
          accent: '#0ea5e9',
          light: '#e0f2fe',
          surface: '#f0f4f9',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

