/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '32rem', // 512px
      },
      height: {
        '128': '32rem', // 512px
      },
    },
  },
  plugins: [],
};
