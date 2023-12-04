import React from 'react'
import logoXpWhite from '../../../public/img/logo_xp_white.png'
import logoXpBlueBerry from '../../../public/img/logo_xp_blueberry.png'
import Image  from 'next/image';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import SunMoonIcon from '../widgets/SunMoonIcon';


const IntroXp = ({darkMode,setDarkMode}) => {

const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water   inline-block text-transparent bg-clip-text ';
const gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink hover:opacity-80'; 
    
  return (
    <section 
    className='md:min-h-screen section  ' id='intro'
    >
      {/* First screen full */}
      <div className='min-h-screen'> 

{/* Top menu */}
<nav className='py-10 mb-12 flex justify-between'>
       
       <div className=''>
        <Image src={darkMode ? logoXpWhite : logoXpBlueBerry} className='w-20 mt-0 lg:mb-0 '></Image>
       </div>

       
       <ul className=' flex items-center'>
         <li><SunMoonIcon darkMode={darkMode} setDarkMode={setDarkMode}/></li>
         <li><a className={` bg-neon-pink text-white px-4 py-2 lg:px-6 lg:py-3 rounded-md ml-10 mr-0` } href='#'>Resume</a></li>
         
       </ul>
     </nav>

  {/* Title + Social Media Icons  */}
<div className=' py-20  my-auto'>

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
     
 
    </section>
  )
}

export default IntroXp