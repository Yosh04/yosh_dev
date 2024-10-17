/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta esta ruta según la estructura de tu proyecto
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
        },
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite 1s',
        'spin-y': 'spinY 1s ease-in-out infinite',
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
        'rotate-y-360': 'rotateY(360deg)',
      },
      transitionTimingFunction: {
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
};
