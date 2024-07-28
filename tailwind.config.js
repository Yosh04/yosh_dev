/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ["'Itim', cursive"],
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 30%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite 1s',
      }
  },
  },
  plugins: [],
  
}