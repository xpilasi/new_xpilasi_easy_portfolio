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
        'dark-neon': '#1F1D44',
        'dark-neon-fade':'#453F9E',
        'neon-blueberry':'#9C62E5',
        'neon-pink':'#F353A9',
        'neon-water':'#84F7D4',
        'neon-orange':'#edca85',
      },
      gradientColorStops: {
        'dark-neon-bg': '#1F1D44', 
        'dark-neon-fade': '#453F9E',
        'neon-blueberry':'#9C62E5',
        'neon-pink':'#F353A9',
        'neon-orange':'#edca85',
        'neon-water':'#84F7D4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor:{
        'neon-text-water':'#84F7D4',
        'neon-pink':'#F353A9', 
        'neon-text-blueberry':'#9C62E5',
        'dark-neon-fade': '#453F9E',
      },
      fontFamily:{
        burtons: 'burtons',
        titillumWebRegular: 'titillium_web_regular',
        titillumWebBold: 'titillium_web_bold',
        titillumWebBlack: 'titillium_web_black',
        bogartRegular: 'bogart_regular',
        montRegular: 'mont_regular',
        exo: 'exo',
      }
    },
  },
  plugins: [],
}
