// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'drift': 'drift 10s infinite ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-10px, 10px) rotate(5deg)' },
          '50%': { transform: 'translate(10px, -10px) rotate(-5deg)' },
          '75%': { transform: 'translate(-10px, -10px) rotate(3deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },
       boxShadow: {
        'glow-white': '0 0 40px rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // ⬅️ Tambahkan ini
      },
    },
  },
  plugins: [],
};


