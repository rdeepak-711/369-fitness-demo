/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#111111',
        'brand-red': '#D72638',
        'brand-white': '#FFFFFF',
        'brand-light': '#EFEFEF',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
      },
    },
  },
  plugins: [],
}

