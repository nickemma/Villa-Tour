/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'red',
        secondary: 'green',
        dimWhite: '#f5f5f5',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  plugins: [],
};
