/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        optimamedium: ["Optima-Medium", "cursive"],
        optimabold: ["Optima-Bold"],
        avenirheavy: ["Avenir-Heavy"],
        myanmarmn: ["MyanmarMN"],
        avenirblack: ["Avenir-Black"],
        
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('cssnano')({
      preset: 'default',
   }),
  ],
}
