import React from 'react'

import logoXpWhite from '../../public/img/logo_xp_white.png'
import logoXpBlueBerry from '../../public/img/logo_xp_blueberry.png'
import profilePictureXp from '../../public/img/perfil.png'
import Image  from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

const IntroXp = ({darkMode,setDarkMode}) => {

const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water   inline-block text-transparent bg-clip-text ';
const gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
    
  return (
    <section 
    className='md:min-h-screen section ' id='intro'
    >
      {/* First screen full */}
      <div className='min-h-screen'> 

{/* Top menu */}
<nav className='py-10 mb-12 flex justify-between'>
       
       <div className=''>
        <Image src={darkMode ? logoXpWhite : logoXpBlueBerry} className='w-20 mt-0 lg:mb-0 '></Image>
       </div>

       
       <ul className=' flex items-center'>
         <li><BsFillMoonStarsFill 
         
         onClick={()=>setDarkMode(!darkMode)}
         className=' cursor-pointer text-dark-neon-fade dark:text-white text-3xl lg:text-4xl'/></li>
         <li><a className={` ${gradientBg} text-white px-4 py-2 lg:px-6 lg:py-3 rounded-md ml-10 mr-0` } href='#'>Resume</a></li>
         
       </ul>
     </nav>

  {/* Title + Social Media Icons  */}
<div className=' py-10'>

{/* Name and small bg */}
  <div className=' text-left'>

  <div className=' text-left '>
    <h2 className={`text-4xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-6xl `}>Hi, I'm Xavi.</h2>
    <br></br>
    <h2 className={`text-4xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-6xl `}>A Flutter and React</h2>
    <br></br>
    <h2 className={`text-4xl py-2 tracking-tighter font-bogartRegular ${gradientText}  md:text-6xl `}>developer.</h2>
  
  
    
  </div>



  </div>
{/* Icons Social Media */}
<div className=' text-6xl flex justify-left gap-5 py-3 text-dark-neon-fade dark:text-white mt-10 sm:flex justify-center'>
    <AiFillLinkedin/>
    <AiFillGithub/>
    
</div>

</div>
     
      {/* End first screen */}
      </div>
     
     {/* Profile picture + description */}
     <div className='py-10 mb-12'>

      {/* My picture */}
     <div className=' '>
     <div className=' relative mx-auto  rounded-full w-60 h-60 mt-10 overflow-hidden lg:w-90 lg:h-90 md:h-80 md:w-80'>
       <Image src={profilePictureXp} layout='fill' objectFit='cover'></Image>
       

     </div>  
     <div><p className=' md:text-center text-lg py-5 leading-8  md:text-2xl max-w-2xl mx-auto'>I am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry 
in the challenging field of software development.</p></div>
     
     </div>
     </div>
     
    </section>
  )
}

export default IntroXp