/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 'Libre Franklin',
      backgroundImage: {
        "hero": "url('./src/assets/bg.svg')"
      },
      colors: {
        'primary': '#C66C494D'
      }
    },
  },
  plugins: [],
}

