import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';



const IntroXp = ({darkMode,setDarkMode}) => {

const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water   inline-block text-transparent bg-clip-text ';
const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
const gitHubUrl = 'https://github.com/xpilasi';

const hoverScale110 = 'transform transition-transform hover:scale-110';

    
  return (
    <section className='md:min-h-screenpt-20 items-center  ' id='intro-xp'>

    <div className='  '> 


        {/* Title + Social Media Icons  */}
        <div className='  flex-col py-10 '>

          {/* Name and small bg */}
            <div className=' text-center'>

              <div className=' '>
                <h2 className={`text-4xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-6xl lg:text-9xl `}>Hi, I'm Xavi.</h2>
                <br></br>
                <h2 className={`text-4xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-6xl `}>A Front End Developer</h2>
                
              </div>

            </div>
            
          {/* Icons Social Media */}
          <div className=' text-6xl flex justify-left gap-5 py-3 text-dark-neon-fade dark:text-white mt-10 sm:flex justify-center'>
              <a href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillLinkedin className={`${hoverScale110} cursor-pointer`}/></a>
              <a href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillGithub className={`${hoverScale110} cursor-pointer`}/></a>
              
              
          </div>

        </div>
      
        
      
     
    </div>
     
 
    </section>
  )
}

export default IntroXp