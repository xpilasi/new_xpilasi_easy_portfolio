import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {IoMdSunny} from 'react-icons/io';

const SunMoonIcon = ({darkMode,setDarkMode}) => {

  return (
    darkMode 
    ? <IoMdSunny 
         
        onClick={()=>setDarkMode(!darkMode)}
        className=' cursor-pointer text-dark-neon-fade dark:text-white text-4xl lg:text-4xl'/>
    : <BsFillMoonStarsFill 
         
        onClick={()=>setDarkMode(!darkMode)}
        className=' cursor-pointer text-dark-neon-fade dark:text-white text-3xl lg:text-4xl'/>
    
  )
}

export default SunMoonIcon