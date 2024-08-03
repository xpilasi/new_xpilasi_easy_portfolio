/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      backgroundColor:{
        'neon-grey':'#252525',
        'new-neon':'#282A36',
        'new-neon2':'#22222C',
        'dark-neon': '#1F1D44',
        'dark-neon-fade':'#453F9E',
        'neon-blueberry':'#9C62E5',
        'neon-pink':'#F87B91',
        'neon-water':'#84F7D4',
        'neon-green':'#3DFA90',
        'neon-orange':'#edca85',
        'almost-white':'#F8F8F8',
        'light-blueberry':'#EADDF9',
        'light-water':'#E4FBF9',
        'danny-grey': '#1D1D1D',
      },
      gradientColorStops: {
        'dark-neon': '#1F1D44', 
        'dark-neon-fade': '#453F9E',
        'neon-blueberry':'#9C62E5',
        'neon-pink':'#F87B91',
        'neon-orange':'#edca85',
        'neon-water':'#84F7D4',
        'neon-green':'#3DFA90',
      },
      backgroundImage: {
        
        'space': "url('/img/space.jpg')",
        
      },
      textColor:{
        'neon-water':'#84F7D4',
        'neon-pink':'#F87B91', 
        'neon-blueberry':'#9C62E5',
        'dark-neon-fade': '#453F9E',
        'neon-green':'#3DFA90',
        'new-neon':'#282A36',
        'new-neon2':'#22222C',
        'dark-neon': '#1F1D44',
        'new-neon2':'#22222C',
        'danny-grey': '#1D1D1D',
        
      },
      fontFamily:{
        burtons: 'burtons',
        titillumWebRegular: 'titillium_web_regular',
        titillumWebBold: 'titillium_web_bold',
        titillumWebBlack: 'titillium_web_black',
        bogartRegular: 'bogart_regular',
        montRegular: 'mont_regular',
        exo: 'exo',
        robotoMedium: 'roboto-medium',
        robotoLight: 'roboto-light',
      }
    },
  },
  plugins: [],
}
