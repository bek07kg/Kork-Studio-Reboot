/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['LT Wave Text', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.aspect-w-16': {
          position: 'relative',
          paddingBottom: '56.25%',
        },
        '.aspect-h-9': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
      });
    },
  ],
};