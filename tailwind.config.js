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
        // Modern Indigo/Purple palette
        'indigo-600': '#4F46E5',
        'indigo-500': '#6366F1',
        'indigo-400': '#818CF8',
        'purple-600': '#7C3AED',
        'purple-500': '#8B5CF6',
        'purple-400': '#A78BFA',
        // Light mode variants
        'light-indigo': '#EEF2FF',
        'light-purple': '#FAF5FF',
        'light-slate': '#F1F5F9',
      },
      gradientColorStops: {
        'dark-neon': '#1F1D44',
        'dark-neon-fade': '#453F9E',
        'neon-blueberry':'#9C62E5',
        'neon-pink':'#F87B91',
        'neon-orange':'#edca85',
        'neon-water':'#84F7D4',
        'neon-green':'#3DFA90',
        // Modern Indigo/Purple gradients
        'indigo-600': '#4F46E5',
        'indigo-500': '#6366F1',
        'indigo-400': '#818CF8',
        'purple-600': '#7C3AED',
        'purple-500': '#8B5CF6',
        'purple-400': '#A78BFA',
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
        'danny-grey': '#1D1D1D',
        // Modern Indigo/Purple text colors
        'indigo-600': '#4F46E5',
        'indigo-500': '#6366F1',
        'indigo-400': '#818CF8',
        'indigo-300': '#A5B4FC',
        'purple-600': '#7C3AED',
        'purple-500': '#8B5CF6',
        'purple-400': '#A78BFA',
      },
      fontFamily:{
        burtons: 'burtons',
        bogartRegular: 'bogart_regular',
        montRegular: 'mont_regular',
        exo: 'exo',
        robotoMedium: 'roboto-medium',
        interDisplayMedium: 'interdisplay-regular',
        interDisplayLight: 'interdisplay-light',
        interDisplayExtraLight: 'interdisplay-extralight',
        robotoLight: 'roboto-light',
      }
    },
  },
  plugins: [],
}
