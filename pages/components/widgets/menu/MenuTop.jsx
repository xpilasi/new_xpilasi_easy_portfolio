import React, { useEffect, useState } from 'react'

const Menu = ({darkMode,showMenu,setShowMenu}) => {

    const cvUrl = 'https://drive.google.com/file/d/1gskQCNhkEyFgCH2RfqZiVGiDe1CSY3aT/view?usp=drive_link';
    const hoverScale110 = 'transform transition-transform hover:scale-110 mr-10';
    const altMenu = '/xpilasi';
    const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
    const resumeUrl = 'https://drive.google.com/file/d/1-cjh09ZKeTZVRypii8fqbPqg8aExEpv-/view?usp=drive_link';
  
  return (
  //  Message

    <header 
    
    id='menu-top' 
    className={`  transition-opacity duration-500 ease-in-out fixed left-0 right-0 top-0 bottom-0 md:w-80 bg-opacity-100 bg-black lg:bg-zinc-800 md:top-6 md:right-6 md:left-auto md:bottom-auto ${showMenu == false? 'opacity-100 z-30 ' : 'opacity-0'}`}>

    <nav 
      
      className=' mb-12 flex flex-col md:justify-start  md:items-start   md:pl-14 pb-10 md:pt-20  pt-40  '>
        
        {/* <div className=' text-3xl   dark:text-white'>{altMenu}
        </div> */}

        <ul className=' flex flex-col md:items-start items-center'>
         
          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest  pb-2 hover:text-green-300 transition-colors duration-500 ${showMenu? 'pointer-events-none' : ''}`}>
            <a 
              onClick={()=>{setShowMenu(false); }}    
              href="#about-me">About Me</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest  pb-2 hover:text-green-300 transition-colors duration-500 ${showMenu ? 'pointer-events-none' : ''}`}>
              <a 
              onClick={()=>{setShowMenu(false); }}
              href="#my-projects">My projects</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest pb-10 hover:text-green-300 transition-colors duration-500 ${showMenu ? 'pointer-events-none' : ''}`}>
              <a 
              onClick={()=>{setShowMenu(false); }}
              href= {resumeUrl} target="_blank" >My Résumé</a></li>
          
          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-5 text-green-300 tracking-widest ${showMenu ? 'pointer-events-none' : ''}`}>SAY HELLO</li>
          
          <li className={`font-interDisplayExtraLight md:text-base text-2xl pb-2 tracking-widest hover:text-green-300 transition-colors duration-500 ${showMenu ? 'pointer-events-none' : ''}`}>
              <a 
              onClick={()=>{setShowMenu(false); }}
              href={linkedInUrl} target="_blank">linkedin/xavier.pilasi</a></li>

          <li className={`font-interDisplayExtraLight md:text-base text-2xl tracking-widest hover:text-green-300 transition-colors duration-500 ${showMenu ? 'pointer-events-none' : ''}`}>
              <a 
              onClick={()=>{setShowMenu(false); }}
              href='#contact' >hey@xpilasi.com</a></li>
           
          
          
          
        </ul>

        <div className={``}>

        </div>
      </nav>
    </header>
      
  )
}

export default Menu