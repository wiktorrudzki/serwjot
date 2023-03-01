/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#f9f9f9',
      background: '#f0f0f0',
      nav: '#333',
    },
    extend: {
      backgroundImage: {
        'home-background': 'url(./assets/images/home.jpg)',
        shadow:
          'linear-gradient(90deg,rgb(0 0 0 / 80%) 5%,rgb(0 0 0 / 65%) 33%,rgb(0 0 0 / 10%) 90%);',
        'mobile-shadow':
          'linear-gradient(90deg,rgb(0 0 0 / 80%) 5%,rgb(0 0 0 / 50%) 40%,rgb(0 0 0 / 10%) 90%);',
      },
      boxShadow: {
        custom: '0px 6px 12px rgb(0 0 0 / 33%)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

