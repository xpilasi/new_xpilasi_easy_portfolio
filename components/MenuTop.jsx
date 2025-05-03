import React, { useEffect, useState } from 'react'
import useMenuStore from '@/store/menuStore'

const Menu = () => {
  const { showMenu, setShowMenu, darkMode } = useMenuStore();

  
  const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
  const resumeUrl = 'https://drive.google.com/file/d/102JONLRudD3tPyBdPKZZbX03G7QKpj3z/view?usp=sharing';

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
      className={`  transition-opacity duration-500 ease-in-out fixed left-0 right-0 top-0 bottom-0 md:w-80 bg-opacity-100 
      ${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-white to-gray-100'} 
      md:top-6 md:right-6 md:left-auto md:bottom-auto 
      ${showMenu ? 'opacity-100 z-30' : 'opacity-0'}`}>

      <nav 
        className=' mb-12 flex flex-col md:justify-start  md:items-start   md:pl-14 pb-10 md:pt-20  pt-40   '>

        <ul className=' flex flex-col md:items-start items-center z-50'>
         
          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest  pb-2 ${darkMode ? 'text-white hover:text-green-300' : 'text-black hover:text-neon-blueberry'} ${!showMenu ? 'pointer-events-none' : ''}`}>
            <a 
              onClick={(e) => handleClick(e, '#about-me')}    
              href="#about-me">About Me</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest  pb-2 ${darkMode ? 'text-white hover:text-green-300' : 'text-black hover:text-neon-blueberry'} ${  !showMenu ? 'pointer-events-none' : ''}`}>
              <a 
              onClick={(e) => handleClick(e, '#my-projects')}
              href="#my-projects">My projects</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest pb-10 ${darkMode ? 'text-white hover:text-green-300' : 'text-black hover:text-neon-blueberry'} transition-colors duration-500 ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a href= {resumeUrl} target="_blank" >My Résumé</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-5 ${!darkMode ? 'text-neon-blueberry' : 'text-green-300'} tracking-widest ${!showMenu ? 'pointer-events-none' : ''}`}>SAY HELLO</li>
          
          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-2 tracking-widest ${darkMode ? 'text-white hover:text-green-300' : 'text-black hover:text-neon-blueberry'} transition-colors duration-500 ${!showMenu ? 'pointer-events-none' : ''}`}>
              <a href={linkedInUrl} target="_blank">linkedin/xavier.pilasi</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest ${darkMode ? 'text-white hover:text-green-300' : 'text-black hover:text-neon-blueberry'} transition-colors duration-500 ${!showMenu ? 'pointer-events-none' : ''}`}>
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