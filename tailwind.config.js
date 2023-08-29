/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'header': "url('/assets/woman.png')",
      },
      colors:{
        'funnyOrange': '#FFA902',
        'pagcolor':'#101010',
        'backpag':'#ffe400',
        specialgrey:'#868383'
      }
      
    },
  },
  plugins: [],
}
