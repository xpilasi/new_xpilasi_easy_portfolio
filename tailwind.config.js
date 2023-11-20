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
        'dark-neon-bg': '#1F1D44',
        'dark-neon-fade':'#453F9E',
        'neon-text-blueberry':'#9C62E5'
      },
      gradientColorStops: {
        'dark-neon-bg': '#1F1D44', 
        'dark-neon-fade': '#453F9E',
        'neon-text-blueberry':'#9C62E5',
        'neon-text-pink':'#F353A9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor:{
        'neon-text-water':'#84F7D4',
        'neon-text-pink':'#F353A9',
        'neon-text-blueberry':'#9C62E5',
        'dark-neon-fade': '#453F9E',
      },
      fontFamily:{
        burtons: 'burtons',
        titillumWebRegular: 'titillium_web_regular',
        titillumWebBold: 'titillium_web_bold',
        titillumWebBlack: 'titillium_web_black',
      }
    },
  },
  plugins: [],
}
