import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import MenuTop from './MenuTop';

const MenuBurger = ({ darkMode, setDarkMode,showMenu, setShowMenu }) => {




    return (
     
      <div className={`fixed top-14 right-14 z-40`}>
      <div 
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer "
          onClick={() => setShowMenu(!showMenu)}
      >
          <span 
              className={`absolute top-1.5 w-8   h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
                  showMenu ? 'rotate-45 translate-y-1.5 translate-x-0.5 w-9' : 'rotate-0'
              }`}
          ></span>
          <span 
              className={`absolute top-5 left-1/2 w-4 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
                  showMenu ? '-rotate-45 -translate-y-2 w-9 -translate-x-4' : 'rotate-0'
              }`}
          ></span>
      </div>
    </div>
      
        
    );
};

export default MenuBurger;