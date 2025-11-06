import React, { useEffect, useState } from 'react'
import useMenuStore from '@/store/menuStore'

const Menu = () => {
  const { showMenu, setShowMenu, darkMode } = useMenuStore();

  
  const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
  const resumeUrl = '/xpilasi_2025_cv.pdf';

  const handleClick = (e, id) => {
    e.preventDefault();
    setShowMenu(false);
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id='menu-top'
      className={`transition-opacity duration-500 ease-in-out fixed left-0 right-0 top-0 bottom-0 md:w-80 bg-opacity-100 md:rounded-2xl md:shadow-2xl backdrop-blur-md
      ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-white to-slate-50'}
      md:top-6 md:right-6 md:left-auto md:bottom-auto
      ${showMenu ? 'opacity-100 z-30' : 'opacity-0'}`}>

      <nav 
        className=' mb-12 flex flex-col md:justify-start  md:items-start   md:pl-14 pb-10 md:pt-20  pt-40   '>

        <ul className=' flex flex-col md:items-start items-center z-50'>
         
          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest pb-2 transition-colors duration-300 ${darkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>
            <a
              onClick={(e) => handleClick(e, '#about-me')}
              href="#about-me">About Me</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest pb-2 transition-colors duration-300 ${darkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a
              onClick={(e) => handleClick(e, '#my-projects')}
              href="#my-projects">My projects</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest pb-10 transition-colors duration-300 ${darkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a href={resumeUrl} download="xpilasi_2025_cv.pdf">My Résumé</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-5 tracking-widest ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>SAY HELLO</li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-2 tracking-widest transition-colors duration-300 ${darkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a href={linkedInUrl} target="_blank">linkedin/xavier.pilasi</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest transition-colors duration-300 ${darkMode ? 'text-white hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'} ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a
              onClick={(e) => handleClick(e, '#contact')}
              href='#contact' >hey@xpilasi.com</a></li>
           
        </ul>

        <div className={``}>

        </div>
      </nav>
    </header>
  )
}

export default Menu