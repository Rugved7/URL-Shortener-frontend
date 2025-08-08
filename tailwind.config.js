/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        modalSlide: {
          '0%': { transform: 'translateY(-1%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        modalSlide: 'modalSlide 0.3s ease-out'
      }
    },
  },
  plugins: [],
}