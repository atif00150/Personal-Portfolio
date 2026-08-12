/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#c85a28',
          hover: '#b24d1e',
        },
        sage: {
          DEFAULT: '#d9e5dc',
          dark: '#1f2c23',
        },
        emeraldGreen: {
          DEFAULT: '#38a159',
          light: '#e6f5eb',
          accent: '#43de6c',
        }
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'Lato', 'sans-serif'],
        sans: ['var(--font-lato)', 'var(--font-jakarta)', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
