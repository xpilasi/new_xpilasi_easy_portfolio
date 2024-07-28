import React from 'react'
import SunMoonIcon from '../widgets/SunMoonIcon';


const MenuTop = ({darkMode,setDarkMode}) => {

    const cvUrl = 'https://drive.google.com/file/d/1gskQCNhkEyFgCH2RfqZiVGiDe1CSY3aT/view?usp=drive_link';
    const hoverScale110 = 'transform transition-transform hover:scale-110';
    const altMenu = '/xpilasi';
    
  return (
   

    <header id='menu-top'>
    <nav className='py-10 mb-12 flex justify-between '>
        
        <div className=' text-3xl  text-dark-neon-fade dark:text-white'>
          {/* <Image src={darkMode ? logoXpWhite : logoXpBlueBerry} className='w-20 mt-0 lg:mb-0 '></Image> */}
          {altMenu}

        </div>

        <ul className=' flex items-center'>
          <li className={hoverScale110}><SunMoonIcon darkMode={darkMode} setDarkMode={setDarkMode}/></li>
          <li className={hoverScale110}>
            <a className={` bg-neon-pink text-white px-4 py-2 lg:px-6 lg:py-3 rounded-md ml-10 mr-0` } 
              target="_blank"
              rel="noopener noreferrer"
              href={cvUrl}>Resume
              </a></li>
          
        </ul>
      </nav>
    </header>
      
  )
}

export default MenuTop