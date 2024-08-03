import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

const Footer = () => {

const linkedInUrl = 'https://www.linkedin.com/in/xavierpilasi/';
const gitHubUrl = 'https://github.com/xpilasi';

const hoverScale110 = 'transform transition-transform hover:scale-110';
  return (
    <section className='mt-10 text-center'>
      <article className='lg:grid lg:grid-cols-3'>
        {/* col 1 */}
        <div className='grid grid-col-1  justify-start items-center  '>
          <div className='text-md font-extralight text-start'>
            <p>Thanks for looking around.</p>
            <p>Stay in touch.</p>
            
           
          </div>
          
          
        </div>
        {/* col 2 */}
        <div className=' text-4xl text-center mb-2 lg:mb-0 lg:gap-10 gap-3 text-dark-neon-fade dark:text-white flex justify-end lg:justify-center items-center '>
              <a href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillLinkedin className={`${hoverScale110} cursor-pointer`}/></a>
              <a href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillGithub className={`${hoverScale110} cursor-pointer`}/></a>
              
              {/* col 3 */}
      </div>
        <div className='flex justify-end items-center  text-md  font-extralight'>
        <ul className='flex text-end gap-2'>
        {/* <li>background </li> */}
        <li className={`hover:text-neon-pink hover:cursor-pointer ${hoverScale110}`}>skills</li>
        <li>/</li>
        <li className={`hover:text-neon-pink hover:cursor-pointer ${hoverScale110}`}>projects</li>
        <li>/</li>
        <li className={`hover:text-neon-pink hover:cursor-pointer ${hoverScale110}`}>resume</li>
        
      </ul >
        <ul className='flex flex-col gap-2 justify-start text-end items-start'>
        
        
      </ul>
      
        </div>
      


      </article>
        <article className='  py-10 font-extralight'>
        © xPilab 2024
        </article>
    </section>
    
  )
}

export default Footer