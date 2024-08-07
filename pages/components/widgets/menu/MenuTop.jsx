import React, { useEffect, useState } from 'react'
import SunMoonIcon from '../SunMoonIcon';
import ButtonWhite from '../buttons/ButtonWhite';


const MenuTop = ({darkMode,setDarkMode,showMenu}) => {

    const cvUrl = 'https://drive.google.com/file/d/1gskQCNhkEyFgCH2RfqZiVGiDe1CSY3aT/view?usp=drive_link';
    const hoverScale110 = 'transform transition-transform hover:scale-110 mr-10';
    const altMenu = '/xpilasi';

    const [isVisible, setIsVisible] = useState(showMenu);

    
  //   useEffect(() => {
  //     const menuElement = document.getElementById('menu-top');
  //     if (menuElement) {
  //         menuElement.className = showMenu ? '' : 'hidden';
  //     }

  //     console.log(menuElement.className);
  // }, [showMenu]); 
  
  
  // Se ejecuta cada vez que showMenu cambie

  useEffect(() => {
    setIsVisible(showMenu);
}, [showMenu]);

  return (
   

    <header 
    id='menu-top' 
    className={`transition-opacity duration-300 ${isVisible ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}>

    <nav className='py-2 mb-12 flex flex-col justify-start items-start  w-80 pl-14 pb-14  '>
        
        {/* <div className=' text-3xl   dark:text-white'>{altMenu}
        </div> */}

        <ul className=' flex flex-col items-start'>
          {/* <li className={`${hoverScale110} ${darkMode?'text-white':'text-yellow-300'}`}><SunMoonIcon darkMode={darkMode} setDarkMode={setDarkMode}/></li> */}
          {/* <li>
            
            <a  
              target="_blank"
              rel="noopener noreferrer"
              href={cvUrl}>
                <ButtonWhite 
                darkMode={darkMode}
                buttonName='My Resume'
                ></ButtonWhite>
              </a>
          </li> */}
          <li className='font-interDisplayExtraLight text-md tracking-widest  pb-2  '>About Me</li>
          <li className='font-interDisplayExtraLight text-md tracking-widest pb-10'>My projects</li>
          <li className='font-interDisplayExtraLight text-sm pb-5 text-green-300 tracking-widest'>SAY HELLO</li>
          <li className='font-interDisplayExtraLight pb-2 tracking-widest'>linkedin/xavier.pilasi</li>
          <li className='font-interDisplayExtraLight pb-2 tracking-widest'>hey@xpilasi.com</li>
           
          
          
          
        </ul>
      </nav>
    </header>
      
  )
}

export default MenuTop