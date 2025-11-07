import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import Link from 'next/link';
import { PiGitlabLogoSimpleThin } from "react-icons/pi";
import useMenuStore from '@/store/menuStore';

const Footer = () => {

const { darkMode } = useMenuStore();

const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
const gitHubUrl = 'https://github.com/xpilasi';
const resumeUrl = 'https://drive.google.com/file/d/102JONLRudD3tPyBdPKZZbX03G7QKpj3z/view?usp=sharing';

const hoverScale110 = 'transform transition-all hover:scale-105';

const iconHoverClasses = darkMode
  ? 'hover:text-neon-green'
  : 'hover:text-dark-neon-fade';

const linkHoverClasses = darkMode
  ? 'hover:text-neon-green'
  : 'hover:text-dark-neon-fade';

  return (
    <section className='mt-10 text-center'>
      
      <article className='lg:grid lg:grid-cols-3'>
        {/* col 1 */}
        <div className='grid grid-col-1  justify-start items-center  '>
          <div className='text-md font-extralight text-start font-interDisplayExtraLight tracking-widest'>
            <p>Thanks for looking around.</p>
            <p>Stay in touch.</p>
            
           
          </div>
          
          
        </div>
        {/* col 2 */}
        <div className=' text-4xl text-center mb-2 lg:mb-0 lg:gap-10 gap-3 dark:text-white flex justify-end lg:justify-center items-center '>
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

      {/* col 3 */}
      <div className='flex justify-end items-center  text-md font-interDisplayExtraLight font-extralight'>
          <ul className='flex text-end gap-1'>

            <li className={`hover:cursor-pointer tracking-widest ${hoverScale110} ${linkHoverClasses}`}><Link href='/#about-me'>about me</Link></li>
            <li className={`hover:cursor-pointer tracking-widest ${hoverScale110} ${linkHoverClasses}`}><Link href='/#my-projects'>my projects</Link></li>
            <li className={`hover:cursor-pointer tracking-widest ${hoverScale110} ${linkHoverClasses}`}><Link href={resumeUrl} target="_blank">resume</Link></li>


          </ul >
        
      
      </div>
      


      </article>
        <article className='  py-10 font-extralight'>
        © xPilab 2024
        </article>
    </section>
    
  )
}

export default Footer