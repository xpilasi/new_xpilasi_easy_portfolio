import React, { useEffect, useState } from 'react'
import SunMoonIcon from '../SunMoonIcon';
import ButtonWhite from '../buttons/ButtonWhite';


const Menu = ({darkMode,showMenu}) => {

    const cvUrl = 'https://drive.google.com/file/d/1gskQCNhkEyFgCH2RfqZiVGiDe1CSY3aT/view?usp=drive_link';
    const hoverScale110 = 'transform transition-transform hover:scale-110 mr-10';
    const altMenu = '/xpilasi';

    const [isVisible, setIsVisible] = useState(showMenu);
    

  useEffect(() => {
    setIsVisible(showMenu);
}, [showMenu]);

  return (
   

    <header 
    id='menu-top' 
    className={`transition-opacity duration-500 ease-in-out fixed z-40  bg-zinc-800 top-6 right-6 ${isVisible ? 'opacity-100 ' : 'opacity-0'}`}>

    <nav className=' mb-12 flex flex-col justify-start items-start  w-80 pl-14 pb-10 pt-20 '>
        
        {/* <div className=' text-3xl   dark:text-white'>{altMenu}
        </div> */}

        <ul className=' flex flex-col items-start'>
         
          <li className='font-interDisplayExtraLight text-md tracking-widest  pb-2 hover:text-green-300 transition-colors duration-500   '><a href="">About Me</a></li>
          <li className='font-interDisplayExtraLight text-md tracking-widest pb-2 hover:text-green-300 transition-colors duration-500 '><a href="">My projects</a></li>
          <li className='font-interDisplayExtraLight text-md tracking-widest pb-10 hover:text-green-300 transition-colors duration-500'><a href="">My Résumé</a></li>
          <li className='font-interDisplayExtraLight text-sm pb-5 text-green-300 tracking-widest'>SAY HELLO</li>
          <li className='font-interDisplayExtraLight pb-2 tracking-widest hover:text-green-300 transition-colors duration-500'><a href="">linkedin/xavier.pilasi</a></li>
          <li className='font-interDisplayExtraLight tracking-widest hover:text-green-300 transition-colors duration-500'><a href="">hey@xpilasi.com</a></li>
           
          
          
          
        </ul>
      </nav>
    </header>
      
  )
}

export default Menu