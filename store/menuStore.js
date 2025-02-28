import { create } from 'zustand'

const useMenuStore = create((set) => ({
  showMenu: false,
  setShowMenu: (value) => {
    if (typeof window !== 'undefined') {  // Check if we're on the client side
      set({ showMenu: value })
      console.log('showMenu set to:', value)
    }
  },
  toggleMenu: () => {
    if (typeof window !== 'undefined') {  // Check if we're on the client side
      set((state) => { 
        const newShowMenu = !state.showMenu
        console.log('showMenu toggled to:', newShowMenu)
        return { showMenu: newShowMenu }
      })
    }
  },

  darkMode: true,  // default value
  setDarkMode: (value) => {
    if (typeof window !== 'undefined') {
      set({ darkMode: value })
      document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light')
      console.log('Dark mode set to:', value)
    }
  },
  toggleDarkMode: () => {
    if (typeof window !== 'undefined') {
      set((state) => {
        const newDarkMode = !state.darkMode
        document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light')
        console.log('Dark mode toggled to:', newDarkMode)
        return { darkMode: newDarkMode }
      })
    }
  },
}))

export default useMenuStore 