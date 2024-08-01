import React from 'react'
import Image  from 'next/image';
import gorillaWeb from '../../../public/img/projects_logos/gorillaGrabLogoSVG.svg'
import justList from '../../../public/img/projects_logos/justListLogoSVGFinal.svg'
import barberWeb from '../../../public/img/projects_logos/vintageGroomLogoSVG.svg'
import db from '../../../public/img/icons/dbSVG.svg';
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import Project from '../widgets/Project';




const MyProjects = () => {

  const projectContainerStyle = 'grid-item bg-new-neon rounded-xl px-5 py-10';

  return (
    <section className='min-h-screen flex flex-col justify-center items-center ' id='my-projects' >
      {/* My projects title */}
      <article className=' pt-10 '>
        {/* <Title className = ' 'title = {'My projects' }></Title> */}
        <MiniSubTitle miniSubTitle = {"These are the projects I've developped since I started my journey."}/>
           
      </article> 

      <article className='flex justify-center items-center py-20 '>
      {/* Projects */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-10 '>
              
              <Project imageSrc={gorillaWeb} projectName='Gorilla Grab' designType='Mobile App'></Project>
              <Project imageSrc={justList} projectName='Just List' designType='Mobile App'></Project>
              <Project imageSrc={barberWeb} projectName='Vintage Groom' designType='Web design'></Project>

             
            
          </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects