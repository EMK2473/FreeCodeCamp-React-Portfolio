module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          50: '#f4ffec',
          100: '#e1ffcb',
          // ... other shades
          500: '#84cc16'
          // ... other shades
        },
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}