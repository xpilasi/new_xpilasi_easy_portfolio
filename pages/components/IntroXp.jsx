import React from 'react'
import { gorillaWebImg, logoXpBlueBerry, logoXpWhite, profilePictureXp } from '../images';
import Image  from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

const IntroXp = ({darkMode,setDarkMode}) => {

const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water   inline-block text-transparent bg-clip-text ';
const gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
    
  return (
    <section 
    className='min-h-screen'
    >
     {/* Top menu */}
     <nav className='py-10 mb-12 flex justify-between'>
       
       <div className=''>
        <Image src={darkMode ? logoXpWhite : logoXpBlueBerry} width={100}></Image>
       </div>

       
       <ul className=' flex items-center'>
         <li><BsFillMoonStarsFill 
         
         onClick={()=>setDarkMode(!darkMode)}
         className=' cursor-pointer text-dark-neon-fade dark:text-white text-3xl'/></li>
         <li><a className={` ${gradientBg} font-bogartRegular text-white px-4 py-2 rounded-md ml-10 mr-20`} href='#'>Resume</a></li>
         <li>
             {/* Social Media icons */}
     <div className=' text-5xl flex justify-center gap-5 py-3 text-dark-neon-fade dark:text-white'>
         <AiFillLinkedin/>
         <AiFillGithub/>
         
     </div>
         </li>
       </ul>
     </nav>
     {/* My picture */}
     <div className=''>
     <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 overflow-hidden lg:w-90 lg:h-90 md:h-80 md:w-80'>
       <Image src={profilePictureXp} layout='fill' objectFit='cover'></Image>

     </div>  
     
     </div>

     {/* Name and small bg */}
     <div className=' md:text-left '>

     <div className=' text-center p-10'>
       <h2 className={`text-5xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-9xl `}>Hi. I'm Xavi</h2>
      
       <p className=' text-lg py-5 leading-8  md:text-2xl max-w-2xl mx-auto'>I am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry 
in the challenging field of software development.</p>
       
     </div>

    
     </div>
     
    </section>
  )
}

export default IntroXp