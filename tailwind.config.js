/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#0A3200',
        'secondary-green': '#727E1B',
        'tertiary-green': '#9CAE23',
      },
      fontFamily: {
        'archivo-eb': ['Archivo ExtraBold', 'regular'],
        'archivo-li': ['Archivo LightItalic', 'italic'],
        archivo: ['Archivo Regular', 'regular'],
      },
    },
  },
  plugins: [],
};
