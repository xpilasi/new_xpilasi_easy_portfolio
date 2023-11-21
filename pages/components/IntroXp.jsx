import React from 'react'
import { gorillaWebImg, logoXpBlueBerry, logoXpWhite, profilePictureXp } from '../images';
import Image  from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

const IntroXp = ({darkMode,setDarkMode}) => {
  return (
    <section 
    className='min-h-screen'
    >
     {/* Top menu */}
     <nav className='py-10 mb-12 flex justify-between'>
       
       <Image src={darkMode ? logoXpWhite : logoXpBlueBerry} width={100}></Image>
       <ul className=' flex items-center'>
         <li><BsFillMoonStarsFill 
         
         onClick={()=>setDarkMode(!darkMode)}
         className=' cursor-pointer text-dark-neon-fade dark:text-white text-3xl'/></li>
         <li><a className=' bg-gradient-to-r from-dark-neon-fade to-neon-text-pink text-white px-4 py-2 rounded-md ml-10' href='#'>Resume</a></li>
         
       </ul>
     </nav>
     {/* My picture */}
     <div className=''>
     <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
       <Image src={profilePictureXp} layout='fill' objectFit='cover'></Image>

     </div>  
     
     </div>

     {/* Name and small bg */}
     <div className=' md:text-left '>

     <div className=' text-center p-10'>
       <h2 className=' text-5xl py-2 tracking-tighter font-titillumWebBold text-dark-neon-fade dark:text-neon-text-water font-extrabold md:text-9xl'>Hi. I'm Xavi</h2>
       {/* <h3 className=' text-2xl py-2 md:text-3xl'>Junior Developer</h3> */}
       <p className=' text-md py-5 leading-8  md:text-xl max-w-2xl mx-auto'>I am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry 
in the challenging field of software development.</p>
       
     </div>

     {/* Social Media icons */}
     <div className=' text-5xl flex justify-center gap-16 py-3 text-neon-text-pink'>
         <AiFillLinkedin/>
         <AiFillGithub/>
         
     </div>
     </div>
     
    </section>
  )
}

export default IntroXp