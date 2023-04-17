/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
      },
      colors: {
        'orange': '#e0894f',
        'aqua': '#77bfb7',
        'cobalt': '#45818e',
        'rocky': '#e8a87c',
        'purple': '#c38d9e',
        'bluegreen': '#41b3a3',
        'whitesmoke': '#f5f5f5',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}

