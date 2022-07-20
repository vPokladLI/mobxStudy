/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      marckScript: ['MarckScript-Regular'],
    },
    extend: {
      boxShadow: {
        set: '3px 3px 5px #c5c5c5 -3px -3px 5px #ffffff',
        inset: 'inset 3px 3px 5px #c5c5c5 inset -3px -3px 5px #ffffff',
      },
    },
    body: {
      backgroundColor: '#f7f7f7',
    },
  },
  plugins: [],
};
