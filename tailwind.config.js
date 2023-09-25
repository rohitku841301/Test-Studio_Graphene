/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne"],
        sans: ["Work Sans"],
      },
      colors: {
        headerBg: "#1A1A1A",
        headerFont: "#626262",
        footerBtn: "#F07E15",
        gray50: "#FFFFFF80",
        bodyHeading: "#000000",
        itemTitle: "#000000",
        itemPara: "#16161580",
        shopcart: "#f5f5f5", 


      },
    },
  },
  plugins: [],
};
