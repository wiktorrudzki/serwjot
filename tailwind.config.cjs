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
      secondary: '#3d3d3d',
      primary: '#f9f9f9',
      background: '#f0f0f0',
    },
    extend: {
      backgroundImage: {
        'home-desktop-background': 'url(./assets/images/home-desktop.jpg)',
        'home-mobile-background': 'url(./assets/images/home-mobile.jpg)',
        shadow:
          'linear-gradient(90deg,rgb(0 0 0 / 80%) 5%,rgb(0 0 0 / 65%) 33%,rgb(0 0 0 / 10%) 90%);',
        'mobile-shadow':
          'linear-gradient(90deg,rgb(0 0 0 / 75%) 10%,rgb(0 0 0 / 60%) 40%,rgb(0 0 0 / 10%) 90%);',
      },
      boxShadow: {
        custom: '0px 6px 12px rgb(0 0 0 / 33%)',
        'service-hover-shadow': '0px 0px 30px -2px rgba(66, 68, 90, 1)',
        'input-shadow': 'inset 0 1px 1px rgb(0 0 0 / 8%)',
      },
      animation: {
        'front-btn': 'frontBtn 5s forwards',
        'back-btn': 'backBtn 5s forwards',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

