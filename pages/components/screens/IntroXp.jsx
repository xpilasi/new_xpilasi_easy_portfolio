import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import { PiGitlabLogoSimpleThin } from "react-icons/pi";
import MenuTop from '../../../components/MenuTop';
import useMenuStore from '@/store/menuStore.js';




const IntroXp = () => {

  const { darkMode } = useMenuStore();

// const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-green   inline-block text-transparent bg-clip-text ';
const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-green   inline-block text-transparent bg-clip-text ';
const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
const gitHubUrl = 'https://github.com/xpilasi';

const hoverScale110 = 'transform transition-all hover:scale-110';

const textAltDark = 'text-neon-green';
const textAltLight= 'text-dark-neon-fade';
let textAlt = ``;

const iconHoverClasses = darkMode
  ? 'hover:text-neon-green'
  : 'hover:text-dark-neon-fade';

darkMode ? textAlt = textAltDark :textAlt = textAltLight ;
    
  return (
    <section className='min-h-screen  flex flex-col   ' id='intro-xp'>
      
    <div className='min-h-screen flex flex-col  items-center justify-center'> 


        {/* Title + Social Media Icons  */}
        <div className='  flex-col '>

          {/* Name and small bg */}
            <div className=' text-center neon-'>

              <div className=' '>
                
                <h2 className={`text-7xl font-interDisplayMedium font-bold  tracking-tighter  md:text-7xl lg:text-9xl `}>Hi, I'm Xavi.</h2>
                
                <h2 className={`text-4xl mt-0 tracking-tighter font-interDisplayLight ${textAlt}  md:text-6xl `}>A Tech Product Owner</h2>
                
              </div>

            </div>
            
          {/* Icons Social Media */}
          <div className=' text-6xl flex justify-left gap-5 py-3 mt-10 sm:flex justify-center'>
              <a href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillLinkedin className={`${hoverScale110} ${iconHoverClasses} cursor-pointer`}/></a>
              <a href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillGithub className={`${hoverScale110} ${iconHoverClasses} cursor-pointer`}/></a>
              <a href='https://gitlab.com/xpilasi'
                target="_blank"
                rel="noopener noreferrer">
                  <PiGitlabLogoSimpleThin className={`${hoverScale110} ${iconHoverClasses} cursor-pointer`}/></a>


          </div>

        </div>
      
        
      
     
    </div>
     
 
    </section>
  )
}

export default IntroXp