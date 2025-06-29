/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000000',
        'accent': '#ff0000',
        'gray-dark': '#222222',
        'gray-light': '#aaaaaa',
        'lime-green': '#ADFF2F',
      },
      fontFamily: {
        sans: ['var(--font-gothic)', 'sans-serif'],
        serif: ['var(--font-mincho)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
