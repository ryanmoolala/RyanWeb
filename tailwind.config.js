/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'roboto-slab': ['Roboto Slab', 'serif'],        
      },
      colors: {
        'red-500': '#F56565',
        'charcoal-gray': '#333333',
        'gunmetal-gray': '#2a2a2a',
        'onyx-black': '#353839',
        'dark-slate-gray': '#2F4F4F',
        'ebony-black': '#555D50',
        'jet-black': '#343434',
        'raisin-black': '#242124',
        'space-cadet': '#2C2D4B',
      },
      keyframes: {
        underline: {
          '0%': { width: '0', backgroundPosition: '0% 50%' },
          '50%': { width: '100%', backgroundPosition: '100% 50%' },
          '100%': { width: '0', backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        underline: 'underline 3.5s infinite',
      },
    },
  },
  plugins: [],
}

