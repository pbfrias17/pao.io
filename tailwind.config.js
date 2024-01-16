/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-cat': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-radial-cab': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
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
