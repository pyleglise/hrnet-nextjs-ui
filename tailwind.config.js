/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#b584ff',
        'secondary-color': '#6a63d4',
        'tertiary-color': '#31438e',
        'bg-color': '#00011c',
        'bg-color-light': '#082450',
        'bg-color-xlight': '#bad5ff',
        'bg-color-xxlight': '#c9dff8',
        alert: 'rgb(208, 0, 0)',
        info: 'rgb(0, 122, 0)',
        'clear-text': 'rgb(255, 255, 255)',
        'really-dark': '#00011c',
        'btn-light-blue': '#97b1bf',
      },
    },
  },
  plugins: [],
}
