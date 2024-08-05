/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-bg': "#121212",
      },
      
    },
  },
  variants: {
    textColor: ['responsive','visited', 'hover']
  },
  plugins: [
    
  ],
}

