import daisyUI from 'daisyui';
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss', '@tailwindcss/typography', daisyUI],
};
