import React from 'react'
import SunMoonIcon from '../widgets/SunMoonIcon'
import ButtonWhite from '../widgets/buttons/ButtonWhite';


const MenuTop = ({darkMode,setDarkMode}) => {

    const cvUrl = 'https://drive.google.com/file/d/1gskQCNhkEyFgCH2RfqZiVGiDe1CSY3aT/view?usp=drive_link';
    const hoverScale110 = 'transform transition-transform hover:scale-110 mr-10';
    const altMenu = '/xpilasi';
    
  return (
   

    <header id='menu-top'>
    <nav className='py-10 mb-12 flex justify-between items-center  '>
        
        <div className=' text-3xl   dark:text-white'>{altMenu}
        </div>

        <ul className=' flex items-center'>
          <li className={hoverScale110}><SunMoonIcon darkMode={darkMode} setDarkMode={setDarkMode}/></li>
          <li>
            {/* <a className={` bg-neon-green text-black px-4 py-2 lg:px-6 lg:py-3  ml-10 mr-0` } 
              target="_blank"
              rel="noopener noreferrer"
              href={cvUrl}>Resume
              </a> */}
            <a  
              target="_blank"
              rel="noopener noreferrer"
              href={cvUrl}>
                <ButtonWhite 
                darkMode={darkMode}
                buttonName='My Resume'
                ></ButtonWhite>
              </a>
          </li>
          
        </ul>
      </nav>
    </header>
      
  )
}

export default MenuTop