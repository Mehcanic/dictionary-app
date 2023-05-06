/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fontPrimary: {
          light: '#2D2D2D',
          dark: '#FFFFFF',
        },
        fontSecondary: {
          light: '#757575',
          dark: '#757575',
        },
        fontAccent: {
          light: '#A445ED',
          dark: '#A445ED',
        },
        background: {
          light: '#FFFFFF',
          dark: '#050505',
        },
        error: {
          light: '#FF5252',
          dark: '#FF5252',
        },
        inputBackground: {
          light: '#F4F4F4',
          dark: '#1F1F1F',
        },
        decorativeLine: {
          light: '#E9E9E9',
          dark: '#3A3A3A',
        },
      },
      fontFamily: {
        sansSerif: ['Inter', 'sans-serif'],
        sans: ['Lora', 'serif'],
        monospace: ['Inconsolata', 'monospace'],
      },
      fontSize: {
        headingLarge: ['64px'],
        headingMedium: ['24px'],
        headingSmall: ['20px'],
        bodyMedium: ['18px'],
        bodySmall: ['14px'],
      },
      fontSpace: {
        headingLarge: ['77px'],
        headingMedium: ['29px'],
        headingSmall: ['24px'],
        bodyMedium: ['24px'],
        bodySmall: ['17px'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fill: (theme) => theme('textColor'),
    },
  plugins: [],
  }
}