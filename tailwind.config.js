/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dac8ba',
          500: '#FF7200',
          900: '#FF3D00',
        },
        dark: {
          100: 'rgb(12, 12, 12)',
          200: 'rgb(23, 23, 23)',
          300: 'rgb(51, 51, 51)',
          400: 'rgb(110, 110, 110)',
          500: 'rgb(180, 180, 180)',
        },
        light: {
          100: 'rgb(236, 236, 236)',
          200: 'rgb(226, 226, 226)',
          300: 'rgb(199, 199, 199)',
        },
      }
    },
  },
  plugins: [],
}
