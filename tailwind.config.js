/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBg: 'hsl(0, 0%, 99%)',
        darkBg: 'hsl(207, 26%, 17%)',
        lightText: 'hsl(200, 15%, 8%)',
        darkElements: 'hsl(209, 23%, 22%)',
        lightInput: 'hsl(0, 0%, 50%)',
      },
    },
  },
  plugins: [],
}