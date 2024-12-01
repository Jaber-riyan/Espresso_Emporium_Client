import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-duo': "url('https://i.ibb.co.com/YTJ5t4p/4.png'), url('https://i.ibb.co.com/WFj8k3h/5.png')",
      },
      backgroundPosition: {
        'left-top-right-bottom': 'left top, right bottom',
      },
      backgroundSize: {
        'contain-duo': 'contain, contain',
      },

    },
  },
  plugins: [
    daisyui,
  ],
}