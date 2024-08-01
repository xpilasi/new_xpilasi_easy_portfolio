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
        <div className='grid grid-col-2  justify-center items-center  '>
          <div className='text-2xl text-start'>
            <p>Thanks for looking around.</p>
            <p>Stay in touch.</p>
            
           
          </div>
          
          
        </div>
        {/* col 2 */}
        <div className=' text-6xl  gap-10  text-dark-neon-fade dark:text-white  sm:flex justify-center '>
              <a href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillLinkedin className={`${hoverScale110} cursor-pointer`}/></a>
              <a href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <AiFillGithub className={`${hoverScale110} cursor-pointer`}/></a>
              
              
      </div>
        <div className='grid grid-cols-2 gap-10 justify-center items-center  text-start text-2xl'>
        <ul className='flex text-end gap-2'>
        {/* <li>background </li> */}
        <li>skills</li>
        <li>/</li>
        <li>projects</li>
        <li>/</li>
        <li className='text-neon-pink  transition ease-in-out'>resume</li>
        
      </ul >
        <ul className='flex flex-col gap-2 justify-start text-end items-start'>
        
        
      </ul>
      
        </div>
      


      </article>
        <article className='  py-10'>
        © xPilab 2024
        </article>
    </section>
    
  )
}

export default Footer