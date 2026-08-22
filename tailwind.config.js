/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#1e3a5f',
          dark: '#0f2340',
        },
        steel: {
          DEFAULT: '#4a5568',
          light: '#718096',
          dark: '#2d3748',
        },
        accent: {
          DEFAULT: '#dd6b20',
          light: '#ed8936',
          dark: '#c05621',
        },
        surface: {
          light: '#f7fafc',
          dark: '#0a1929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeCarousel: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeCarousel: 'fadeCarousel 1.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
