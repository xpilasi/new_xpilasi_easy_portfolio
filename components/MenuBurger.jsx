import React from 'react';
import useMenuStore from '@/store/menuStore';

const MenuBurger = ({ }) => {
  const { showMenu, toggleMenu, darkMode } = useMenuStore();

  return (
    <div className={`fixed lg:top-14 lg:right-14 z-50 top-10 right-10`}>
      <div 
        className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <span 
          className={`absolute top-1.5 w-8 h-0.5 ${darkMode ?'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out transform ${
            showMenu ? 'rotate-45 translate-y-1.5 translate-x-0.5 w-9' : 'rotate-0'
          }`}
        ></span>
        <span 
          className={`absolute top-5 left-1/2 w-4 h-0.5 ${darkMode ?'bg-white' : 'bg-black'} transition-all duration-300 ease-in-out transform ${
            showMenu ? '-rotate-45 -translate-y-2 w-9 -translate-x-4' : 'rotate-0'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default MenuBurger;