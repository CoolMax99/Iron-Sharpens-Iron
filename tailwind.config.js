/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#132339',
        secondary: '#C69760',
        accent: '#F5F6F0',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Merriweather', 'serif'],
      },
      animation: {
        'scroll-left': 'scroll-left 8s linear infinite',
        'scroll-right': 'scroll-right 8s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}