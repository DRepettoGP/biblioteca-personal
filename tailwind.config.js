/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        paper: '#f8f4ec',
        chapter: '#7c3aed',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 32, 51, 0.12)',
      },
    },
  },
  plugins: [],
};
