module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
  
      'grey': '#E0E0E0',
      'purple':'#C0B6FF',
      'white':'#FFFFFF',
    
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
